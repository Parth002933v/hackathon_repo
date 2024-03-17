// import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from "../assets/placeholder.png"
// Custom icon
const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [35, 35], // Size of the icon
});

// eslint-disable-next-line react/prop-types
const PlaceRoute = ({ center, zoom }) => {
  // Example locations
  const locations = [
    { name: "SRKI", position: [21.200410809102284, 72.84092498239868], description: "KLord Plaza" },
    { name: "SCET", position: [51.515, -0.1], description: "asdadsad" },
  ];

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map(loc => (
        <Marker position={loc.position} icon={customIcon} key={loc.name}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PlaceRoute;
