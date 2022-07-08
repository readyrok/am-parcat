import { Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userDetailsAtom } from '../testDragos/logIn.component';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './navbar.style.scss';
import { Button } from '@mui/material';
const Navbar = () => {

	const [userDetails, setUserDetails] = useAtom(userDetailsAtom);

	const handleLogOff = () => {
		setUserDetails({});
	};

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
					{Object.keys(userDetails).length !== 0 ? (
						<Button className="nav-link" onClick={handleLogOff}>
							Log Off -{userDetails.sub.split('@')[0].toUpperCase()}
							{/* {localStorage.getItem('email').split('@')[0].toUpperCase()} */}
						</Button>
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
