import React from 'react';


const FileUploader = ({ onFileSelect, onFileSelectError }) => {
	const handleFileInput = (e) => {
		const file = e.target.files[0];
		console.log('Handle File Fired : ', file);
		console.log(file)
		if (file.size > 1000000)
			onFileSelectError('Filesize can not excede 1 mb!');
		else onFileSelect(file);
	};

	return (
		<div className="file-uploader" style={{ padding: "30px 0px 0px 30px", display: "inline-block"}}>
			<input type="file" onChange={handleFileInput}/>
		</div>
	);
};

export default FileUploader;
