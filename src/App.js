
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Delivery from './components/delivary/Delivery';
import Footer from './components/footer/Footer';
import FullWidthTabs from './components/FullWidthTabs/FullWidthTabs';
import Heder from './components/heder/Heder';
import NoMatch from './components/Nomatch/NoMatch';
import Break1st from './components/breakfastMenu/Break1st';
import Break2nd from './components/breakfastMenu/Break2nd';
import Break3rd from './components/breakfastMenu/Break3rd';
import Break4th from './components/breakfastMenu/Break4th';
import Break5th from './components/breakfastMenu/Break5th';
import Break6th from './components/breakfastMenu/Break6th';
import Lunch1st from './components/LunchMenu/Lunch1st';
import Lunch2nd from './components/LunchMenu/Lunch2nd';
import Lunch3rd from './components/LunchMenu/Lunch3rd';
import Lunch4th from './components/LunchMenu/Lunch4th';
import Lunch5th from './components/LunchMenu/Lunch5th';
import Lunch6th from './components/LunchMenu/Lunch6th';
import Dinner1st from './components/dinnerMenu/Dinner1st';
import Dinner2nd from './components/dinnerMenu/Dinner2nd';
import Dinner3rd from './components/dinnerMenu/Dinner3rd';
import Dinner4th from './components/dinnerMenu/Dinner4th';
import Dinner5th from './components/dinnerMenu/Dinner5th';
import Dinner6th from './components/dinnerMenu/Dinner6th';
import { createContext } from 'react';
import { useState } from 'react';
import Cart from './components/cart/Cart';
import BreakfastOrder from './components/breakfastOrder/BreakfastOrder';
import LunchOrder from './components/lunchOrder/LunchOrder';
import DinnerOrder from './components/dinnerOrder/DinnerOrder';
import Login from './components/login/Login';
import PrivateRoute from './components/privteRoute/PrivateRoute';
import AllOrder from './components/AllOrder/AllOrder';
import OrderConfirme from './components/orderConfirme/OrderConfirme';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';




export const CartContext = createContext();
export const LoginContext = createContext();
export const LocationContext = createContext();



function App() {
    const [cart, setCart] = useState([]);
    const [loginUser, setLoginUser]= useState({});
    const [location, setLocation] = useState({})
    
    
  return (
      <CartContext.Provider value={[cart, setCart]}>
      <LoginContext.Provider value={[loginUser, setLoginUser]}>
      <LocationContext.Provider value={[location, setLocation]}>
    <Router >
    
  
    <Switch>
      <Route exact path='/'>
          <Heder></Heder>
          <FullWidthTabs></FullWidthTabs>
          <Delivery></Delivery>
          <Footer></Footer>

      </Route>
      <Route path='/home'>
          <Heder></Heder>
          <FullWidthTabs></FullWidthTabs>
          <Delivery></Delivery>
          <Footer></Footer>

      </Route>
      <Route path='/break1st'>
          <Break1st></Break1st>

      </Route>
      <Route path='/break2nd'>
          <Break2nd></Break2nd>

      </Route>
      <Route path='/break3rd'>
          <Break3rd></Break3rd>

      </Route>
      <Route path='/break4th'>
          <Break4th></Break4th>

      </Route>
      <Route path='/break5th'>
          <Break5th></Break5th>

      </Route>
      <Route path='/break6th'>
          <Break6th></Break6th>

      </Route>
      <Route path='/lunch1st'>
          <Lunch1st></Lunch1st>
      </Route>
      <Route path='/lunch2nd'>
          <Lunch2nd></Lunch2nd>
      </Route>
      <Route path='/lunch3rd'>
          <Lunch3rd></Lunch3rd>
      </Route>
      <Route path='/lunch4th'>
          <Lunch4th></Lunch4th>
      </Route>
      <Route path='/lunch5th'>
          <Lunch5th></Lunch5th>
      </Route>
      <Route path='/lunch6th'>
          <Lunch6th></Lunch6th>
      </Route>
      <Route path='/dinner1st'>
          <Dinner1st></Dinner1st>
      </Route>
      <Route path='/dinner2nd'>
          <Dinner2nd></Dinner2nd>
      </Route>
      <Route path='/dinner3rd'>
          <Dinner3rd></Dinner3rd>
      </Route>
      <Route path='/dinner4th'>
          <Dinner4th></Dinner4th>
      </Route>
      <Route path='/dinner5th'>
          <Dinner5th></Dinner5th>
      </Route>
      <Route path='/dinner6th'>
          <Dinner6th></Dinner6th>
      </Route>
     
      <Route path='/breakfastOrder'>
          <BreakfastOrder></BreakfastOrder>
      </Route>
      <Route path='/lunchOrder'>
          <LunchOrder></LunchOrder>
      </Route>
      <Route path='/dinnerOrder'>
          <DinnerOrder></DinnerOrder>
      </Route>
      <Route path='/login'>
          <Login></Login>

      </Route>
        <PrivateRoute path='/cart' >
          <Cart></Cart>
      </PrivateRoute>
      <PrivateRoute path='/orderConfirm'>
          <OrderConfirme></OrderConfirme>

      </PrivateRoute>
      <PrivateRoute path='/orderSuccess'>
          <OrderSuccess></OrderSuccess>

      </PrivateRoute>
      
      <Route path='*'>
          <NoMatch></NoMatch>

      </Route>
    
    </Switch>
    
     
    </Router>
    </LocationContext.Provider>
    </LoginContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
