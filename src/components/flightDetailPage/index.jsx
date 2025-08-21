import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import FligthCard from "../flightCard";

function FlightDetailPage() {
    const { id } = useParams();
    const [flight, setFligth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchFlight() {
            try {
                const response = await axios.get(`https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights/${id}`);
                setFligth(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchFlight();
    }, [id]);

    if (!flight) return <p>Loading...</p>

    return (
        <>
            <h1>Flight Detail Page</h1>
            <FligthCard
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
            />
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
};

export default FlightDetailPage;