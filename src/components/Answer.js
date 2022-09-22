import React from 'react';
import "./Answer.css"

const Answer = (props) =>{



	if(props.rightOrWrong === 0){
		//just return an empty div with a id so that after clicking on of the anwer options, it can jump to #answerSection
		return(
			<div id="answerSection">
			</div>
		)

	}else if(props.rightOrWrong === 1){
		return(
			<div className="modal" >
				<div className="modal_content">
					<h2 style={{"color":"#0e7253"}}>Bingo!Brilliant!</h2>
					<p>Yes, there is {props.humanNum} astronauts in space now!</p>
					<button onClick={props.closePopup}>Try again</button>
				</div>
			</div>
		)	
	}else if(props.rightOrWrong === 2){
		return(
			<div className="modal">
				<div className="modal_content">
					<h2 style={{"color":"#dbc908"}}>Opps!!Wrong answer</h2>
					<p>In fact, there is {props.humanNum} astronauts in space now!</p>
					<button onClick={props.closePopup}>Try again</button>
				</div>
			</div>
		)
	}
	

};


export default Answer;