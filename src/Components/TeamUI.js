import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/team'


class TeamUI extends React.Component{
    componentDidMount(){
        console.log("[TeamUI componentDidMount]");
        this.props.onGetTeam();
        // this.props.onGetTeamsStartAxios();
        // this.props.onGetTeamsSuccess();
    }
    render(){
        console.log("[TeamUI render]", this.props);
        let teamDisplay;
        if(this.props.loading){
            teamDisplay = (<p>LOADING</p>);
        }else if(this.props.error){
            teamDisplay = (<p>ERROR</p>);
        }else{
            teamDisplay = this.props.teams.map(
                team => {
                    return (
                        <div key = {team.name}>
                        <p> yoyoyo </p>
                        <p> {team.name} </p>
                        </div>
                    )
                }
            );
        }
        console.log("[TeamUI render teamUI]", teamDisplay);
        return (
            <div>
                {teamDisplay}
                <p>TeamUI TEST</p>
            </div>
        );
    }
}


const mapStatetoProps = (props) => {
    console.log("[mapStatetoProps]", props);
    return {
        teams: props.team.teams,
        loading: props.team.loading,
        error: props.team.error
    }
}

const mapDispatchToProps = dispatch => {
    console.log("[mapDispatchToProps]", dispatch);
    return {
        onGetTeam: () => dispatch(actions.getTeams())
        // onGetTeamsStartAxios : () => dispatch(actions.getTeamsStartAxios())
        // ,onGetTeamsSuccess: () => dispatch(actions.getTeamsSuccess("test"))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TeamUI)


//1. why we need thunk? multiple steps.
// onGetTeamsStartAxios : () => dispatch(actions.getTeamsStartAxios()),
//         onGetTeamsSuccess: () => dispatch....


//2. use onGetTeam (thunk)