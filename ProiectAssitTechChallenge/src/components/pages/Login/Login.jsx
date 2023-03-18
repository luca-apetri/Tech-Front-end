import './Login.css';
import React, { useState } from "react";
import img1 from '../../../images/loginPage.png';
import img2 from '../../../images/iconsEmail.png';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleCheckboxChange = (event) => {
        setRememberMe(event.target.checked);
      }

    return (
     
        <div className="auth-form-container">
            <div className= "login-form">
            <form id="login-form" onSubmit={handleSubmit}>
               
              <h1> Login to your Account</h1>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"  style={{border: '1px solid black'}} />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" style={{border: '1px solid black'}} />
               
                <div className='Remember'>
               <input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />
               <label htmlFor = "remember">Remember me</label>
                </div>
            
                <Link to="/browseForm">
                <button className='submit'  onClick={() => props.onFormSwitch('browseForm')}>Log In</button>
                </Link>  
                <Link to="/register">
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Not Registered Yet? Create an account</button>
               </Link>          
            </form>
            </div>
            <div className="Imagine">
        <img src={img1} alt="" style={{ width: '870px', height: '700px' }}/>
        </div>

             
        </div>
         
    )
}
