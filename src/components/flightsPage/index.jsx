import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import FligthCard from "../flightCard";

function FlightsPage() {
    const [flights, setFligths] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights')
                setFligths(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        getData()
    }, []);

    const handleShowMore = (id) => {
        navigate(`/flightDetails/${id}`);
    }

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {flights.map(flight => (
                    <FligthCard
                        key={flight.id}
                        id={flight.id}
                        airline={flight.airline}
                        from={flight.from}
                        to={flight.to}
                        departureTime={flight.departureTime}
                        arrivalTime={flight.arrivalTime}
                        price={flight.price}
                        terminal={flight.terminal}
                        gate={flight.gate}
                        tickets={flight.tickets}
                        onShowMore={() => handleShowMore(flight.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default FlightsPage;