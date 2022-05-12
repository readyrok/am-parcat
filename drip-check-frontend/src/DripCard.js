import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './DripCard.css';
import firstPic from './storage/Images/1.jpg';
import secondPic from './storage/Images/2.jpg';
import thirdPic from './storage/Images/6.jpg';
import fourthPic from './storage/Images/4.jpg';
import fifthPic from './storage/Images/5.jpg';


function DripCard() {
    const [photos, setPhotos] = useState([
        {
            name: 'Zendaya1',
            url: firstPic
        },
        {
            name: 'Zendaya2',
            url: secondPic
        },
        {
            name: 'Zendaya3',
            url: thirdPic
        },
        {
            name: 'Zendaya4',
            url: fourthPic
        },
        {
            name: 'Zendaya5',
            url: fifthPic
        }
    ]);

    return (
        <div>
            <div className="dripCards__container">
            {photos.map(photo => (
            <TinderCard 
                className="swipe" 
                key={photo.name}
                preventSwipe={['up', 'down']}>
                <div
                    style={{ backgroundImage: `url(${photo.url})`}} 
                    className='card'>
                    <h3>{photo.name}</h3>
                </div>
            </TinderCard>
            ))}
            </div>
        </div>
        
    );
}

export default DripCard