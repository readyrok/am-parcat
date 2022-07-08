import './logIn.style.scss';
import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import { atom, useAtom } from 'jotai';
import jwt from 'jwt-decode';
import { Alert, Snackbar } from '@mui/material';

const defaultFormFields = {
	username: 'sebastian@gmail.com',
	password: 'pass1234',
};

export const userDetailsAtom = atom({});
export const userTokensAtom = atom({});

function LogIn() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { username, password } = formFields;
	const [open, setOpen] = React.useState(false);
	const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
	const [userTokens, setUserTokens] = useAtom(userTokensAtom);

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value }); //seteaza in formFields doar valorile din parametrul name
	};

	
	const handleSubmit = async (event) => {
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
				const token = jwt(res.data.accessToken);
				localStorage.setItem('user_details', token);
				setUserDetails(jwt(res.data.accessToken));
				setUserTokens(res.data)
				resetFormField();
			})
			.catch((err) => {
				if (err.response.status === 403)
					setOpen(true);
				else console.log(err);
			});
	};

	return (
		<div className="sign-up-container">
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
					<Button type="button" onClick={() => console.log('999', userDetails)}>
						showdetails
					</Button>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert
							onClose={handleClose}
							severity="error"
							sx={{ width: '100%' }}
						>
							Wrong User/Password
						</Alert>
					</Snackbar>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
