import React from 'react';
import {withRouter} from 'react-router-dom';
import IcctMember from './IcctMember';

const icct = (props) => {
	console.log("icct", props);
	return (
		<div>
			<h1> ICCT Good </h1>
			<IcctMember />
		</div>
	);
}

export default icct;