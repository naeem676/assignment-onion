
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



function App() {
  return (
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
      <Route path='*'>
          <NoMatch></NoMatch>

      </Route>
    </Switch>
    
    
    
    
    
     
    </Router>
  );
}

export default App;
