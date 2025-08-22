import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { Box, Divider, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { addTicket } from '../store/cartSlice';

function FlightDetailPage() {
    const { id } = useParams();
    const [flight, setFligth] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const getTicket = () => {
        const value = Number(prompt('скільки квитків ви хочете придбати?'));
        if (value > 0) {
            const ticket = { ...flight, quantity: value, orderID: nanoid() };
            dispatch(addTicket(ticket));
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Flight Details
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="h6">Airline: {flight.airline}</Typography>
            <Typography variant="body1">From: {flight.from}</Typography>
            <Typography variant="body1">To: {flight.to}</Typography>
            <Typography variant="body1">Departure: {flight.departureTime}</Typography>
            <Typography variant="body1">Arrival: {flight.arrivalTime}</Typography>
            <Typography variant="body1">Terminal: {flight.terminal}</Typography>
            <Typography variant="body1">Gate: {flight.gate}</Typography>
            <Typography variant="body1">Tickets: total - {flight.tickets.total}, remaining - {flight.tickets.remaining}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Price: ${flight.price}
            </Typography>

            <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => navigate(-1)}
            >
                Go Back
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={getTicket}
            >
                Add to cart
            </Button>
        </Box>
    );
};

export default FlightDetailPage;