import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../App';
import dinner3 from "../fakedata/Dinner/dinner3.png";

const Dinner6th = () => {
    const[cart, setCart]= useContext(CartContext);
    
    const [price, setPrice] = useState(14.99);
    const [count, setCount] = useState(1);

    const priceIncrese = () =>{
        const plusCount = count + 1;
        const plusPrice = price + 14.99;
        const totalPlus = formatPrice(plusPrice)
       
        
        setCount(plusCount);
        setPrice(totalPlus);
        
        
        

    }
    const priceDicrese = () =>{
        const minsCount = count - 1;
        const minsPrice = price - 14.99;
        const totalMins = formatPrice(minsPrice)
       
        
        setCount(minsCount);
        setPrice(totalMins);

    }
    const formatPrice = num => {
        const pricesion = num.toFixed(2);
        return Number(pricesion);
    }
    if(count < 1){
        const quantity = 1;
        setCount(quantity)
    }
    if(price < 14.99){
        const prices = 14.99;
        setPrice(prices);
    }

    const history = useHistory();
    const addToCard = () => {
        history.push('/cart')

        const dinnerSix = {
            "name": "Garlic butter baked salmon",
            "price": price,
            "text": "How we dream about our future",
            "key": "NA12",
            "quantity": count,
            "phone": "011-962-7516",
            "cell": "081-454-0666",
            "picture": dinner3,
        }
        const dinner = [...cart, dinnerSix];
        setCart(dinner);
    }
    return (
        <div>
         <div style={{display:'flex', marginLeft:'500px'}}>
                <p style={{marginLeft:'40px'}}>Breakfast</p>
                <p style={{marginLeft:'40px'}}>Lunch</p>
                <p style={{marginLeft:'40px'}}>Dinner</p>
            </div>
            <div style={{display:'flex', marginLeft:'100px'}}>
                <div style={{marginTop:'50px', marginLeft:'40px'}}>
                    <h1>Light Dinner</h1>
                    <p>Gay one the what walk then she Demesne mention <br/> promise you justice
                    arrived way. Amazing foods are. <br/> Or and Increasing to in especially inquietude companiouns <br/> acceptance admiration.
                    Outweigh it families distance wandered ye.</p>
                   <div style={{display:'flex'}}>
                   <h2>${price}</h2>
                    <button className='count' onClick={priceDicrese}>-</button>
                    <h2>{count}</h2>
                    <button className='count' onClick={priceIncrese}>+</button>
                   </div>
                    <button className='add' onClick={addToCard}>Add</button>
                </div>
                <div><img style={{width:'80%'}} src={dinner3} alt="" srcset=""/> </div>
            </div>
            
        </div>
    );
};

export default Dinner6th;