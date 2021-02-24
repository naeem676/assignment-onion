import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Heder.css';
import logo from '../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Heder = () => {
    return (
        <div  >

        <div>
        <Nav className='nav'  variant="pills" defaultActiveKey="/home">
            
            <Nav.Item style={{paddingTop:'10px'}}>
                <img style={{width:'150px'}} src={logo} alt="" srcset=""/>
            </Nav.Item>

            <Nav.Item style={{ marginLeft: '800px', 
              paddingTop:'10px'
             }}>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Nav.Item>
            
            <Nav.Item style={{ marginLeft: '50px', 
              paddingTop:'10px'
             }} >
                <Nav.Link style={{textDecoration:'none'}} href='/login'>Login</Nav.Link>
            </Nav.Item>
             <Nav.Item style={{marginLeft:'auto', 
              marginRight:'20px',
              paddingTop:'10px'
             }} >
                  <button><Nav.Link className='home'  href="/home">home</Nav.Link></button>
               </Nav.Item>
               </Nav>
  
        </div>
        
               <div className='banner'>

               <div className='input'>
               <h1>Best food waiting for your belly</h1>
               <input type="text"/>
               <button>Search</button>
               </div>
               


               

               </div>
  
          
        </div>
    );
};

export default Heder;