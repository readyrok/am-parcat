import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import IconButton from '@mui/material/IconButton';
import './Header.css';
import { Link } from "react-router-dom";
import Logo from './storage/drip-logo.png';
import UploadForm from './UploadForm';

function Header() {
    return (
        <div className='header'>
            <Link to="/profile">
                <IconButton>
                    <AccountBoxIcon className="header__icon" fontSize='large'/>
                </IconButton> 
            </Link>
            <Link to="/">
                <IconButton>
                    <img 
                    className="header__logo" 
                    src={Logo} 
                    alt="Logo"
                    />
                </IconButton>
            </Link>
            <UploadForm/>                      
        </div>
    );
}

export default Header;