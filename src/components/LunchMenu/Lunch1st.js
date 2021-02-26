import React from 'react';
import lunch6 from "../fakedata/lunch/lunch6.png";

const Lunch1st = () => {
    return (
        <div>
         <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}>Breakfast</p>
                <p style={{marginLeft:'40px'}}>Lunch</p>
                <p style={{marginLeft:'40px'}}>Dinner</p>
            </div>
            <div style={{display:'flex', marginLeft:'100px'}}>
                <div style={{marginTop:'50px', marginLeft:'40px'}}>
                    <h1>Light Lunch</h1>
                    <p>Gay one the what walk then she Demesne mention <br/> promise you justice
                    arrived way. Amazing foods are. <br/> Or and Increasing to in especially inquietude companiouns <br/> acceptance admiration.
                    Outweigh it families distance wandered ye.</p>
                   <div style={{display:'flex'}}>
                   <h2>$23.99</h2>
                    <button>-</button>
                    <h2>0</h2>
                    <button>+</button>
                   </div>
                    <button className='add'>Add</button>
                </div>
                <div><img style={{width:'80%'}} src={lunch6} alt="" srcset=""/> </div>
            </div>
            
        </div>
    );
};

export default Lunch1st;