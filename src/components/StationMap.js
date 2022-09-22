import React from 'react';
import './StationMap.css';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const StationMap = ({location,timeStamp,apiFail}) =>{

	//javascrip uses millionsecond, thus we need to multiply timeStamp by 1000 
	const time = new Date(timeStamp*1000).toLocaleDateString("en-US")


	return(
		<div id="mapSection">

			{/*demonstrate the data */}
			<div id="summarize">
				<p style={{}}> - last updated time : {time}</p>
				<p> - Latitue: <span className="locationData" >{location[0]}</span> </p>
				<p> - Longitude: <span className="locationData" >{location[1]}</span> </p>
				<div style={{"fontStyle":"italic"}}> Data is updated every <span style={{"color":"#c9082b"}}>5</span> seconds.</div>
			</div>
			<div id="apiFail">
				<p>Opps!!API updating failed. To see the correct data, please change your browser setting. For Chrome users: <br /> 1. Go to Settings > Privacy and Security <br /> 2. Change Insecure Content (under permissions) from block(default) to allow. <br /> 3. Reload this page.</p>
			</div>
			<div style={{paddingBottom:'40px'}}>

			{/*Using react-leaflet map package*/}
			<MapContainer id="map" center={location}  zoom={2} scrollWheelZoom={true}>
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