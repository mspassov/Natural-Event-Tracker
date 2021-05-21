import React from 'react'
import spinner from '../loading.gif'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={spinner} alt="loading" />
            <h1>Loading Event Details </h1>
        </div>
    )
}

export default Loader
