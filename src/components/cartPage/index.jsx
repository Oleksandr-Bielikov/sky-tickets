import { useDispatch, useSelector } from 'react-redux';
import { removeTicket, clearCart } from '../store/cartSlice';

function CartPage() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <h1>Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.orderID}>
                        Order ID: {item.orderID}<br />
                        {item.airline} ({item.from} → {item.to})<br />
                        Quantity: {item.quantity} <br />
                        Price per ticket: ${item.price} <br />
                        Total: ${item.price * item.quantity} <br />
                        <button onClick={() => dispatch(removeTicket(item.orderID))}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total price: ${totalPrice}</h2>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
    )
};

export default CartPage;