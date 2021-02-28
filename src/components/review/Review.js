import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App';
import AllOrder from '../AllOrder/AllOrder';

const Review = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
        <AllOrder cart={cart}></AllOrder>
            
        </div>
    );
};

export default Review;