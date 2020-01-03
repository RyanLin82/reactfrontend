import React from 'react';
import {withRouter} from 'react-router-dom';
const showMultipleParam = (props) => {
	
		const query =  new URLSearchParams(props.location.search)
		console.log("[showMultipleParam]", props);
		console.log("[showMultipleParam]", query);
		let params = "";
		for(let param of query.entries()){
			console.log("[param]", param);
            params += param[0] + ' : ' + param[1] +' ';
		}
		return (
			<div>
				<h3>{params}</h3>
			</div>
		)
}

export default withRouter(showMultipleParam);