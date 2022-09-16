import React from 'react';
import './StationMap.css';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const StationMap = ({location,timeStamp}) =>{
	const time = new Date(timeStamp*1000).toLocaleDateString("en-US")


	return(
		<div id="mapSection">
			<div id="summarize">
				<div style={{}}> - last updated time : {time}</div>
				<div> - Latitue:<span style={{"color":"#c9082b"}}>{location[0]}</span> </div>
				<div> - Longitude:<span style={{"color":"#c9082b"}}>{location[1]}</span> </div>
				<br></br>
				<div style={{"fontStyle":"italic"}}> Data is updated every <span style={{"color":"#c9082b"}}>5</span> seconds.</div>
			</div>
			<div style={{paddingBottom:'40px'}}>
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