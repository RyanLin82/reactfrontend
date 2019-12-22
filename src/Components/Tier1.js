import React from 'react';
import Tier2 from './Tier2';
class Tier1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          teamLead: "Ricky",
          show: true
        };
        console.log("[Tier1] constructor", props, this.state);
      }
    static getDerivedStateFromProps(props, state) {
        console.log("[Tier1 getDerivedStateFromProps]", props, state);
        return {teamLead: props.teamLead };
    }  
    render(){
        const { teamLead, show } = this.state;
        console.log("[Tier1] render Tier1", this.props, this.state);
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