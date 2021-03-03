import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext, LocationContext, LoginContext } from '../../App';
import './OrderSuccess.css';


const OrderSuccess = () => {
    const [location, setLocation]= useContext(LocationContext);
    const [cart, setCart] = useContext(CartContext);
    const [loginUser, setLoginUser] = useContext(LoginContext)

    const history = useHistory();


    const logOutHandle = () =>{
        setLocation({});
        setCart([]);
        setLoginUser({});
        history.push('/home')
    }
   

    return (
        <div>
        <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/breakfastOrder'>Breakfast</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/lunchOrder'>Lunch</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/dinnerOrder'>Dinner</Link></p>
                <button onClick={logOutHandle} className='log-out'>Log out</button>
                <p style={{marginLeft:'100px'}}> <Link style={{textDecoration:'none'}} to='/home'>Home</Link></p>
            </div>
        <div className='bg-success'>
        <h1>Your Order is Successfully Done</h1>
        <h1>Thank You!</h1>
        </div>
            
        </div>
    );
};

export default OrderSuccess;