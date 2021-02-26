import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../App';
import breakfast2 from "../fakedata/Breakfast/breakfast2.png";

const Break2nd = () => {
    const[cart, setCart]= useContext(CartContext);
    const [price, setPrice] = useState(9.99);
    const [count, setCount] = useState(1);

    const priceIncrese = () =>{
        const plusCount = count + 1;
        const plusPrice = price + 9.99;
        const totalPlus = formatPrice(plusPrice)
       
        
        setCount(plusCount);
        setPrice(totalPlus);
        
        
        

    }
    const priceDicrese = () =>{
        const minsCount = count - 1;
        const minsPrice = price - 9.99;
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
    if(price < 9.99){
        const prices = 6.99;
        setPrice(prices);
    }

    const history = useHistory();
    const addToCard = () => {
        history.push('/cart');
        const breakSecond = {
            "name": "Breakfast sandwich",
            "price":"$9.99",
            "text": "How we dream about our future",
            "key": "NA2",
            "phone": "011-962-7516",
            "cell": "081-454-0666",
            "picture": breakfast2
        }
        setCart(breakSecond);
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
                    <h1>Light Breakfast</h1>
                    <p>Gay one the what walk then she Demesne mention <br/> promise you justice
                    arrived way. Amazing foods are. <br/> Or and Increasing to in especially inquietude companiouns <br/> acceptance admiration.
                    Outweigh it families distance wandered ye.</p>
                   <div style={{display:'flex'}}>
                   <h2>${price}</h2>
                    <button onClick={priceDicrese}>-</button>
                    <h2>{count}</h2>
                    <button onClick={priceIncrese}>+</button>
                   </div>
                    <button onClick={addToCard} className='add'>Add</button>
                </div>
                <div><img style={{width:'80%'}} src={breakfast2} alt="" srcset=""/> </div>
            </div>
            
        </div>
    );
};

export default Break2nd;