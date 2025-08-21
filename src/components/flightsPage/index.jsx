import { useNavigate } from "react-router";
import FligthCard from "../flightCard";

function FlightsPage({ flights }) {
    const navigate = useNavigate();

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