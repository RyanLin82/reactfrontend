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
      changeTeamLead = () => {
        console.log("[Tier1 click change pass state to component]");
        const { teamLead } = this.state;
        this.setState({
            teamLead: teamLead === "Ricky" ? "Jean" : "Ricky"
        });
      };
      removeItem = () => {
        const { show } = this.state;
        this.setState(
          {
            show: !show
          },
          () => console.log("-------------------------")
        );
      };
      componentWillMount() {
        console.log("[Tier1] componentWillMount");
      }
      componentDidMount() {
        console.log("[Tier1] componentDidMount");
      }
      componentWillReceiveProps() {
        console.log("[Tier1] componentWillReceiveProps");
      }
      componentShouldUpdatte() {
        console.log("[Tier1] componentShouldUpdatte");
      }
      componentWillUpdate() {
        console.log("[Tier1] componentWillUpdate");
      }
    
      static getDerivedStateFromProps(nextProps, prevState) {
        console.log("[Tier1] getDerivedStateFromProps", nextProps, prevState);
        return null;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Tier1] getSnapshotBeforeUpdate", prevProps, prevState);
        return "getSnapshotBeforeUpdate";
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Tier1] componentDidUpdate arg =>", prevProps, prevState, snapshot);
      }
      componentWillUnmount() {
        console.log("[Tier1] componentWillUnmount");
      }
    render(){
        const { teamLead, show } = this.state;
        console.log("[Tier1] render Tier1");
        return(
            <div>
                <header className="App-header">
                    
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="person-container">
                    {show && <Tier2 teamLead= {teamLead} />}
                    <hr />
                    {show && (
                        <button onClick={this.changeTeamLead}>
                            change pass state to component
                        </button>
                    )}
                    <button onClick={this.removeItem}>
                        {show ? 'remove' : 'add'} component
                    </button>
                </div>
            </div>
        );
    }
}

export default Tier1;