import React from 'react';
import Tier2 from './Tier2';
class Tier1 extends React.Component {
    constructor(props) {
        super(props);
        console.log("[Tier1] constructor");
        this.state = {
          teamLead: "Ricky",
          show: true
        };
      }
      
    render(){
        const { teamLead, show } = this.state;
        console.log("[Tier1] render Tier1");
        return(
            <div>
                <header className="App-header">             
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p> Team lead: {this.state.teamLead} </p>
            </div>
        );
    }
}

export default Tier1;