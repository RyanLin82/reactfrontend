import React from 'react';
import { connect } from 'react-redux';

const teamUI = (props) => {
    console.log("[teamUI]", props);
    let team = (
        props.teams.map(teamMap => {
            let member = (
                teamMap.members.map(member => {
                    return (
                        <div key = {member.name}>
                            <p>{member.name}</p>
                        </div>
                    );
                })
            );
            return(
                <div key = {teamMap.name}>
                    <p>
                      {teamMap.name}  
                    </p>
                      {member}
                </div>
            );
        })
    );
    return (
        <div>
            {team}
        </div>
    );
}


const mapStatetoProps = (props) => {
    console.log("[mapStatetoProps]", props);
    return {
        teams: props.team.teams
    }
}

export default connect(mapStatetoProps, null)(teamUI)