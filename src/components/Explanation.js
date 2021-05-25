import React from 'react'
import nasaLogo from '../nasaLogo.png'
import mapsLogo from '../mapsLogo.png'

const Explanation = () => {
    return (
        <section className='explanation'>
            <h1>Tools Used:</h1>
            <img src={nasaLogo} alt="" className='nasaLogo' />
            <h3>NASA Web API for Natural Events Tracking</h3>
            <br /><br />
            <img src={mapsLogo} alt="" className='mapsLogo' />
            <h3>Google Maps API</h3>
            <br /><br />
        </section>
    )
}

export default Explanation
