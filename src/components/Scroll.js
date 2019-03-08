import React from 'react';

const Scroll =(props)=>{
	return(
		<div style={{ overflow: 'scroll', margin: '5px', border: '2px solid orange', height: '450px'}}>
      		{props.children}
    	</div>
		);
}

export default Scroll;