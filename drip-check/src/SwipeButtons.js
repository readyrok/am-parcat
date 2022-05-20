import React from 'react';
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        {/* <IconButton className="swipeButtons__repeat">
            <ReplayIcon className="swipeButtonsIcon__repeat" fontSize="large"/>
        </IconButton> */}
        <IconButton className="swipeButtons__left">
            <CloseIcon className="swipeButtonsIcon__left" fontSize="large" /> 
        </IconButton>
        {/* <IconButton className="swipeButtons__star">
            <StarRateIcon className="swipeButtonsIcon__star" fontSize="large" />
        </IconButton> */}
        <IconButton className="swipeButtons__favorite">
            <FavoriteIcon className="swipeButtonsIcon__favorite" fontSize="large" />
        </IconButton>
        {/* <IconButton className="swipeButtons__flash">
            <FlashOnIcon className="swipeButtonsIcon__flash" fontSize="large" />
        </IconButton>        */}
    </div>
  )
}

export default SwipeButtons