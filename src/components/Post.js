import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
	const { post_id } = useParams();
	// console.log(post_id);

	return (
		<div className="container">
			<h4>{post_id}</h4>
		</div>
	);
}

export default Post;
