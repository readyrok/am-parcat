import { Fragment, useState, useEffect } from 'react';
import './slider.css';
import Modal from '../../components/modal/modal';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const axios = require('axios');

const Slider = () => {
	const [data, setData] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);

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
	
	return (
		<Fragment>
			{/* <Typography variant="h3" gutterBottom component="div" style={{ padding: "10px 0px 0px 30px", color: "#2e3192", textAlign: "center"}}>Photos</Typography> */}
			<div className="img-grid">
				{data.map(photo =>  { return (
					<motion.div className="img-wrap" 
						key={photo.id}
						layout
						whileHover={{ opacity: 1}}
						onClick={()=>setSelectedImage(photo.url)}>
						<motion.img src={photo.url} alt="parking" 
							initial={{ opacity: 0 }} 
							animate={{ opacity: 1 }} 
							transition={{delay: 0.05}}
							/>
					</motion.div>
					)}				
				)}
			</div>
			{ selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
		</Fragment>
	);
};

export default Slider;
