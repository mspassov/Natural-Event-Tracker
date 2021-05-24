import React from 'react'
import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import flashIcon from '@iconify/icons-mdi/flash-alert-outline';
import volcanoIcon from '@iconify-icons/emojione/volcano';
import snowflakeIcon from '@iconify/icons-mdi/snowflake';


const LocationMarker = ({lat, lng, eventType, onClick}) => {

    let iconType = null;
    let iconStyling = '';
    if(eventType === 'wildfire'){
        iconType = fireIcon;
        iconStyling = 'wildfire-icon';
    }
    else if(eventType === 'storm'){
        iconType = flashIcon;
        iconStyling = 'storm-icon';
    }
    else if(eventType === 'volcano'){
        iconType = volcanoIcon;
        iconStyling = 'volcano-icon';
    }
    else if(eventType === 'ice'){
        iconType = snowflakeIcon;
        iconStyling = 'ice-icon';
    }   

    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={iconType} className={iconStyling} />
        </div>
    )
}

export default LocationMarker
