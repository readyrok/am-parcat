import React from 'react';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
import axios from 'axios';
const UserProfile = () => {
	const { currentUser } = useContext(UserContext);
	console.log(currentUser);
	// const getJpaUserDetails = (email) => {
	// 	var bodyFormData = new FormData();
	// 	bodyFormData.append('email', email);
	// 	axios({
	// 		method: 'get',
	// 		url: 'http://localhost:8080/files/upload/',
	// 		data: bodyFormData,
	// 	});
	// };
	return (
		<div className="sign-up-container">
			<h2>Profile for user :</h2>
			<span>{currentUser ? currentUser.email : <span>Loading...</span>}</span>
			<h2>Current Auth Provider for user :</h2>
			<span>
				{currentUser ? currentUser.providerId : <span>Loading...</span>}
			</span>
			<h2>Registered Plate No :</h2>
			<span>
				{currentUser ? (
					currentUser.email
				) : (
					<span>Loading...</span>
				)}
			</span>
		</div>
	);
				};
					
export default UserProfile;
