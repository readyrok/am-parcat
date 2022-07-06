import { Fragment, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.style.scss';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Navbar = () => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	useEffect(() => {
		const newLoginStatus = setUserLoggedIn(localStorage.getItem('loggedIn'));
		return newLoginStatus;
	}, []);

	return (
		<Fragment>
			<div className="navigation">
				<div className="logo-container">
					<Link className="logo-link" to="/">
						<div className="logo-image"></div>
					</Link>
				</div>
				<div className="nav-links-container">
					<Link className="nav-link" to="/plate">
						<EmojiEventsIcon style={{ color: '#2e3192' }}></EmojiEventsIcon>
					</Link>
					<Link className="nav-link" to="/upload">
						<AddAPhotoIcon style={{ color: '#2e3192' }}></AddAPhotoIcon>
					</Link>
					{userLoggedIn ? (
						<Link className="nav-link" to="/logoff">
							Log Off -{' '}
							{localStorage.getItem('email').split('@')[0].toUpperCase()}
						</Link>
					) : (
						<Link className="nav-link" to="/login">
							Log In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;
