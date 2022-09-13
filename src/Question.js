import React from 'react';
import "./Question.css";



const Question = React.memo((props) =>{
	//create options for user to choose
	let options = [props.humanNum];
	for(let i=0 ; i<2 ; i++){
		let opt = Math.floor(Math.random()*40);
		options.push(opt);
	}

	//shuffle the options 
	function shuffle(array) {
	  let currentIndex = array.length,  randomIndex;

	    // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;

	    // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
	  	array[randomIndex], array[currentIndex]];

  		return array;
	}
	
	shuffle(options);


	//prevent rerender whole app after form submitted
	const handleSubmit= (event) =>{
		event.preventDefault();
		console.log("handle Submit")
	}

	// const checkAns=(event)=>{
	// 		console.log("I am here");
	// 		console.log(event.target.id)

	// }



	return(

		<div className="tc questionDiv">
			<h1 className="tc">Quick Q&A!!!</h1>
			<h2>Guess how many antronies are in space now?</h2>
				<button type="submit" onClick={props.checkAns} className="unselected" key="A" id="aa" id={options[0]}> {options[0]} </button>
				<button type="submit" onClick={props.checkAns} className="unselected" key="B" id="bb" id={options[1]}> {options[1]} </button>
				<button type="submit" onClick={props.checkAns} className="unselected" key="C" id="cc" id={options[2]}> {options[2]} </button>
		</div>
	)

});


export default Question;