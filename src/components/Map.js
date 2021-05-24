import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'

const Map = ({eventData, centerPoint, zoomLevel}) => {

    const[locationInfo, setLocationInfo] = useState(null)

    const handleClick = (id, title) =>{
        setLocationInfo({id: id, title: title});
        let box = document.querySelector('.location-info');
        if(box != null){
            box.style.display = 'block';
        }
    }

    const markers = eventData.map((curr) =>{
        if(curr.categories[0].id === 8){    //wildfire
            const lat = curr.geometries[0].coordinates[1];
            const lng = curr.geometries[0].coordinates[0];
            return <LocationMarker eventType='wildfire' lat={lat} lng={lng} onClick={() => handleClick(curr.id, curr.title )}/>
        }
        if(curr.categories[0].id === 10){   //severe storm 
            const lat = curr.geometries[0].coordinates[1];
            const lng = curr.geometries[0].coordinates[0];
            return <LocationMarker eventType='storm' lat={lat} lng={lng} onClick={() => handleClick(curr.id, curr.title )}/>
        }
        if(curr.categories[0].id === 12){   //volcano
            const lat = curr.geometries[0].coordinates[1];
            const lng = curr.geometries[0].coordinates[0];
            console.log(lat, lng);
            if(typeof lat == 'number' && typeof lng == 'number'){
                return <LocationMarker eventType='volcano' lat={lat} lng={lng} onClick={() => handleClick(curr.id, curr.title )}/>
            }  
        }
        if(curr.categories[0].id === 15){   //sea and lake ice 
            const lat = curr.geometries[0].coordinates[1];
            const lng = curr.geometries[0].coordinates[0];
            return <LocationMarker eventType='ice' lat={lat} lng={lng} onClick={() => handleClick(curr.id, curr.title )}/>
        }
        
    })

    return (
        <div className='map'>            
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyDbUunRVN0L2Z_Co5wxkIfuYYln7IMeFz0'}}
                defaultCenter={centerPoint}
                defaultZoom={zoomLevel}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <InfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    centerPoint:{
        lat: 0,
        lng: 0
    },
    zoomLevel: 1
}

export default Map
