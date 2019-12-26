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
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Tier1] getSnapshotBeforeUpdate", this.props, prevProps, prevState, this.state);
        document.getElementById("snapshot").innerHTML =
        "getSnapshotBeforeUpdate";
        return "getSnapshotBeforeUpdate data";
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("componentDidUpdate").innerHTML = "componentDidUpdate";
        console.log("[Tier1 componentDidUpdate]", this.props, prevProps, prevState, this.state, snapshot);
    }

    shouldComponentUpdate(){
        console.log("[Tier1 shouldComponentUpdate]");
        return true;
    }
    componentDidMount(){
        this.setState({teamLead:"Ryan"});
        console.log("[Tier1 componentDidMount]", this.state);
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


 