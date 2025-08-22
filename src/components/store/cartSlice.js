import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTicket: (state, action) => {
            state.items.push(action.payload);
        },
        removeTicket: (state, action) => {
            state.items = state.items.filter(item => item.orderID !== action.payload)
        },
        clearCart: state => {
            state.items = []
        },
    },
});

export const { addTicket, removeTicket, clearCart } = cartSlice.actions;
export default cartSlice.reducer;