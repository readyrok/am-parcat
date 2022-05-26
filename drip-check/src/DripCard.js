import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './DripCard.css';
import firstPic from './storage/Images/1.jpg';
import secondPic from './storage/Images/2.jpg';
import thirdPic from './storage/Images/6.jpg';
import fourthPic from './storage/Images/4.jpg';
import fifthPic from './storage/Images/5.jpg';
import useFireStore from './hooks/useFireStore';



function DripCard() {
    const { docs } = useFireStore("images");

    let data = [];
    let count = 1;

    docs.forEach((doc) => {
        doc.name = "Zendaya" + count;
        data.push(doc);
        count++;
    });

    const [photos, setPhotos] = useState([{
        name: 'Zendaya1',
        url: "https://firebasestorage.googleapis.com/v0/b/drip-check.appspot.com/o/5.jpg?alt=media&token=4c638238-9c1e-4923-a114-b298438a1b6f"
    },
    {
        name: 'Zendaya3',
        url: "https://firebasestorage.googleapis.com/v0/b/drip-check.appspot.com/o/5.jpg?alt=media&token=4c638238-9c1e-4923-a114-b298438a1b6f"
    },
    {
        name: 'Zendaya4',
        url: "https://firebasestorage.googleapis.com/v0/b/drip-check.appspot.com/o/5.jpg?alt=media&token=4c638238-9c1e-4923-a114-b298438a1b6f"
    },
    {
        name: 'Zendaya5',
        url: "https://firebasestorage.googleapis.com/v0/b/drip-check.appspot.com/o/5.jpg?alt=media&token=4c638238-9c1e-4923-a114-b298438a1b6f"
    },
    {
        name: 'Zendaya2',
        url: "https://firebasestorage.googleapis.com/v0/b/drip-check.appspot.com/o/5.jpg?alt=media&token=4c638238-9c1e-4923-a114-b298438a1b6f" 
    }]);

    console.log(data);
    console.log(photos);

    return (
        <div>
            <div className="dripCards__container">
            {docs && docs.map(doc => (
                <TinderCard 
                    className="swipe"
                    key={doc.name}
                    preventSwipe={['up', 'down']}>
                    <div
                        style={{backgroundImage: `url(${doc.url})`}}
                        className="card">
                            <h3>{doc.name}</h3>
                    </div>
                </TinderCard>
            ))}
            {/* { docs && photos.map((photo) => (
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
            ))} */}
            </div>
        </div>
        
    );
}

export default DripCard