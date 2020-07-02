import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pokeball from './pokeball.png';

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
				<div className="post card" key={post.id}>
					<img src={Pokeball} />
					<div className="card-content">
						<Link to={`/${post.id}`}>
							<span className="card-title red-text">{post.title}</span>
						</Link>
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
			<div className="container home">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		</div>
	);
};

export default Home;
