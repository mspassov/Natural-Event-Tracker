import React from 'react'

const InfoBox = ({info}) => {
    return (
        <div className='location-info'>
            <h2>Event Information</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            <button>Close</button>
        </div>
    )
}

export default InfoBox
