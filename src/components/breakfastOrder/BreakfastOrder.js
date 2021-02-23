import React from 'react';


const BreakfastOrder = (props) => {
    
    const breakfast = props.breakfast;
    console.log(breakfast)
    const {price, picture, text, name} = breakfast;
    return (
        <div>
            <img src={picture} alt="" srcset=""/>
            <h1>{name}</h1>
        </div>
       
    );
};

export default BreakfastOrder;