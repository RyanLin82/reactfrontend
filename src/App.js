import React from 'react';
import Tier1 from './Components/Tier1'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Tier1 teamLead = "Jean"/>
        <div id = "snapshot"></div>
        <div id = "componentDidUpdate"></div>
      </div>
    );
  }
}

export default App;
