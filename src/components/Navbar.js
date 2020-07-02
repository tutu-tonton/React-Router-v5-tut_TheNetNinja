//========================================
//  -Route v4- : <Route>の外でprops受け取るには？
//========================================
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Navbar = () => {
	// const history = useHistory();

	// setTimeout(() => {
	// 	history.push('/about');
	// }, 2000);

	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a href="/" className="brand-logo">
					Poke' Times
				</a>
				<ul className="right">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					{/* aタグだと、クリックの度にリクエストが発生してる */}
					{/* <li><a href="/">Home</a></li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
