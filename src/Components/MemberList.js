import React from 'react';
import Member from './Member';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const memberList = ({match}) => {
	console.log("[memberList]", match);
	let url = match.url; 
	return(
		<div>
			<h2>Page2</h2>
			<ul>
				<li>
					<Link to={url+'/member1'}>
						member1
					</Link>
				</li>
				<li>
					<Link to={url+'/member2'}>
						member2
					</Link>
				</li>
				<li>
					<Link to={url+'/member3'}>
						member3
					</Link>
				</li>
			</ul>
		 
		<Route path={url+'/:memberId'} component={Member} />
		<Route exact path={url} render={() => (
		<h3>Default Information</h3>
		)} />
		</div>
	);
	
}

export default memberList;
