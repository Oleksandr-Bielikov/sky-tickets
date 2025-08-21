import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import './App.css'
import FlightsPage from './components/flightsPage';
import FlightDetailPage from './components/flightDetailPage';

function App() {
  const [flights, setFligths] = useState([]);



  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights');
        setFligths(response.data)
      } catch (error) {
        console.error(error)
      }
    };
    getData()
  }, []);


  return (
    <>
      <h1>SkyTickets</h1>
      <Routes>
        <Route index path="/" element={<FlightsPage flights={flights} />} />
        <Route path='/flightDetails/:id' element={<FlightDetailPage />} />
      </Routes>

    </>
  )
}

export default App
