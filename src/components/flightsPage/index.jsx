import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import FligthCard from "../flightCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import BackToTop from "../helpers/backToTop";

function FlightsPage() {
    const [flights, setFligths] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const listRef = useRef(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights')
                setFligths(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        };
        getData()
    }, []);

    setTimeout(() => {
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, 100);

    if (loading) return <CircularProgress size="3rem" />

    const handleShowMore = (id) => {
        navigate(`/flightDetails/${id}`);
    }

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    }

    return (
        <>
            <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {flights.slice(0, visibleCount).map((flight, index, arr) => {
                    const isLast = index === arr.length - 1;
                    return (
                        <div
                            key={flight.id}
                            ref={isLast ? listRef : null}
                        >
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
                                onShowMore={() => handleShowMore(flight.id)}
                            />
                        </div>
                    )
                })}
            </div>
            {visibleCount < flights.length && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button variant="contained" onClick={handleLoadMore}>
                        Show more
                    </Button>
                </div>
            )}
            <BackToTop />
        </>
    )
}

export default FlightsPage;