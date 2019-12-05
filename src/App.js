import React from 'react';
import './App.css';
import StatelessComponentProject from './Component/Project/statelessComponentProject';
class App extends React.Component {
  render(){

  	return (
	    <div className="App">
	      <p>ICCT</p>
	      <p>CM</p>
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
	      

