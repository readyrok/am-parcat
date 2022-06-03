import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Picture from '../picture/picture.component';
const URL = 'http://localhost:8080/files';

const Plate = () => {
	const { plateNumber } = useParams();
	console.log(useParams());
	const [filesData, setFilesData] = useState([]);
	useEffect(() => {
		axios
			.get(URL)
			.then((resp) => setFilesData(resp.data))
			.catch((er) => console.log(er));
	}, []);

	return (
		<h1>
			{filesData
				.filter((element) => element.name.split('.')[0] === plateNumber)
				.map((element) => <Picture key ={element.id}picture={element}/>)}
		</h1>
	);
};

export default Plate;
