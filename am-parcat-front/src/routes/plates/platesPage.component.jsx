import Plate from "../../components/plate/plate.component";
import { Route,Routes } from "react-router-dom";

const PlatesPage = () => {
	return (
		<Routes>
			{/* <Route index element={<h1>ListaPlaciInmatriculare</h1>} /> */}
			<Route path=":plateNumber" element={<Plate />} />
		</Routes>
	);
};
export default PlatesPage;
