import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../App';
import { fakeData } from '../fakedata/initializ';
import './Cart.css';

import { Link } from 'react-router-dom';
import AllOrder from '../AllOrder/AllOrder';

const Cart = () => {
    const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  const [cart, setCart]= useContext(CartContext);
  console.log(cart);
  
  

  
  
    
    return (
        <div>
            <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/breakfastOrder'>Breakfast</Link></p>
                <p style={{marginLeft:'40px'}}>Lunch</p>
                <p style={{marginLeft:'40px'}}>Dinner</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Edit Delivery Details</h4>
                        <input  name="Deliver to door" ref={register} placeholder='Deliver to door' />
                        <input  name="House & Rd No" ref={register} placeholder='House & Rd No'/>
                        <input  name="Flat, suite or floor" ref={register} placeholder='Flat, suite or floor'/>
                        <input  name="Business Name" ref={register} placeholder='Business Name'/>
                        <input  name="Add delivery instructor" ref={register} placeholder='Add delivery instructor'/>
                        <input  className='btn' type="submit" />
                        </form>
                </div>
                <div>
                <div>
                    <p>From Chittagong Plaza Restaurant GPR</p>
                    <p>Arriving in 20-30 min</p>
                    <p>Rd No 14</p>
                </div>
                <div>
                {
                    cart.map( cat => <AllOrder cart={cat}></AllOrder>)
                }

                </div>
                <div>
                    <p>Subtotal item: $</p>
                    <p>Tax:           $</p>
                    <p>Deliver fee    $</p>
                    <p>Total          $</p>
                    <button>Place Order</button>

                </div>
                
                
                </div>
            </div>
        </div>
     );

 };

export default Cart;