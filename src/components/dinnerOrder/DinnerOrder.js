
import React from 'react';
import { Link } from 'react-router-dom';
import dinner1 from "../fakedata/Dinner/dinner1.png";
import dinner2 from "../fakedata/Dinner/dinner2.png";
import dinner3 from "../fakedata/Dinner/dinner3.png";
import dinner4 from "../fakedata/Dinner/dinner4.png";
import dinner5 from "../fakedata/Dinner/dinner5.png";
import dinner6 from "../fakedata/Dinner/dinner6.png";

const DinnerOrder = () => {
    return (
        <div class="grid-container">
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner1st'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner6} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Salmon with Grapefruit and Lentil salad</h4>
                      <h5>How we dream about our future</h5>
                      <p>$13.99</p>
                  </div>
                  </Link> 
  
        </div>
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner2nd'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner2} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Lemony salmon Piccata</h4>
                      <h5>How we dream about our future</h5>
                      <p>$11.99</p>
                  </div> 
                  </Link>
  
        </div>
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner3rd'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner1} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Baked Chiken</h4>
                      <h5>How we dream about our future</h5>
                      <p>$16.99</p>
                  </div>
                  </Link> 
  
        </div> 
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner4th'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner5} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Pork Tenderloin With Quinoa Pilaf</h4>
                      <h5>How we dream about our future</h5>
                      <p>$17.99</p>
                  </div>
                  </Link> 
  
        </div>
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner5th'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner4} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>French fried with chines</h4>
                      <h5>How we dream about our future</h5>
                      <p>$21.99</p>
                  </div> 
                  </Link>
  
        </div>
        <div class="grid-item">
        <Link style={{textDecoration:'none'}} to='/dinner6th'>
        <div>
                      <img style={{width:'200px', height:'200px'}} src={dinner3} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Garlic butter baked salmon</h4>
                      <h5>How we dream about our future</h5>
                      <p>$14.99</p>
                  </div> 
                  </Link>
  
        </div>   
       
      </div>
    );
};

export default DinnerOrder;