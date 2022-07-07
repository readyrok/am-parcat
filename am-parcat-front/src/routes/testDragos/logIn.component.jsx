import './logIn.style.scss';
import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import { atom, useAtom } from 'jotai';
import jwt from 'jwt-decode';

const defaultFormFields = {
	username: 'sebastian@gmail.com',
	password: 'pass1234',
};

export const userDetailsAtom = atom({});

function LogIn() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { username, password } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value }); //seteaza in formFields doar valorile din parametrul name
	};

	const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
	const handleSubmit = async (event) => {
		console.log('initial', userDetails);
		event.preventDefault();

		var loginFormData = new FormData();
		const { username, password } = formFields;

		loginFormData.append('username', `${username}`);
		loginFormData.append('password', `${password}`);

		axios({
			method: 'post',
			url: 'http://localhost:8080/login',
			headers: {},
			data: loginFormData,
		})
			.then((res) => {
				console.log('raspuns : ',res.data)
				const token = jwt(res.data.accessToken);
				console.log('siiiiii tokenizat : ',token)
				// localStorage.setItem('accessToken', res.data.accessToken);
				// localStorage.setItem('refreshToken', res.data.refreshToken);
				// localStorage.setItem('email', username);
				// localStorage.setItem('loggedIn', true);
				localStorage.setItem('user_details', token);
				setUserDetails(jwt(res.data.accessToken));
				resetFormField();
			})
			.catch((err) => {
				if (err.response.status === 403) console.log('WRONG USER/PASSWORD ! ');
				else console.log(err);
			});
	};

	// signIn('sebastian@gmail.com', 'pass1234');
	const logoff = () => {
		setUserDetails([]);
	};
	return (
		<div className="sign-up-container">
			<h2>I already have an account</h2>
			<span>Sign in with your Email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="username"
					value={username}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign in !</Button>
					{/* <Button type="button" buttonType="google" onClick={logGoogleUser}>
						SIGN IN WITH GOOGLE
					</Button> */}
					<Button type="button" onClick={() => logoff()}>
						Log Off
					</Button>
					<Button type="button" onClick={() => console.log('999', userDetails)}>
						showdetails
					</Button>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
