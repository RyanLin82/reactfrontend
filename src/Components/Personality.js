import React from 'react';
import {withRouter} from 'react-router-dom'

const personality = (props) => {
	return (
		<div>
			<p>{props.personality}</p>
		</div>
	);
}

export default withRouter(personality);