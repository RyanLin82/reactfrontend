import React from "react";
class CMMember extends React.Component{

	state = {
		members:[
			{
				name:"Ricky",
				personality: "good man"
			},
			{
				name:"Jimmy",
				personality: ""
			}
		],
		memberNum:0
	}

	add = () => {
		this.setState(preState => ({memberNum:preState.memberNum+1}));
	}

	diff = () => {
		this.setState(preState => ({memberNum:preState.memberNum-1}));
	}
	render(){
		console.log("[CMMember]", this.props);
		return(
			<div>
				<h1>{this.state.members[0].name}</h1>
				<h1>{this.state.members[1].name}</h1>
				<button onClick = {this.add}>add</button>
				<button onClick = {this.diff}>diff</button>
				<h3>memberNum: {this.state.memberNum}</h3>
			</div>
		);
	}
}

export default CMMember;