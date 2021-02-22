import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Heder.css';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Heder = () => {
    return (
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
                  <Nav.Link className='home'  href="/home">home</Nav.Link>
               </Nav.Item>
               </Nav>
  
          
        </div>
    );
};

export default Heder;