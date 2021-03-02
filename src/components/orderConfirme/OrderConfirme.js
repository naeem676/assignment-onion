import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lcation from "../../Image/uctc-map.jpg";
import bike from "../../Image/Group 1151.png";
import rider from "../../Image/Group 1152.png";
import './OrderConfirm.css';
import { LocationContext } from '../../App';

const OrderConfirme = () => {
    const [location, setLocation]= useContext(LocationContext);
    
    return (
        <div>
            <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/breakfastOrder'>Breakfast</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/lunchOrder'>Lunch</Link></p>
                <p style={{marginLeft:'40px'}}> <Link style={{textDecoration:'none'}} to='/dinnerOrder'>Dinner</Link></p>
                <p style={{marginLeft:'400px'}}> <Link style={{textDecoration:'none'}} to='/home'>Home</Link></p>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div> <img src={lcation} alt="" srcset=""/></div>
                <div style={{backgroundColor:'whiteSmoke'}}>
                <div style={{marginLeft:'60px', marginTop:'20px'}}><img style={{width:'20%', height:'20%'}} src={bike} alt="" srcset=""/></div>
                    <div style={{backgroundColor:'white', margin:'0 60px', padding:'10px', borderRadius:'10px'}}>
                        <p>Your Location</p>
                        {location.Deliver}
                     
                        <p>Shop Address</p>
                        <small>Finllay Squre Restaurant</small>
                    </div>
                    <div style={{marginLeft:'60px'}}>
                        <h4>09:30</h4>
                        <small>Estimated delivery time</small>
                    </div>
                    <div style={{backgroundColor:'white', padding:'10px',borderRadius:'10px', display:'flex',  margin:'40px 90px', justifyContent:'space-evenly'}}>
                    <img style={{width:'20%', height:'20%'}} src={rider} alt="" srcset=""/>
                    <small style={{marginTop:'20px'}}>Ripon</small>
                    </div>

                    <div style={{marginLeft:'130px'}}><button className='contact'>Contact</button></div>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderConfirme;