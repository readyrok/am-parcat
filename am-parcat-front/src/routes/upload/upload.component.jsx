import { Fragment } from 'react';

const handleSubmit = () => {
	console.log('aici');
};
const UploadFile = () => {
	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				{/* <input type="text" /> */}
				<input type="file" />
				<input type="submit" value="Submit !" />
			</form>
		</Fragment>
	);
};

export default UploadFile;
