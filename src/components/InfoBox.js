import React from 'react'

const InfoBox = ({info}) => {

    const handleClose = () =>{
        let box = document.querySelector('.location-info');
        box.style.display = 'none';
    }

    return (
        <div className='location-info'>
            <h2>Event Information</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default InfoBox
