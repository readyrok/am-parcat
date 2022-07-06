import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.style.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	// console.log('Actual current user : ',currentUser)
	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value }); //seteaza in formFields doar valorile din parametrul name
	};

	const logGoogleUser = async () => {
		// await signInWithGooglePopup();
		// setCurrentUser(user)
		// createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = formFields;
		try {
			// const { user } = await signInAuthUserWithEmailAndPassword(
			// 	email,
			// 	password
			// );
			// setCurrentUser(user); // merge fara ???
			resetFormField();
			// const result = await createUserDocumentFromAuth(user);
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('User Not found');
					break;
				case 'auth/wrong-password':
					alert('Wrong Password !');
					break;
				default:
					console.log(error.code);
			}
		}
		resetFormField();
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
					name="email"
					value={email}
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
					<Button type="button" buttonType="google" onClick={logGoogleUser}>
						SIGN IN WITH GOOGLE
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
