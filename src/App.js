import React from 'react';
import StationMap from './StationMap';
import Question from './Question';
import Answer from './Answer';
import './App.css';
import L from 'leaflet';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			location:[], //returned from ISS-Location-Now api
			timestamp:'', //returned from ISS-Location-Now api
			humanNum: '', //retruned from People-In-Space API 
			userAnswer: '', //user's input number
			astronaut:[],
			rightOrWrong:0,//default 0 means that user haven't answered yet, 1 means right answer, 2 means wrong answer
			apiFail:0, //record if there is any error while fetch api

		}
	}


	checkAns=(event)=>{
		const count = Number(event.target.id); //convert string to number
		if(count === this.state.humanNum){
			this.setState({rightOrWrong:1});
			console.log("Bingo!!")
		}else{
			this.setState({rightOrWrong:2});
			console.log("opps wrong answer!!")
		}
	}

	closePopup=(event)=>{
		this.setState({rightOrWrong:0});
	}
	

	componentDidMount(){

		//function: fetch location data from API
		const fetchLocation = () => {
			fetch("http://api.open-notify.org/iss-now.json")
				.then(resp => resp.json())
				.then((data) => {
					this.setState({location:[data.iss_position.latitude,data.iss_position.longitude]})
					this.setState({timestamp: data.timestamp});
					this.setState({apiFail:0});
				}).catch(err => {

					//use default data
					let currentDate = new Date();
					this.setState({location:[-8.7021,33.6540]});
					this.setState({timestamp: currentDate});
					this.setState({apiFail:1});

					//showing the warning paragraph
					document.querySelector('#apiFail').style.display = "block"; 
					
					console.log("catched an error1!!!!!!!!:"+err)
				})
			console.log("fetched!!!")
		}



 // Latitue:-8.7021
 // Longitude:33.6540



		//function: fetch astronaut number from API
		const fetchPpNum = () => {
			fetch("http://api.open-notify.org/astros.json")
				.then(resp => resp.json())
				.then(data => {
					this.setState({humanNum:data.number});
					this.setState({astronaut:data.people});
					this.setState({apiFail:0});
				}).catch(err =>{

					//use default data
					this.setState({humanNum:10});
					this.setState({astronaut:[]});
					this.setState({apiFail:1});

					//showing the warning paragraph
					document.querySelector('#apiFail').style.display = "block"; 

					console.log("catched an error2!!!!!!!!:"+err)
				})

			console.log("astronaut updated!")
		}

	    //get the data for the first time
	    fetchLocation();
	    fetchPpNum();

	    // afterward, update the data in every 5 seconds
		setInterval(async function(){
			await fetchLocation();
		 await fetchPpNum();
		}
		,5000)


	}
		


	render(){
		if(this.state.location.length === 0 ){
			console.log("no location");
			return (
				<div id="App">
					<nav>
						<ul>
							<li><a className="navButton" href="#mapSection">Station Location</a></li>
						    <li><a className="navButton" href="#interactiveSection">Astronaut Number</a></li>
						</ul>
					</nav>
					<div className="container mapSection">
						<div>
							<h1 >The International Space Station Location</h1>
							<p>Thanks <a href="http://open-notify.org/" target="new">Open APIs From Space</a> and <a href="https://leafletjs.com/" target="new">Leaflet</a> for providing reliable APIs</p>
						</div>
						<div>loading</div>
					</div>
					<footer>
						<div id="footer">
							<p className="footerContent">Author: Hsin Huei Li</p>
	  						<p className="footerContent">Mail me: <a href="mailto:lihsinhuei@gmail.com">lihsinhuei@gmail.com</a></p>
	  						<p className="footerContent"><a href="https://github.com/lihsinhuei/spacestation">github</a></p>
						</div>
					</footer>
				</div>
			)
		}else{
			console.log("why here");
			return (
				<div id="App">
					<nav>
						<ul>
							<li><a className="navButton" href="#mapSection">Station Location</a></li>
						    <li><a className="navButton" href="#interactiveSection">Astronaut Number</a></li>
						</ul>
					</nav>
					<div className="container mapSection">
						<div>
							<h1 >The International Space Station Location</h1>
							<p>Thanks <a href="http://open-notify.org/" target="new">Open APIs From Space</a> and <a href="https://leafletjs.com/" target="new">Leaflet</a> for providing reliable APIs</p>
						</div>
						<StationMap location={this.state.location} timeStamp={this.state.timestamp} apiFail={this.state.apiFail} />
					</div>
					<Question rightOrWrong={this.state.rightOrWrong}  humanNum={this.state.humanNum} checkAns={this.checkAns} />
					<Answer rightOrWrong={this.state.rightOrWrong} humanNum={this.state.humanNum} closePopup={this.closePopup}/>
					<footer>
						<div id="footer">
							<p className="footerContent">Author: Hsin Huei Li</p>
	  						<p className="footerContent">Mail me: <a href="mailto:lihsinhuei@gmail.com">lihsinhuei@gmail.com</a></p>
	  						<p className="footerContent"><a href="https://github.com/lihsinhuei/spacestation">github</a></p>
						</div>
					</footer>
				</div>
            );

		}
	}		

} 

export default App;