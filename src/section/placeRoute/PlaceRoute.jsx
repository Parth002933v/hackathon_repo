import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

function Route({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1])
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, from, to]);

  return null;
}

export default function PlaceRoute() {
  const position = [21.110825686183734, 72.76942046718713]; // Default map center, 
  const from = [21.218952689182697, 72.7863030800531]; // Starting point (A), 
  const to = [21.18232818727316, 72.80600879597314]; // Destination (B) , 

  return (
    <div className='my-auto h-[550px]'>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Route from={from} to={to} />
      </MapContainer>
    </div>
  );
}
