import { Fragment, useState, useEffect } from 'react';
import './slider.css';
import Modal from '../../components/modal/modal';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { userTokensAtom } from '../testDragos/logIn.component';
import axios from 'axios'

const Slider = () => {
	const [data, setData] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);
	const [userTokens, setUserTokens] = useAtom(userTokensAtom);
	
	useEffect(()=>{
		const getPhotos = async () => {
			const myConfig = {
				headers: {
				   "Authorization": `Bearer ${userTokens.accessToken}` 
				}
			 }
			 console.log('Aici :',myConfig)
			
			try {
				console.log('Trying fetch')
				axios.get('http://localhost:8080/files',myConfig).then(res=>console.log(res)).catch(err=>console.log(err));
				
				// const {data: response} = await axios.get('http://localhost:8080/files');
				// setData(response);
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
