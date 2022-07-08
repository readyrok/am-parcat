import React, { Fragment, useState } from 'react';
import axios from 'axios';
import FileUploader from './fileUploader.component';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import TagInput from '../../components/tags/tagsinput.component';
import { useAtom } from 'jotai';
import { userTokensAtom } from '../testDragos/logIn.component';

const UPLOAD_URL = 'http://localhost:8080/files/';

// const addToList = (element, list) => {
// 	return [...list, element];
// };

const UploadFile = () => {
	const [userTokens, setUserTokens] = useAtom(userTokensAtom);
	
	const submitForm = () => {
		const myConfig = {
			headers: {
				Authorization: `Bearer ${userTokens.accessToken}`,
			},
		};
	
		const formData = new FormData();
		formData.append('plate_number', plateNumber);
		formData.append('file', selectedFile);
		formData.append('address', address);
		formData.append('city', city);
		formData.append('tag', tag);
		console.log("config header sent in axios",myConfig.headers)
		axios
			.post(UPLOAD_URL, formData, myConfig)
			.then(() => {
				alert('File Upload success');
			})
			.catch((er) => alert('File Upload Error: ', er));
	};

	const [plateNumber, setPlateNumber] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [tag, setTag] = useState('');
	// const [plate_number, setPlateNumber] = useState([]);

	// const newTagHandler = (tag) => {
	// 	setTags(addToList(tag, tags));
	// };

	return (
		<Fragment>
			{/* <Typography variant="h3" gutterBottom component="div" style={{ padding: "30px 0px 0px 30px", color: "#2e3192"}}>
				Upload your photo
			</Typography> */}
			{/* <h1>Upload your photo</h1> */}
			<form onSubmit={submitForm}>
				<div style={{ padding: "20px 0px 0px 20px"}}>
					
						{/* <label htmlFor={plateNumber}>Plate Number: </label> */}
						<div style={{ padding: "10px 0px 0px 10px", display: "inline-block"}}>
							<TextField
								required
								style={{color: "#2e3192"}}
								id="outlined-required"
								label="Plate number"
								defaultValue="Ex: B11AAA"
								onChange={(e) => setPlateNumber(e.target.value)}
								/>
						</div>
						<div style={{ padding: "10px 0px 0px 10px", display: "inline-block"}}>
							<TextField
								required
								style={{color: "#2e3192"}}
								id="outlined-required"
								label="Address"
								defaultValue="Ex: Ghica Tei 23"
								onChange={(e) => setAddress(e.target.value)}
								/>
						</div>
						<div style={{ padding: "10px 0px 0px 10px", display: "inline-block"}}>
							<TextField
								required
								style={{color: "#2e3192"}}
								id="outlined-required"
								label="City"
								defaultValue="Ex: Constanta"
								onChange={(e) => setCity(e.target.value)}
								/>
						</div>
						<div style={{ padding: "10px 0px 0px 10px", display: "inline-block"}}>
							<TextField
								style={{color: "#2e3192"}}
								required
								id="outlined-required"
								label="Tags"
								defaultValue="Ex: BMW"
								onChange={(e) => setTag(e.target.value)}
								/>
						</div>
						{/* <input
							type="text"
							value={plateNumber}
							placeholder="Ex: B11AAA"
							
						/> */}
						{/* <label htmlFor={address}>Address: </label> */}
						{/* <input
							type="text"
							value={address}
							placeholder="Ex: Constanta"
							onChange={(e) => setAddress(e.target.value)}
						/> */}
						{/* <TagInput onTagAdded={(tag) => newTagHandler(tag)} /> */}
						{/* <label htmlFor={tag}>Tags: </label> */}
						{/* <input
							type="text"
							value={tag}
							placeholder="Ex: bmw"
							onChange={(e) => setTag(e.target.value)}
						/> */}
				</div>
				<FileUploader
					onFileSelect={(file) => setSelectedFile(file)}
					onFileSelectError={(error) => {
						console.log(error);
						alert(error);
					}}
				/>
				<div style={{ padding: "30px 0px 0px 30px", display: "inline-block"}}>
					<button>Upload</button>
					{/* <Button variant="contained">Upload</Button> */}
				</div>				
			</form>
		</Fragment>
	);
};

export default UploadFile;
