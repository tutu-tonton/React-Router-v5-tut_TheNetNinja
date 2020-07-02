import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
	const { post_id } = useParams();
	// console.log(post_id);
	const [post, setPost] = useState();

	useEffect(() => {
		axios.get(`http://jsonplaceholder.typicode.com/posts/${post_id}`).then((res) => {
			console.log(res);
			setPost(res.data);
		});
	}, [post_id]);

	const showPost = post ? (
		<div className="post">
			<h4 className="center">{post.title}</h4>
			<p>{post.body}</p>
		</div>
	) : (
		<div className="center">Loading post...</div>
	);

	return <div className="container">{showPost}</div>;
}

export default Post;
