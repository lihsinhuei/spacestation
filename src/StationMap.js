import React from 'react';
import './StationMap.css';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const StationMap = ({location,timeStamp}) =>{
	const time = new Date(timeStamp*1000).toLocaleDateString("en-US")


	return(
		<div id="mapSection">
			<div className=" gray f5-ns tc" style={{background:"#78B2BF" }}>last updated time : {time}</div>
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
		</div>
	)


};


export default StationMap;