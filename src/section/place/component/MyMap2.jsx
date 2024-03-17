import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

// Custom hook to ensure Google Maps library is loaded
function useGoogleMapsLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC5A2sHR79T-plzqTAkSVreNeMQ-phTCH4&libraries&callback=initMap`;
    script.async = true;


    window.initMap = () => setIsLoaded(true); // Callback function to set isLoaded to true
    document.head.appendChild(script);
    return () => {
      window.initMap = undefined;
      document.head.removeChild(script);
    };
  }, []);
  return isLoaded;
}




function MyMap2() {
  const place = useSelector((state) => state.place);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const isGoogleMapsLoaded = useGoogleMapsLoader();


  function moveToNewPosition(newPosition) {
    const newCenter = new google.maps.LatLng(newPosition.lat, newPosition.lng);
    mapRef.current.panTo(newCenter);
  }


  const initMap = useCallback(() => {
    if (!isGoogleMapsLoaded) return;

    const pos = { lat: 21.179586, lng: 72.810340 };
    const map = new window.google.maps.Map(mapRef.current, {
      mapId: '9fcdcd6761d70af4',
      center: pos,
      zoom: 13,
    });
    mapRef.current = map;

    setInfoWindow(new window.google.maps.InfoWindow());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          createCurrentUserMarker(userPos);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [isGoogleMapsLoaded]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  useEffect(() => {
    if (isGoogleMapsLoaded) {
      createMarkers();
    }
    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, [place, isGoogleMapsLoaded]);


  // Function to create markers for places
  async function createMarkers() {
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

    place.places.forEach((p) => {

      const pinElement = place.hoverdPlaceID === p.id
        ? new PinElement({ scale: 1.2, background: "#ffffff" }).element
        : null;



      const marker = new AdvancedMarkerElement({
        position: { lat: p.lat, lng: p.lng },
        map: mapRef.current,
        content: pinElement,
        title: p.name,
        zIndex: place.hoverdPlaceID === p.id ? 2 : undefined,
      });


  

      place.hoverdPlaceID === p.id ? moveToNewPosition({ lat: p.lat, lng: p.lng }) : null
      markersRef.current.push(marker);



      marker.addListener('click', () => {
        if (infoWindow) {
          const infoWindowContent = createInfoWindowContent(p);
          infoWindow.setContent(infoWindowContent);
          infoWindow.open(mapRef.current, marker);
        }
      });
    });
  };

  // Function to create marker for user's current location
  const createCurrentUserMarker = async (userposition) => {
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const pinScaled = new PinElement({
      glyphColor: "white",
      borderColor: "white",
      background: "#0000ff",
    });
    const marker = new AdvancedMarkerElement({
      position: userposition,
      map: mapRef.current,
      content: pinScaled.element,
      title: 'Your Location'
    });
  };

  function createInfoWindowContent(place) {
    const contentString = `
      <div class="info-content" style="padding: 7px; max-width: 200px;">
        <h1 style="font-size: 15px; margin: 0;">${place.name}</h1>
        
        <img src="${place.url}" class="w-full h-16 my-1 border p-0.5 border-black object-cover" alt="" />
        <p class="line-clamp-5 " style="font-size: 12px;">${place.description}</p>
      </div>
    `;

    return contentString;
  }

  return <div ref={mapRef} id="map" style={{ width: '100%', height: '95%' }} />;
}

export default React.memo(MyMap2);
