import './Register.css';
import React, { useState } from "react";
import img1 from '../../../images/loginPage.png';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const[lname,setlName]=useState('');
    const[compName,setCompName]=useState('');
    const[compAdress,setCompAdress]=useState('');
    const[fiscCode,setFiscCode]=useState('');
    const[adress,setAdress]=useState('');
    const[individual,setIndividual]=useState('');
    const[company,setCompany]=useState('');
    const[publicIn,setPublicIn]=useState('');
    const[accountType,setAccountType]=useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleFormSwitch = (formType) => {
        console.log("Nume:", name);
        console.log("Prenume:",lname);
        console.log("Adresa:",adress);
        console.log("CompanyName:",compName);
        console.log("FiscalCode:",fiscCode);
        console.log("AccountType:",accountType);
        console.log("Email:",email);
        console.log("Parola:",pass);
      
    };
    const onFormSwitch =(e)=>{

        console.log('email');
    }

    

    return (
        <div className="auth-form-container">
           <div className= "register-form">
        <form id="register-form" onSubmit={handleSubmit}>
             <h1>Welcome!</h1>
            <p className="ControlText">Please complete all informations below:</p>
                  <div className="Account">
                   <p>Account Type:</p>
                 </div>
                
               
         <div className="Butoane">
          <input value="Individual" type="radio"   name="group" onChange={(e)=>setAccountType(e.target.value)} id="individual"/>
        <label htmlFor="individual">
            Individual
        </label>

        <input value="Company" type="radio" name="group" onChange={(e)=>setAccountType(e.target.value)} id="company"/>
        <label htmlFor="company">
            Company
        </label>
        <input value="PublicIn" type="radio" name="group" onChange={(e)=>setAccountType(e.target.value)} id="publicIn"/>
        <label htmlFor="publicIn">
           Public Institution
        </label>
        
         </div>
             <div className="userInformation">

                <div className="firstname" >
                <label htmlFor="name">First Name
                </label>
                <input value={name} className="fname" name="name" onChange={(e) => setName(e.target.value)} id="name" style={{border: '1px solid black'}} />
                </div>


                <div  className="lastname">
                <label htmlFor="lname">Last Name 
                </label>
                <input value={lname} className="lname"  name="lname" onChange={(e) => setlName(e.target.value)} id="lname" style={{border: '1px solid black'}} />
                    </div>
             
             
                 
            
            <label htmlFor="Adress">Adress</label>
            <input value={adress} onChange={(e) => setAdress(e.target.value)}type="adress"  id="adress" name="adress" style={{border: '1px solid black'}}/>
            
            <label htmlFor="Company Name">Company Name</label>
            <input value={compName} onChange={(e) => setCompName(e.target.value)}type="companie"  id="companie" name="companie" style={{border: '1px solid black'}} />
            
            <label htmlFor="Company Adress">Company Adress</label>
            <input value={compAdress} onChange={(e) => setCompAdress(e.target.value)}type="adresa companiei"  id="adresa_companiei" name="adresa companiei" style={{border: '1px solid black'}}/>
            
            <label htmlFor="Fiscal code">Fiscal code</label>
            <input value={fiscCode} onChange={(e) => setFiscCode(e.target.value)}type="cod fiscal"  id="cod_fiscal" name="cod fiscal" style={{border: '1px solid black'}} />
            
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" style={{border: '1px solid black'}} />
           
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" style={{border: '1px solid black'}}/>
            </div>
            
            
            <Link to="/browseForm">  
            <button className="submit-btn" onClick={() => handleFormSwitch('browseForm')}>Sign up</button>
            </Link>  
            <Link to="/">
            <button className="link-button"  onClick={() => props.onFormSwitch('login') }>Already have an account? Log in</button>
            </Link>
        </form>
        </div>
        <div className="Imagine2">
          {/**/} <img src={img1} alt="" style={{ width: '870px', height: '700px' }}/> 
        </div>
    </div>
    )
}