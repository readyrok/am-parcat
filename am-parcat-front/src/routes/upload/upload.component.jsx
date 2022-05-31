import { Fragment } from 'react';
import { useState } from 'react';

// const UPLOAD_URL = './files';

const submitForm = () => {
  console.log('User Clicked submit form !')
  // console.log(name,selectedFile)
	// const formData = new FormData();
	// formData.append('key', 'file');
	// formData.append('file', selectedFile);

	//     axios
	//       .post(UPLOAD_URL, formData)
	//       .then((res) => {
	//         alert("File Upload success");
	//       })
	//       .catch((err) => alert("File Upload Error"));
	//   };
};
const UploadFile = () => {
	const [name, setName] = useState('');
	const [selectedFile, setSelectedFile] = useState("");

	return (
		<Fragment>
			<form onSubmit={submitForm}>
				{/* <input
					type="text"
					value="Fisier"
					// onChange={(e) => setName(e.target.value)}
				/> */}
				<input
					type="file"
					value={selectedFile}
					// value={selectedFile}
					// onChange={(e) => setSelectedFile(e.target.files[0])}
				/>
        <input type="submit" name="submit" value="APASA!" />
			</form>
		</Fragment>
	);
};

export default UploadFile;
