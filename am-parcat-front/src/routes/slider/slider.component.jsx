import { Fragment, useState, useEffect } from 'react';

const axios = require('axios');

const Slider = () => {
	const [data, setData] = useState([]);

	useEffect(()=>{
		const getPhotos = async () => {
			try {
				const {data: response} = await axios.get('http://localhost:8080/files');
				setData(response);
			} catch (error) {
				console.error(error);
			} 
		}

		getPhotos();
	}, []);

	console.log(data);
	// const [photos, setPhotos ] = useState([]);
	// const data = [];
	
	// getPhotos().then(response => {
	// 	if (response) {
	// 		console.log(response.data);
	// 		data.push(response.data);
	// 	}
	// })
	// .catch(error => {
	//   console.log(error)
	// })

	// setPhotos(data);

	return (
		<Fragment>
			{/* <div className="slider">Slider Text</div> */}
			{/* <div>{data}</div> */}
			{data.map(photo =>  { return (
					<div className = "img-wrap" key={photo.id}>
						<img src={photo.url} alt="photo"/>
					</div>
				)}				
			)}
		</Fragment>
	);
};

export default Slider;
