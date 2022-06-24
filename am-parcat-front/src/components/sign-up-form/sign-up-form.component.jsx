// import { async } from '@firebase/util';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-up-form.style.scss';
import Button from '../button/button.component';

// import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value }); //seteaza in formFields doar valorile din parametrul name
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName }); //nu "leverage" onAuthChangeListener dar e nevoie de el pt a salva cumva numele
			resetFormField();
		} catch (err) {
			if ((err.code = 'auth/email-already-in-use')) {
				alert('Email already in use !');
			} else {
				console.log(err);
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>I don't have an account ?</h2>
			<span>Sign Up with your Email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
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
				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up !</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
