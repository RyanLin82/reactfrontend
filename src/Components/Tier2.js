import React, { Component } from "react";

class Tier2 extends Component {
  constructor(props) {
    super(props);
    console.log("[Tier2] constructor");
    this.state = {
      team: "CM"
    };
  }
  handleClick = () => {
    console.log("[Tier2 change team by component] click");
    const { team } = this.state;
    this.setState({ team: team !== "CM" ? "CM" : "ICCT" });
  };
  componentWillMount() {
    console.log("[Tier2] componentWillMount");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[Tier2] getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("[Tier2] componentDidMount");
  }
  componentWillReceiveProps() {
    console.log("[Tier2] componentWillReceiveProps");
  }
  componentShouldUpdatte() {
    console.log("[Tier2] componentShouldUpdatte");
  }
  componentWillUpdate() {
    console.log("[Tier2] componentWillUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Tier2] getSnapshotBeforeUpdate");
    return "getSnapshotBeforeUpdate";
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Tier2] componentDidUpdate arg =>", snapshot);
  }
  componentWillUnmount() {
    console.log("[Tier2] componentWillUnmount");
  }

  render() {
    const { team } = this.state;
    const { teamLead } = this.props;
    console.log("[Tier2] render", team, teamLead);
    return (
      <div>
        <div>
          Hi, this is {team} . Lead is {teamLead}
        </div>
        <button onClick={this.handleClick}>change team by component</button>
      </div>
    );
  }
}

export default Tier2;
