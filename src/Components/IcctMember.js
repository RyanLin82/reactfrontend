import React from "react";
import {withRouter} from 'react-router-dom';

class IcctMember extends React.Component {

	goBack = () => {
		this.props.history.goBack();
	}

	render(){
		console.log("IcctMember", this.props);
		return(
			<div>
				<h1>Jean</h1>
				<h1>Ryan</h1>
				<button onClick = {this.goBack}> goBack </button>
			</div>
		);
	}
	
}

export default withRouter(IcctMember);