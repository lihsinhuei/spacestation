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


	//prevent re-render the whole app after submit the form. We don't need it now, because we are using <a> instead of <button> or <form>
	// const handleSubmit= (event) =>{
	// 	event.preventDefault();
	// 	console.log("handle Submit")
	// }


	return(

		<div id="interactiveSection" className="container">
			<div>
				<h1>How many antronies are in the space now?</h1>
			</div>
			<ol>
				<h2>Take a guess!</h2>
				<li className="answerOption">
					<a href='#answerSection' type="button" onClick={props.checkAns} className="unselected" id={options[0]}>1. {options[0]} people</a>
				</li>
				<li className="answerOption">	
					<a href='#answerSection' type="button" onClick={props.checkAns} className="unselected" id={options[1]}>2. {options[1]} people</a>
				</li>
				<li className="answerOption">	
					<a href='#answerSection' type="button" onClick={props.checkAns} className="unselected" id={options[2]}>3. {options[2]} people</a>
				</li>
			</ol>
		</div>
	)

});



export default Question;