import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Slider from './routes/slider/slider.component';
import UploadFile from './routes/upload/upload.component';
import PlatesPage from './routes/plates/platesPage.component';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './routes/landingPage/landingPage.component';
import LogIn from './routes/testDragos/logIn.component';
// import SignInForm from './components/sign-in-form/sign-in-form.component';
import Logoff from './routes/logOff/logoff.component';

const App = () => {
	return (
		<Routes>
			<Route path="/landingpage" element={<Landingpage/>}/>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Slider />} />
				<Route path="/upload" element={<UploadFile />} />
				<Route path="plate/*" element={<PlatesPage />} />
				<Route path="login" element={<LogIn />} />
				<Route path="logoff" element={<Logoff />} />
			</Route>
		</Routes>
	);
};

export default App;
