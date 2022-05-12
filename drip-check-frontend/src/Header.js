import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <AccountBoxIcon className="header__icon" fontSize='large'/>
            </IconButton>            
            <img 
                className="header__logo" 
                src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/droplet.png" 
                alt="Logo"
            />
            <IconButton>
                <AddCircleIcon className="header__icon" fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default Header;