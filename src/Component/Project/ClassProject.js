import React from "react";
import StatelessComponentProject from './statelessComponentProject';

class ClassProjects extends React.Component{
	state = {
		projects: [
			{
				ProjectName : 'ICCT',
				TeamLead : 'Jean',
				MemberNum : 5
			},
			{
				ProjectName : 'CM',
				TeamLead : 'Ricky',
				MemberNum : 4
			}
		],
		addNewproject:{
				ProjectName : '',
				TeamLead : '',
				MemberNum : 0
		}
	}

	insertDataButtonClicked = () =>{
		
		const project = [...this.state.projects, this.state.addNewproject];
		console.log(project); 

		this.setState({
			projects:project,
			addNewproject : {
				ProjectName : '',
				TeamLead : '',
				MemberNum : 0
			}
		});
	}

	projectNameOnchange = (event) => {
		console.log(event);
		console.log(event.target.value);
		const addNewproject = this.state.addNewproject;
		addNewproject.ProjectName = event.target.value;
		this.setState({addNewproject:addNewproject});
	}

	teamLeadOnchange = (event) => {
		const addNewproject = this.state.addNewproject;
		addNewproject.TeamLead = event.target.value;
		this.setState({addNewproject:addNewproject});
	}

	memberNumOnchange = (event) => {
		const addNewproject = this.state.addNewproject;
		addNewproject.MemberNum = event.target.value;
		this.setState({addNewproject:addNewproject});
	}

	projectBlockOnclicked = (key) => {
		console.log(key);
		const project = this.state.projects.find(project =>{
			console.log(project);
			return project.ProjectName === key;
		});
		this.setState({addNewproject:project});
	}

	render(){
		let projectLayout = (
				this.state.projects.map(
					project =>{
						return <StatelessComponentProject
							key = {project.ProjectName} 
							ProjectName = {project.ProjectName}
							TeamLead = {project.TeamLead}
							MemberNum = {project.MemberNum}
							onClick = {() => this.projectBlockOnclicked(project.ProjectName)}
						/>
					}
				)
			);
		console.log(projectLayout);
		return(
			<div>
				<div>
					<p>input projectName</p>
					<input type = "text" onChange = {this.projectNameOnchange} value = {this.state.addNewproject.ProjectName}/>
					<p>input TeamLead</p>
					<input type = "text" onChange = {this.teamLeadOnchange} value = {this.state.addNewproject.TeamLead}/>
					<p>input MemberNum</p>
					<input type = "text" onChange = {this.memberNumOnchange} value = {this.state.addNewproject.MemberNum}/>
				</div>	
				<button onClick = {this.insertDataButtonClicked}>insert</button>
				{projectLayout}
			</div>
	    );

	}
}

export default ClassProjects;


// pass value
// state = {
// 		"project1" : "ICCT",
// 		"project2" : "CM"
// 	};

// 	render(){
// 		return(
// 			<StatelessComponentProject 
// 	      		project1 = {this.state.project1} 
// 	      		project2 = {this.state.project2} 
// 	    	/>
// 	    );
// 	}


// one project
// state = {
// 		projects: [
			// {
			// 	ProjectName : 'InterQual Custimize',
			// 	TeamLead : 'Jean',
			// 	MemberNum : 5
			// },
// 	};

// 	render(){
// 		return(
// 			<StatelessComponentProject 
// 	      		ProjectName = {this.state.proejct[0].ProjectName} 
// 	      		TeamLead = {this.state.proejct[0].TeamLead}
// 	      		MemberNum = {this.state.proejct[0].MemberNum}  
// 	    	/>
// 	    );
// 	}



//multiple projects
// projects: [
// 			{
// 				ProjectName : 'ICCT',
// 				TeamLead : 'Jean',
// 				MemberNum : 5
// 			},
// 			{
// 				ProjectName : 'CM',
// 				TeamLead : 'Ricky',
// 				MemberNum : 4
// 			}
// 		] 

// let projectLayout = (
// 				this.state.projects.map(
// 					project =>{
// 						return <StatelessComponentProject 
// 							ProjectName = {project.ProjectName}
// 							TeamLead = {project.TeamLead}
// 							MemberNum = {project.MemberNum}
// 						/>
// 					}
// 				)
// 			);



//button

// insertDataButtonClicked = () =>{
		
// 		const project = [...this.state.projects, {
// 				ProjectName : 'CM',
// 				TeamLead : 'Ricky',
// 				MemberNum : 4
// 			}];
// 		console.log(project); 

// 		this.setState({projects:project});
// 	}

// <button onClick = {this.insertDataButtonClicked}>insert</button>

