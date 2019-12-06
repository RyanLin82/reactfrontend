import React from 'react';

const statelessComponentProject = (props) => (
	<div onClick = {props.onClick}>
		<p> ProjectName: {props.ProjectName}</p>
		<p> TeamLead: {props.TeamLead}</p>
		<p> MemberNum: {props.MemberNum}</p>
	</div>
);

export default statelessComponentProject;