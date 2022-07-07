import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userDetailsAtom } from '../testDragos/logIn.component';
import {useAtom} from 'jotai'

export default function Logoff() {
	const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
	const navigate = useNavigate();

	function delayAndGo(e) {
		e.preventDefault();
		console.log('storage before logoff', localStorage);
		localStorage.setItem("loggedIn",false);
		console.log('storage after logoff', localStorage);
		setUserDetails({})
		setTimeout(() => navigate('/'), 300);
	}

	return (
		<Link to={'/'} onClick={delayAndGo}>
			LogginOff...
		</Link>
	);
}
