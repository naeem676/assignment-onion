import React from 'react';
import './LunchOrder';
import lunch1 from "../fakedata/lunch/lunch1.png";
import lunch2 from "../fakedata/lunch/lunch2.png";
import lunch3 from "../fakedata/lunch/lunch3.png";
import lunch4 from "../fakedata/lunch/lunch4.png";
import lunch5 from "../fakedata/lunch/lunch5.png";
import lunch6 from "../fakedata/lunch/lunch6.png";

const LunchOrder = () => {
    return (
        <div class="grid-container">
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch6} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Healthy meal plan</h4>
                      <h5>How we dream about our future</h5>
                      <p>$23.99</p>
                  </div> 
  
        </div>
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch5} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Fried chicken bento</h4>
                      <h5>How we dream about our future</h5>
                      <p>$21.99</p>
                  </div> 
  
        </div>
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch3} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Tarragon-Rubbed Salmon</h4>
                      <h5>How we dream about our future</h5>
                      <p>$25.99</p>
                  </div> 
  
        </div> 
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch4} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Indian Lunch</h4>
                      <h5>How we dream about our future</h5>
                      <p>$27.99</p>
                  </div> 
  
        </div>
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch1} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Beff stick</h4>
                      <h5>How we dream about our future</h5>
                      <p>$19.99</p>
                  </div> 
  
        </div>
        <div class="grid-item">
        <div>
                      <img style={{width:'200px', height:'200px'}} src={lunch2} alt="" srcset=""/>
                  </div>
                  <div>
                      <h4>Honey-Sony-Glazed Salmon with Peppers</h4>
                      <h5>How we dream about our future</h5>
                      <p>$24.99</p>
                  </div> 
  
        </div>   
       
      </div>
    );
};

export default LunchOrder;