import { useContext,Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.style.scss';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import fetch from 'unfetch'
const getAllFiles = ()=>fetch('http://localhost:8080/files')

const Navbar = () => {
	const { currentUser } = useContext(UserContext);
	//testing url
	
	// fetchFiles = 
	getAllFiles()
		.then(response=>response.json()
			.then(file=>console.log(file)))
		.catch(err=>console.log(err))
	

	return (
		<Fragment>
			<div className="navigation">
				<div className="logo-container">
					<Link className="logo-link" to="/">
						<div className="logo-image"></div>
					</Link>
				</div>				
				<div className="nav-links-container">
				{currentUser ? (
						<>	
							<Link className="nav-link" to="/upload">
								Upload
							</Link>
							<Link className="nav-link" to="/profile">
								Profile for {currentUser.email} 
							</Link>
							<span className="nav-link" onClick={signOutUser}>
								SIGN OUT
							</span>
						</>
					) : (
						<Link className="nav-link" to="/auth">
							SignIn
						</Link>
					)}
					<Link className="nav-link" to="/plate">
						<EmojiEventsIcon style={{ color: "#2e3192" }}></EmojiEventsIcon>
					</Link>
					<Link className="nav-link" to="/upload">
						<AddAPhotoIcon style={{ color: "#2e3192" }}></AddAPhotoIcon>
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;
