import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

class MemberMulipleParams extends React.Component {
    
    state = {
        member:[
            {
                name: "Ricky",
                position: "Team Lead",
                hight: "1.7",
                weight: "65",
                personality: "howren"
            },
            {
                name: "Jerry",
                position: "member",
                hight: "1.8",
                weight: "65",
                personality: "jianan"
            }
        ]

    }

    liClick = (memberName) => {
        let queryParams = [];
        let members = this.state.member.find(member => {
            return memberName === member.name;
        });


        for(let i in members){
            console.log("[MemberMulipleParams] multipleParam", i);
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(members[i]));
        }

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: "/ShowMultipleParam",
            search: '?' + queryString
        });

    }

    render(){
        let url = this.props.url;
        console.log("[MemberMultipleParams] ", this.props);
        let memberListUI = (
            this.state.member.map(
                (member) => {
                    return (
                        <li key = {member.name} onClick = {(event) => {this.liClick(member.name)}}>
                          {member.name}
                        </li>
                    )
                }
            )
        );
        return (
            <div>
                <ul>
                    {memberListUI}
                </ul>
            </div>
        )
    }
}

export default withRouter(MemberMulipleParams);