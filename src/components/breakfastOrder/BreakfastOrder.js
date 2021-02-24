import React from 'react';
import './BreakfastOrder.css'
import breakfast4 from "../fakedata/Breakfast/breakfast4.png";
import breakfast1 from "../fakedata/Breakfast/breakfast1.png";
import breakfast2 from "../fakedata/Breakfast/breakfast2.png";
import breakfast3 from "../fakedata/Breakfast/breakfast3.png";
import breakfast5 from "../fakedata/Breakfast/breakfast5.png";
import breakfast6 from "../fakedata/Breakfast/breakfast6.png";

const BreakfastOrder = () => {
    // const classes = useStyles();
    return (
      <div class="grid-container">
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast4} alt="" srcset=""/>
                </div>
                <div>
                    <h4>Begel & cream cheese</h4>
                    <h5>How we dream about our future</h5>
                    <p>$6.99</p>
                </div> 

      </div>
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast2} alt="" srcset=""/>
                </div>
                <div>
                    <h4>Breakfast sandwich</h4>
                    <h5>How we dream about our future</h5>
                    <p>$7.99</p>
                </div> 

      </div>
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast3} alt="" srcset=""/>
                </div>
                <div>
                    <h4>Baked Chiken</h4>
                    <h5>How we dream about our future</h5>
                    <p>$10.99</p>
                </div> 

      </div> 
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast1} alt="" srcset=""/>
                </div>
                <div>
                    <h4>Eggs benedick</h4>
                    <h5>How we dream about our future</h5>
                    <p>$8.99</p>
                </div> 

      </div>
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast6} alt="" srcset=""/>
                </div>
                <div>
                    <h4>toast croissant fried eggs</h4>
                    <h5>How we dream about our future</h5>
                    <p>$19.99</p>
                </div> 

      </div>
      <div class="grid-item">
      <div>
                    <img style={{width:'200px', height:'200px'}} src={breakfast5} alt="" srcset=""/>
                </div>
                <div>
                    <h4>Full breakfast fried eggs Toast brunch</h4>
                    <h5>How we dream about our future</h5>
                    <p>$9.99</p>
                </div> 

      </div>   
     
    </div>
    );
};

 
export default BreakfastOrder;