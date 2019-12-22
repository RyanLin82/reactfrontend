import React from 'react';

const member = ({ match }) => {
	console.log("[member]", match);
		return (
			<div>
				<h3>{match.params.memberId}</h3>
			</div>
		)
}

export default member;