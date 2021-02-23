import React from 'react';
import BreakfastOrder from '../breakfastOrder/BreakfastOrder';
import { breakfastFakedata, dinnerFakedata, lunchFakedata } from '../fakedata/initializ';





const Resturent = () => {
    const breakfast = breakfastFakedata;
    const lunch = lunchFakedata;
    const dinner = dinnerFakedata;
    
    
    
    return (
        <div>

        
        {
            breakfast.map(brkfst => <BreakfastOrder breakfast={brkfst}></BreakfastOrder>)
        }
            
        </div>
    );
};

export default Resturent;