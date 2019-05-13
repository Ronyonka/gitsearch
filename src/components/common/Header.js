import React from 'react';
// import { NavLink } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<ul className="left active">
				<li>
					<Link to="/">
						<i className="fa fa-home material-icons" aria-hidden="true" />
					</Link>
				</li>
				<li>
					<Link to="/about">
						<i
							className="fa fa-info-circle material-icons"
							aria-hidden="true"
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
