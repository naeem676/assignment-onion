import React from 'react';

const AllOrder = (props) => {
    const cart = props.cart;

    const {name, picture, price, quantity} = cart;
    return (
        <div style={{display:'flex', justifyContent:'space-evenly', backgroundColor:'whiteSmoke', margin:'5px', borderRadius:'10px'}}>
                    <div style={{marginTop:'10px'}}><img style={{width:'70px', height:'70px'}} src={picture} alt="" srcset=""/></div>
                    <div style={{textAlign:'center'}}>
                    <p><small style={{color:'blue'}}>{name}</small></p>
                    <p><small style={{color:'red'}}>${price}</small></p>

                    </div>
                    <div style={{display:'flex',marginTop:'20px', margin:'5px', textAlign:'center'}}>
                        <button className='count'>-</button>
                        <h3 style={{margin:'10px', marginTop:'20px'}}>{quantity}</h3>
                        <button className='count'>+</button>
                    </div>

                </div>
    );
};

export default AllOrder;