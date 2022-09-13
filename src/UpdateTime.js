import React from 'react';

const UpdateTime = ({timeStamp}) => {
	const time = new Date(timeStamp*1000).toLocaleDateString("en-US")
	return(
		<div className=" gray f5-ns tc" style={{background:"#78B2BF" }}>last updated time : {time}</div>
	)

}


export default UpdateTime; 