import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Slider from './routes/slider/slider.component';
import UploadFile from './routes/upload/upload.component';
import PlatesPage from './routes/plates/platesPage.component';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Slider />} />
				<Route path="/upload" element={<UploadFile />} />
				<Route path="plate/*" element={<PlatesPage />} />
			</Route>
		</Routes>
	);
};

export default App;
