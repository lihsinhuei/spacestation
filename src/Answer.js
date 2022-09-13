import React from 'react';

const Answer = (props) =>{
	if(props.rightOrWrong === 0){
		//do nothing

	}else if(props.rightOrWrong === 1){
		return(
			<div className="tc" style={{background:'#a9d4de'}}>
				<h2>Bingo!Brilliant!</h2>
				<p>Yes, there is {props.humanNum} astronauts in space now!</p>
			</div>
		)	
	}else if(props.rightOrWrong === 2){
		return(
			<div className="tc" style={{background:'#a9d4de'}}>
				<h2>Nice shot!</h2>
				<p>In fact, there is {props.humanNum} astronauts in space now!</p>
			</div>
		)
	}
	

};


export default Answer;