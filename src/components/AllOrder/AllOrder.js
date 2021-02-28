import React, {useState } from 'react';



const AllOrder = (props) => {
    
    const showCart = props.showCart;
    const [subTotal, setSubTotal] = props.subTotal;
    

    const {name, picture, price, quantity} = showCart;
    
    const [taka, setTaka ] = useState(price);
    const [count, setCount]= useState(quantity);
    
   

    const priceIncrese = () =>{
        const plusCount = count + 1;
        const plusPrice = taka + price  ;
        const subPrice =price + subTotal;
        const totalPlus = formatPrice(plusPrice);
       
        
        setCount(plusCount);
        setTaka(totalPlus);
        setSubTotal(subPrice);
      

    }
    const priceDicrese = () =>{
        const minsCount = count - 1;
        const minsPrice = taka -  price;
        const subMins = subTotal - minsPrice;
        const totalMins = formatPrice(minsPrice)
       
        
        setCount(minsCount);
        setTaka(totalMins);
        setSubTotal(subMins);
      

    }
    const formatPrice = num => {
        const pricesion = num.toFixed(2);
        return Number(pricesion);
    }
    if(count < quantity){
        const digite = quantity;
        setCount(digite);
        
        
    }
    if(taka < price){
        const rupay = price;
        setTaka(rupay);
       
    }
    
   
  
     
    
    
    return (
        <div style={{display:'flex', justifyContent:'space-evenly', backgroundColor:'whiteSmoke', margin:'5px', borderRadius:'10px'}}>
                    <div style={{marginTop:'10px'}}><img style={{width:'70px', height:'70px'}} src={picture} alt="" srcset=""/></div>
                    <div style={{textAlign:'center'}}>
                    <p><small style={{color:'blue'}}>{name}</small></p>
                    <p><small style={{color:'red'}}>${taka}</small></p>

                    </div>
                    <div style={{display:'flex',marginTop:'20px', margin:'5px', textAlign:'center'}}>
                        <button className='count' onClick={priceDicrese}>-</button>
                        <h3 style={{margin:'10px', marginTop:'20px'}}>{count}</h3>
                        <button className='count' onClick={priceIncrese}>+</button>
                    </div>
                    

                </div>
    );
};

export default AllOrder;