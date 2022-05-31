import { useState } from 'react';

const uploadPackageDefault = {
    selectedFiles: undefined,
    currentFile: undefined,
    progress: 0,
    message: "",
    fileInfos: [],
  };

const UploadFiles = () => {
	const [uploadPackage, setUploadPackage] = useState(uploadPackageDefault);

    return <h1>D</h1>;
};

export default UploadFiles;
