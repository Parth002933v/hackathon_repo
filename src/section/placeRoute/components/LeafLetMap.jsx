import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';

import dMarker from '../../../assets/placeholder.png';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

function createCustomMarker(waypointIndex, numberOfWaypoints, waypoint, options) {
    // Check if the current waypoint is the last one (destination)
    if (waypointIndex === numberOfWaypoints - 1) {
        // Create a custom icon for the destination marker
        const destinationIcon = L.icon({
            iconUrl: dMarker, // Path to your custom destination marker icon
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // Return a marker with the custom icon
        return L.marker(waypoint.latLng, { ...options, icon: destinationIcon });
    }

    // For all other waypoints, return the default marker
    return L.marker(waypoint.latLng, options);
}


function Route({ from, to }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        const plan = new L.Routing.Plan([from, to], {
            createMarker: function (i, waypoint, numberOfWaypoints) {
                // The number of waypoints includes the starting point and destination
                return createCustomMarker(i, numberOfWaypoints, waypoint, {
                    draggable: true
                });
            },
            routeWhileDragging: true,
        });


        const routingControl = L.Routing.control({


            plan,
            waypoints: [
                L.latLng(from[0], from[1]),
                L.latLng(to[0], to[1])

            ],

            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            geocoder: L.Control.Geocoder.nominatim(),
            show: true,
        }).addTo(map);

        console.log(to)

        return () => map.removeControl(routingControl);
    }, [map, from, to]);

    return null;
}

export default function LeafLetMap() {

    const [currentPosition, setCurrentPosition] = useState(null);

    const collages = useSelector((state) => state.collagesStore.collages); // Access collages from Redux state
    const navigateTo = useSelector((state) => state.collagesStore.navigateTo); // Access navigateTo from Redux state
    const to = [21.18232818727316, 72.80600879597314]; // Destination (B)

    useEffect(() => {
        // Request user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition([position.coords.latitude, position.coords.longitude]);
            },
            () => {
                console.error('Could not retrieve your location');
            }
        );
    }, []);

    // Fallback position in case geolocation is not available
    const defaultPosition = [21.1820631, 72.8034339];

    // Use currentPosition if available, otherwise use defaultPosition
    const from = currentPosition || defaultPosition;



    const MapEffects = () => {
        const map = useMapEvents({
            locationfound: (location) => {
                setCurrentPosition([location.latlng.lat, location.latlng.lng]);
                map.flyTo(location.latlng, map.getZoom());
            },
        });

        useEffect(() => {
            if (currentPosition && !navigateTo.id) {

                // Add markers to the map
                collages.forEach((collage) => {

                    const contentString = `
                    <div class="info-content" style="padding: 7px; max-width: 200px;">
                      <h1 style="font-size: 15px; margin: 0;">${collage.name}</h1>
                      <img src="${collage.url}" class="w-full h-16 my-1 border p-0.5 border-black object-cover" alt="" />
                      <p class="line-clamp-5 " style="font-size: 12px;">${collage.description}</p>
                    </div>
                  `;

                    const customIcon = L.icon({
                        iconUrl: dMarker, // Specify the path to your custom marker icon
                        iconSize: [25, 41], // Size of the icon (width, height)
                        iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
                        popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
                    });

                    const marker = L.marker([collage.lat, collage.lng], {
                        icon: customIcon,
                    }).addTo(map);
                    marker.bindPopup(contentString);
                });
            }

            if (navigateTo.id) {
                // Clear existing markers
                map.eachLayer((layer) => {
                    if (layer instanceof L.Marker && !layer.options.permanent) {
                        map.removeLayer(layer);
                    }
                });

                // Route(from, [navigateTo.lat, navigateTo.lng])
            }

            return () => {
                // Cleanup map markers
                map.eachLayer((layer) => {
                    if (layer instanceof L.Marker && !layer.options.permanent) {
                        map.removeLayer(layer);
                    }
                });
            };
        }, [map, currentPosition, navigateTo, collages]);

        return null;
    };



    return (

        <MapContainer center={from} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapEffects />



            {
                Object.entries(navigateTo).length === 0 ? <></> : (<Route from={from} to={[navigateTo.lat, navigateTo.lng]} />)

            }

        </MapContainer>

    );
}
