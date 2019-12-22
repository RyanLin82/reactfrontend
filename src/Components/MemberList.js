import React from 'react';
import Member from './Member';
import {Route} from 'react-router-dom';
const memberList = ({match}) => {
	console.log("[memberList]", match); 
	return(
		<div>
			<h2>Page2</h2>
			<ul>
				<li>
					<Link to={'${match.url}/member1'}>
						member1
					</Link>
				</li>
				<li>
					<Link to={'${match.url}/member2'}>
						member2
					</Link>
				</li>
				<li>
					<Link to={'${match.url}/member3'}>
						member3
					</Link>
				</li>
			</ul>
		 
		<Route path={'${match.url}/:memberId'} component={Member} />
		<Route exact path={match.url} render={() => (
		<h3>Default Information</h3>
		)} />
		</div>
	);
	
}

export default memberList;
// state = {
// 		members:[
// 			{
// 				name:"Ricky",
// 				personality:"Good man"
// 			},
// 			{
// 				name:"Jean",
// 				personality:"Good"
// 			},
// 			{
// 				name:"Jimmy",
// 				personality:"zzz"
// 			},
// 			{
// 				name:"Ryan",
// 				personality:"qqq"
// 			}
// 		]
// 	}