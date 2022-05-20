import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg", "image/jpg", "image/bmp"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png, bmp, jpeg, jpg)");
        }
    }

    return (
        <form>
            <input id="uploadPhoto" type="file" onChange={changeHandler} style={{display: 'none'}} />
            <div className="output">
                {/* { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div>} */}
                {/* { file && <ProgressBar file={file} setFile={setFile}/> } */}
            </div>
            
            <IconButton>
                <label for="uploadPhoto">
                    <AddAPhotoIcon className="header__icon" fontSize='large'/>
                </label>
            </IconButton> 
             
        </form>
    )
}

export default UploadForm;