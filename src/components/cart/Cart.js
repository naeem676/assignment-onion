import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext, LocationContext} from '../../App';
import './Cart.css';
import { Link, useHistory} from 'react-router-dom';
import AllOrder from '../AllOrder/AllOrder';

const Cart = () => {

const [cart, setCart] = useContext(CartContext);
const [location, setLocation]= useContext(LocationContext);
const [color, setColor] = useState(false);
const history = useHistory();


 const { register, handleSubmit} = useForm();
  const onSubmit = data => {
      if(data.Deliver === undefined){
          setColor(false)
      }
      if(data.Deliver){
          setColor(true)
      }

    setLocation(data);
   
  } ;

  

 

  
  
  
 
  
  const total = cart.reduce((total, crt) => crt.price + total * crt.quantity, 0);

  
  const [subTotal, setSubTotal] = useState(0);
  
  
  const findTotal = subTotal + total
  const tax = Math.round(findTotal / 25 );
  const fee = 2;
  const grandTotal = findTotal + tax + fee;

   if(findTotal < total){
       const mins = total;
       return mins;
   }

  
   
   

  

   const orderConfirm = ()=>{
       if (color) {
           history.push('/orderConfirm')
           
       }
    }
    
    return (
        <div>
            <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/breakfastOrder'>Breakfast</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/lunchOrder'>Lunch</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/dinnerOrder'>Dinner</Link></p>
                <p style={{marginLeft:'400px'}}> <Link style={{textDecoration:'none'}} to='/home'>Home</Link></p>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'80px'}}>
                <div >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Edit Delivery Details</h4>
                        <input  name="Deliver" ref={register} placeholder='Deliver to door' />
                        <input  name="House" ref={register} placeholder='House & Rd No'/>
                        <input  name="Flat" ref={register} placeholder='Flat, suite or floor'/>
                        <input  name="Business" ref={register} placeholder='Business Name'/>
                        <input  name="instructor" ref={register} placeholder='Add delivery instructor'/>
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
                    cart.map( cat => <AllOrder showCart={cat} key={cat.key} subTotal={[subTotal, setSubTotal]}></AllOrder>)
                }

                </div>
                <div style={{ display:'flex', justifyContent:'space-between'}}>
                    <div>
                    <p>Subtotal {cart.length} item:</p>
                    <p>Tax: </p>
                    <p>Deliver fee</p>
                    <p>Total</p>
                    </div>
                    <div>
                        <p>${findTotal}</p>
                        <p>${tax}</p>
                        <p>${fee}</p>
                        <p>${grandTotal}</p>
                    </div>
                    

                </div>
                <button onClick={orderConfirm} style={{backgroundColor:color ? 'red' : 'goldenrod'}} className='placeOrder'>Place Order</button>
                
                
                
                
                </div>
            </div>
        </div>
     );

 };

export default Cart;