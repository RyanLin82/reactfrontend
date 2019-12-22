import React from 'react';
import {withRouter} from 'react-router-dom';
import CMMember from './CMMember';

class CM extends React.Component{

	state = {
		isShowMember:false
	}

	memberButton = () => {


		const isShowMember = !this.state.isShowMember;
		this.setState({isShowMember:isShowMember});
		console.log("memberButton",this.state);
	}

	showIcctByPush = () => {
		this.props.history.push('/ICCT');
	}

	showIcctByReplace = () => {
		this.props.history.replace('/ICCT');
	}

	render(){
		console.log('I was triggered during render');
		console.log("test",this.props);
		let showMember = null;
		if(this.state.isShowMember){
			showMember = (<div>
				<CMMember />
			</div>);
		}
		console.log("showMember", showMember);
		return (
			<div>
				<h1> Claim master good2 </h1>
				<button onClick = {this.memberButton}> member</button>
				<button onClick = {this.showIcctByPush}> ICCT push button</button>
				<button onClick = {this.showIcctByReplace}> ICCT Replace button</button>
				{showMember}
			</div>
		);
	}
}

export default CM;