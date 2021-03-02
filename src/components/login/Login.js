import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import logo2 from "../../logo2.png";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebase/Config';
import { LoginContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




//  const initializeHandel = () => {
  
// }
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));





const Login = () => {

  const [loginUser, setLoginUser] = useContext(LoginContext);
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState(
   { isSignedIn : false,
    name: '',
    email: '',
    password: '',
    error:'',
    success: false,
    })

    
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
// const { register, handleSubmit} = useForm();
//   const onSubmit = data => 
const handleSubmit=(e)=>{
  
  if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      
      
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      updateName(user.name);
      
      
    })
    .catch((error) => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
     
    });
  
    
  }
  if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      setLoginUser(newUserInfo);
      history.replace(from)
     
      
  })
  .catch((error) => {
    const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
    
  });

  }
  e.preventDefault();

}
const handleBlur=(e)=>{
  
  
  let fieldValidation;
 
  if(e.target.name === 'email'){

  fieldValidation = /\S+@\S+\.\S+/.test(e.target.value);
   


  }
  if(e.target.name === 'password'){
    fieldValidation= /^(?=.*\d)[a-zA-Z0-9]{7,}$/.test(e.target.value)
    
 

     }
     if(e.target.name === 'name'){
       fieldValidation = e.target.value;
     }
     if(fieldValidation){
       const  newUserInfo = {...user};
       newUserInfo[e.target.name] = e.target.value;
       setUser(newUserInfo);
     }

}

const updateName = name => {
  const  user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
          
        }).then(function() {
          
        }).catch(function(error) {
         
        });

}


const classes = useStyles();
    
 
   

    return (
        <div className='login-banar'>
        <div><img style={{width:'20%', height:'10%', marginTop:'100px'}} src={logo2} alt="" srcset=""/></div>
             
             <div style={{ marginTop:'20px', }}>
             
             <form onSubmit={handleSubmit}>
                        
                       { newUser && <input  name="name" onBlur={handleBlur}  placeholder='Name' />}
                        <input  name="email" onBlur={handleBlur}   type='email' placeholder='Email' required/>
                        <input  name="password" onBlur={handleBlur}   type='password' placeholder='Password' required/>
                        <input className='btn' type="submit" value={newUser ? 'sign up' : 'sign in'} />
                        </form>
                       <div className={classes.root}>
                       {newUser ? <Button color="primary" onClick={()=> setNewUser(false)}>Already have an account</Button> :
                       <Button color="primary" onClick={()=> setNewUser(true)}>create account</Button>}
                       </div>
                        
                        <p style={{color:'red'}}>{user.error}</p>
                        { user.success && <p style={{color:'green'}}>User {newUser ? "created" : "logged" } successfully</p>}
             </div>
        </div>
    );
};

export default Login;