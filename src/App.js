import React from 'react';
import './App.css';
import ClassProjects from './Component/Project/ClassProject';
class App extends React.Component {
  render(){
  	return (
	    <div className="App">
	    	<ClassProjects />
	    </div>
  	);
  }
}

export default App;


//import component
//import StatelessComponentProject from './Component/Project/statelessComponentProject';
//<StatelessComponentProject />


// use two components in the same time.
// let projects = (
// 	<div>
// 		<StatelessComponentProject></StatelessComponentProject>
// 		<StatelessComponentProject></StatelessComponentProject>
// 	</div>
// 	);
//	{projects}


