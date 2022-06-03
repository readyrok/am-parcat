import React, { Fragment, useState } from 'react';
import axios from 'axios';
import FileUploader from './fileUploader.component';
// import TagInput from '../../components/tags/tagsinput.component';

const UPLOAD_URL = 'http://localhost:8080/files/';

// const addToList = (element, list) => {
// 	return [...list, element];
// };

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
			<h1>Incepe !</h1>
			<form onSubmit={submitForm}>
				<label htmlFor={plateNumber}>Your Plate number :</label>
				<input
					type="text"
					value={plateNumber}
					placeholder="Ex: B11AAA"
					onChange={(e) => setPlateNumber(e.target.value)}
				/>
				<label htmlFor={address}>The Address :</label>
				<input
					type="text"
					value={address}
					placeholder="Ex: Constanta"
					onChange={(e) => setAddress(e.target.value)}
				/>
				{/* <TagInput onTagAdded={(tag) => newTagHandler(tag)} /> */}
				<label htmlFor={tag}>The tag :</label>
				<input
					type="text"
					value={tag}
					placeholder="Ex: mmw"
					onChange={(e) => setTag(e.target.value)}
				/>
				<FileUploader
					onFileSelect={(file) => setSelectedFile(file)}
					onFileSelectError={(error) => {
						console.log(error);
						alert(error);
					}}
				/>
				<button>Apasa !</button>
			</form>
		</Fragment>
	);
};

export default UploadFile;
