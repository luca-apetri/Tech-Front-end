import './Login.css';
import React, { useState } from "react";
import img1 from '../../../images/imaginE.png';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
     
        <div className="auth-form-container">
      
            <form className="login-form" onSubmit={handleSubmit}>
                  <h2> Login to your Account</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"style={{border: '1px solid black'}} />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" style={{border: '1px solid black'}} />
               <div className="Remember">
               <p>Remember me  
                <input type="checkbox"  style={{border: '1px solid black'}}/>
                </p>

                </div>
                
                <Link to="/browseForm">
                <button type="submit" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('browseForm')}>Log In</button>
                </Link>  
                <Link to="/register">
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Not Registered Yet?  Create an account</button>
               </Link>          
            </form>
            <div className="Imagine">
        <img src={img1} alt="" style={{ width: '870px', height: '700px' }}/>
        </div>
        </div>
         
    )
}
