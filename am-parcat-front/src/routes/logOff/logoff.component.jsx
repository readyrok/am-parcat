import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Logoff() {
	const navigate = useNavigate();

	function delayAndGo(e) {
		e.preventDefault();
		console.log('storage before logoff', localStorage);
		localStorage.setItem("loggedIn",false);
		console.log('storage after logoff', localStorage);

		setTimeout(() => navigate('/'), 300);
	}

	return (
		<Link to={'/'} onClick={delayAndGo}>
			LogginOff...
		</Link>
	);
}
