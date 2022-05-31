import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.style.scss';

const Navbar = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					Logo
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/top">
						The BESTEST
					</Link>
					<Link className="nav-link" to="/upload">
						Upload
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;
