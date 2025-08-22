import { Routes, Route } from 'react-router';
import FlightsPage from './components/flightsPage';
import FlightDetailPage from './components/flightDetailPage';
import NavBar from './components/navBar';
import CartPage from './components/cartPage';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<FlightsPage />} />
        <Route path='/flightDetails/:id' element={<FlightDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>

    </>
  )
}

export default App
