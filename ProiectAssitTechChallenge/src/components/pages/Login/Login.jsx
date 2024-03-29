import './Login.css';
import React, { useState } from "react";
import img1 from '../../../images/loginPage.png';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState('');

    const [rememberMe, setRememberMe] = useState(false);
    const [formType, setFormType] = useState("login");

    const handleSubmit = (e) => {
        e.preventDefault();
      
        ///aici se trimit datele catre back-end
    }

    const handleCheckboxChange = (event) => {
        setRememberMe(event.target.checked);
    }

    const handleFormSwitch = (formType) => {
      axios.post('http://localhost:8080/users/login', {

      email: email,
      password: pass

      }).then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
      
        setFormType(formType);

    };

    return (
        <div className="auth-form-container">
            <div className= "login-form">
                <form id="login-form" onSubmit={handleSubmit}>
                    <h1> Login to your Account</h1>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"  style={{border: '1px solid black'}} />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" style={{border: '1px solid black'}} />
                    <div className='Remember'>
                        <input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />
                        <label htmlFor = "remember">Remember me</label>
                    </div>
                    <Link to="/browseForm">
                        <button className='submit'  onClick={() => handleFormSwitch('browseForm')}>Log In</button>
                    </Link>  
                    <Link to="/register">
                        <button className="link-btn" onClick={() => handleFormSwitch('register')}>Not Registered Yet? Create an account</button>
                    </Link> 
                </form>
            </div>
            <div className="Imagine">
                <img src={img1} alt="" style={{ width: '870px', height: '700px' }}/>
            </div>
        </div>
    )
}
