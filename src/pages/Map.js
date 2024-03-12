import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import "./Map.css"

function Map() {
  const position = [49.820, 15.474]; // Počáteční pozice mapy

  return (
    <div>
      <Navbar />
      <div className='SearchMap'>
      <input type='text' />
      <input type='button' value="Hledat" />
      
      </div>
      <div className='Map'>
    <MapContainer center={position} zoom={8} style={{ width: '90%', height: '80vh', marginTop:'50px' }}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={position}>
     
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    </div>
  );
}
export default Map;