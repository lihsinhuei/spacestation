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
			toggle:0,
		}
	}


	checkAns=(event)=>{
		const count = Number(event.target.id); //convert string to number
		if(count === this.state.humanNum){
			this.setState({toggle:1});
			console.log("Bingo!!")
		}else{
			this.setState({toggle:2});
			console.log("nice shot!!")
		}
	}
	

	componentDidMount(){

		const fetchLocation = () => {
			fetch("http://api.open-notify.org/iss-now.json")
				.then(resp => resp.json())
				.then((data) => {
					this.setState({location:[data.iss_position.latitude,data.iss_position.longitude]})
					this.setState({timestamp: data.timestamp});
				})
			console.log("fetched!!!")
		}

		const fetchPpNum = () => {
			fetch("http://api.open-notify.org/astros.json")
				.then(resp => resp.json())
				.then(data => {
					this.setState({humanNum:data.number});
					this.setState({astronaut:data.people});
				})
			console.log("astronaut updated!")
		}

	    //get the data for the first time
	    fetchLocation();
	    fetchPpNum();

	    // afterward, update the data in every 10 seconds
		setInterval(async function(){
			await fetchLocation();
		 await fetchPpNum();
		}
		,10000)

	}


	render(){
		if(this.state.location.length === 0 ){
			console.log("no location");
			return (
				<>
					<nav className="pa3 pa4-ns">
					  <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Where Is The Space Station?</a>
					  <div className="tc pb3">
					    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Station Location</a>
					    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">astronaut</a>
					  </div>
					</nav>
					<h1>Loading</h1> 
				</>
			)
		}else{
			console.log("why here");
			return (
				<>
					<nav className="pa3 pa4-ns tc">
					
				 
					  <div className="tc pb3">
					    <a className="link dim gray f6 f5-ns dib mr3" href="#mapSection" title="Home">Station Location</a>
					    <a className="link dim gray f6 f5-ns dib mr3" href="#interactiveSection" title="About">astronaut</a>
					  </div>
					</nav>
					<h1 >Where Is The Space Station?</h1>
					<StationMap location={this.state.location} timeStamp={this.state.timestamp} />
					
					<Question humanNum={this.state.humanNum} checkAns={this.checkAns} />
					<Answer rightOrWrong={this.state.toggle} humanNum={this.state.humanNum} />
				</>
            );

		}
	}		

} 

export default App;