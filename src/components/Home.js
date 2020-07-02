import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
			// console.log(res);
			setPosts(res.data.slice(0, 10));
		});
	}, []);

	const postList = posts.length ? (
		posts.map((post) => {
			return (
				<div className="post cart" key={post.id}>
					<div className="card-content">
						<span className="card-title">{post.title}</span>
						<p>{post.body}</p>
					</div>
				</div>
			);
		})
	) : (
		<div className="center">No posts yet</div>
	);

	return (
		<div>
			<div className="container">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		</div>
	);
};

export default Home;
