import React from 'react';
import './StationMap.css';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const StationMap = ({location}) =>{

	return(
		<div style={{background: "#78B2BF",paddingBottom:'40px'}}>
		<MapContainer id="map" center={location} zoom={2} scrollWheelZoom={true}>
		  <TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  <Marker position={location}>
		    <Popup>
		      Latitue:{location[0]} <br /> Longitude:{location[1]} <br />
		    </Popup>
		  </Marker>
		</MapContainer>
		</div>
	)


};


export default StationMap;