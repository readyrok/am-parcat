import React from 'react';
import Button from '@mui/material/Button';

const FileUploader = ({ onFileSelect, onFileSelectError }) => {
	const handleFileInput = (e) => {
		const file = e.target.files[0];
		console.log('Handle File Fired : ', file);
		console.log(file)
		if (file.size > 5000000)
			onFileSelectError('Filesize can not excede 5 mb !');
		else onFileSelect(file);
	};

	return (
		<div className="file-uploader" style={{ padding: "10px"}}>
			<Button style={{ padding: "10px"}} variant="contained"><input type="file" onChange={handleFileInput} /></Button>
		</div>
	);
};

export default FileUploader;