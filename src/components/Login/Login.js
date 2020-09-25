import React, { useContext, useState } from 'react';
import './Login.css';
import googleIcon from '../../resorces/Icon/google.png';
import fbIcon from '../../resorces/Icon/fb.png';
import * as firebase from "firebase/app";
import "firebase/auth";

import { Link, useHistory, useLocation } from 'react-router-dom';
import {UserContext} from '../../App';
import firebaseConfig from './firebaseConfig';
import Header from '../Header/Header';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(false) 
  const [user, setUser] = useState({
    isLoggedIn: false,
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    error:'',
    success:false,
    passwordValid:'',
    
  })

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
 
  const provider = new firebase.auth.GoogleAuthProvider();
   const handleGoogleLogin= () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res =>{
      const user = res.user;
      const loggedInUser ={
        isLoggedIn: true
     }
     setLoggedInUser(user);
     history.replace(from);
      setUser(loggedInUser)
    })
    .catch (err => {
      const error = err.message; 
      console.log(error);
    })
  }
   const fbProvider = new firebase.auth.FacebookAuthProvider();
   const handleFbLogin = () =>{
     firebase.auth().signInWithPopup(fbProvider)
     .then(res =>{
       const user = res.user;
       const loggedInUser ={
        isLoggedIn: true
     }
     setUser(loggedInUser); 
     setLoggedInUser(user);
     history.replace(from);
      
     })
   }
  
   const handleSubmit = (e) =>{
     if(newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        const newUserInfo = {...user}
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch( error => {
       const newUserInfo = {...user}
       newUserInfo.error = error.message;
       newUserInfo.success = false;
       setUser(newUserInfo);
       console.log(newUserInfo);
      });
     }
     if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user}
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('signed in user info', res.user)
      })
      .catch( error => {
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
       
     });
     }
     e.preventDefault();
   }
   const handleBlur = (e) =>{
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length >6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      } 
      if(user.password !== user.confirmPassword){
        const passwordValid = {...user}
        passwordValid.error = 'password not match';
        setUser(passwordValid);
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
     
   }

   const updateUserName = name => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
              displayName: name
      }).then (function (){
        console.log('userName updated')
      }).catch(function (error){
        console.log(error)

      })
   }

  
    return (
      <div>
        <div>
        <Header></Header>
        </div>
          <div className="login-form">
              {newUser ? <h6>Create Account</h6> :  <h6>Login</h6>  } 
            {  
              newUser ?
              <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleBlur} name="firstName"  required placeholder="First Name"/><br/>
                <input type="text" onBlur={handleBlur} name="lastName" required placeholder="Last Name"/><br/>
                <input type="email" onBlur={handleBlur} name="email"  required placeholder="Email"/><br/>
                <input type="password" onBlur={handleBlur} name="password" required placeholder="Password"/><br/>
                <input type="password" onBlur={handleBlur}  name="confirmPassword" required placeholder="Confirm Password"/><br/><br/>
                <p style={{color:'red'}}>{user.error}</p>
                {user.success ? <p style={{color:'green'}}>Account created successfully</p> : <p style={{color:'red'}}>{user.error}</p>}
                <input className="btn btn-warning" type="submit" value="Create Your Account"/>
                <p> <small>Already have an account?  <Link onClick={() => setNewUser(!newUser)} >Login</Link> </small></p> 
              </form>
              :
              <form onSubmit={handleSubmit}>
                <input type="email" onBlur={handleBlur} name="email"  required placeholder="Email"/><br/>
                <input type="password" onBlur={handleBlur} name="password" required placeholder="Password"/><br/><br/>
                {user.success ? <p style={{color:'green'}}>Login successfully</p> : <p style={{color:'red'}}>{user.error}</p>}
                <input className="btn btn-warning" type="submit" value="Login"/>
                <p> <small>Have no account?  <Link onClick={() => setNewUser(!newUser)}>Create Account</Link> </small></p> 
              </form>
            }
          </div>
       
          <div className="text">
            <p>_________or___________</p>
            <button onClick={handleGoogleLogin} className="icon"> <span><img src={googleIcon} alt=""/></span> <span>Continue With Google</span></button><br/>
            <button onClick={handleFbLogin} className="icon"><span><img src={fbIcon} alt=""/></span> <span>Continue With Facebook</span></button>
          </div>
      </div>
        
    );
};

export default Login;