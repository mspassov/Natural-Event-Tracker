import React, {useState, useEffect} from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

const App = () => {
  const[eventData, setEventData] = useState([]);
  const[loadingState, setLoadingState] = useState(false);

  useEffect(() =>{
    const fetchData = async () =>{
      setLoadingState(true);
      const results = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await results.json();

      setEventData(events);
      setLoadingState(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {loadingState ? <Loader /> :<Map eventData={eventData}/>}
    </div>
  )
}

export default App

