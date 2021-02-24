import React from 'react';
import './Delivery.css';
import fastDelivery from "../../Image/adult-blur-blurred-background-687824.png";
import homeDelivery from "../../Image/architecture-building-city-2047397.png";
import chefCook from "../../Image/chef-cook-food-33614.png";
import fast from "../../ICON/Group 204.png";
import vehaicle from "../../ICON/Group 245.png";
import notification from "../../ICON/Group 1133.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'



const Delivery = () => {
    return (
        <div class="grid-container">
        <div class="rid-item">
        <div>
                      <img style={{width:'100%', height:'100%'}} src={fastDelivery} alt="" srcset=""/>
                  </div>
                  <div style={{display:'flex'}}>
                     <div style={{marginTop:'30px'}}>
                     <img style={{width:'30px', height:'30px'}} src={fast} alt="" srcset=""/>

                     </div>
                     <div style={{marginLeft:'10px', marginTop:'20px'}}>
                     <p>Fast Delivery</p>

                     </div>
                  </div> 
                  <div>
                      <div style={{marginLeft:'40px'}}>
                      <small>keep your system in sync with automated web hook based notification cach time link is paid and how we dream about our future.</small>

                      </div>
                    <div >

                            <div  style={{ marginTop:'60px', display:'flex'}}>
                            <p style={{color:'blue', marginRight:'20px'}}>See more</p>
                            <FontAwesomeIcon style={{color:'blue', marginRight:'170px', marginTop:'20px'}} icon={faArrowCircleRight} />
                            </div>


                    
                       </div> 
                  </div> 
  
        </div>
        <div class="rid-item">
        <div>
              <img style={{width:'100%', height:'100%'}} src={chefCook} alt="" srcset=""/>
                  </div>
                  <div style={{display:'flex', marginTop:'20px'}}>
                      <div style={{marginTop:'30px'}}><img style={{width:'30px', height:'30px'}} src={notification} alt="" srcset=""/></div>
                      <div style={{marginLeft:'10px', marginTop:'20px'}}>
                      <p>A Good Auto Responder</p>

                      </div>

                  </div>
                  <div>
                      <div style={{marginLeft:'40px'}}>
                      <small>keep your system in sync with automated web hook based notification cach time link is paid and how we dream about our future.</small>

                      </div>
                            <div>

                                <div  style={{ marginTop:'60px', display:'flex'}}>
                                <p style={{color:'blue', marginRight:'20px'}}>See more</p>
                                <FontAwesomeIcon style={{color:'blue', marginRight:'170px', marginTop:'20px'}} icon={faArrowCircleRight} />
                                </div>


                    
                        </div>  
                  </div> 
  
        </div>
        <div class="rid-item">
        <div>
               <img style={{width:'100%', height:'100%'}} src={homeDelivery} alt="" srcset=""/>
                  </div>
                  <div style={{display:'flex', marginTop:'20px'}} >
                      <div style={{marginTop:'30px'}}><img style={{width:'30px', height:'30px'}} src={vehaicle} alt="" srcset=""/></div>
                      <div style={{marginLeft:'10px', marginTop:'20px'}}>
                     <p>Home Delivery</p>

                      </div>
                  </div> 
                  <div>
                      <div style={{marginLeft:'40px'}} >
                      <small >keep your system in sync with automated web hook based notification cach time link is paid and how we dream about our future.</small>

                      </div>
                      <div >

                        <div  style={{ marginTop:'60px', display:'flex'}}>
                        <p style={{color:'blue', marginRight:'20px'}}>See more</p>
                        <FontAwesomeIcon style={{color:'blue', marginRight:'170px', marginTop:'20px'}} icon={faArrowCircleRight} />
                        </div>

                        
                            
                        </div> 
                     
                  </div>
                  
                   
  
        </div> 
        </div>
    );
};

export default Delivery;