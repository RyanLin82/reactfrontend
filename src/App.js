import React from 'react';
import './App.css';
import StatelessComponentProject from './Component/Project/statelessComponentProject';
class App extends React.Component {
  render(){
  	return (
	    <div className="App">
	      <StatelessComponentProject 
	      	project1 = "ICCT" 
	      	project2 = "CM"/>
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


