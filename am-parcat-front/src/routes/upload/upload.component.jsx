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
const UPLOAD_URL = 'http://localhost:8080/files/';


const UploadFile = () => {
	const submitForm = () => {
		const formData = new FormData();
		formData.append('plate_number', plateNumber);
		formData.append('file', selectedFile);
		formData.append('address', address);
		formData.append('tag', tag);
		
		axios
			.post(UPLOAD_URL, formData)
			.then(() => {
				alert('File Upload success');
			})
			.catch((er) => alert('File Upload Error : ', er));
	};

	const [plateNumber, setPlateNumber] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [address, setAddress] = useState('');
	const [tag, setTag] = useState('');
	// const [plate_number, setPlateNumber] = useState([]);

	// const newTagHandler = (tag) => {
	// 	setTags(addToList(tag, tags));
	// };

	return (
		<Fragment>
			<Typography variant="h3" gutterBottom component="div" style={{ padding: "10px"}}>
				Upload your photo
			</Typography>
			{/* <h1>Upload your photo</h1> */}
			<form onSubmit={submitForm}>
				<div>
					
						{/* <label htmlFor={plateNumber}>Plate Number: </label> */}
						<TextField
							required
							id="outlined-required"
							label="Plate number"
							defaultValue="Ex: B11AAA"
							style={{ padding: "10px"}}
							onChange={(e) => setPlateNumber(e.target.value)}
							/>
						{/* <input
							type="text"
							value={plateNumber}
							placeholder="Ex: B11AAA"
							
						/> */}
					
					
						{/* <label htmlFor={address}>Address: </label> */}
						<TextField
							required
							id="outlined-required"
							label="City"
							defaultValue="Ex: Constanta"
							style={{ padding: "10px"}}
							onChange={(e) => setAddress(e.target.value)}
							/>
						{/* <input
							type="text"
							value={address}
							placeholder="Ex: Constanta"
							onChange={(e) => setAddress(e.target.value)}
						/> */}
					
					
						{/* <TagInput onTagAdded={(tag) => newTagHandler(tag)} /> */}
						{/* <label htmlFor={tag}>Tags: </label> */}
						<TextField
							required
							id="outlined-required"
							label="Tags"
							defaultValue="Ex: bmw"
							style={{ padding: "10px"}}
							onChange={(e) => setTag(e.target.value)}
							/>
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
				<div style={{ padding: "10px"}}>
					<Button variant="contained">Upload</Button>
				</div>				
			</form>
		</Fragment>
	);
};

export default UploadFile;
