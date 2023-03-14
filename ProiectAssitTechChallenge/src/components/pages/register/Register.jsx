import './Register.css';
import React, { useState } from "react";
import img1 from '../../../images/imaginE.png';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const onFormSwitch =(e)=>{

        console.log('email');
    }

    

    return (
        <div className="auth-form-container">
       
        <form className="register-form" onSubmit={handleSubmit}>
             <h1 style={{paddingRight:'336px'}}>Welcome!</h1>
            <p1 className="ControlText">Please complete all informations below:</p1>
            
                  <div className="Account">
                   <p1>Account Type:</p1>
                   
                 </div>
                
               
         <div className="Butoane">
          <input value={individual} type="radio"   name="individual" onChange={(e)=>setIndividual(e.target.value)} id="individual"/>
        <label htmlFor="individual">
            Individual
        </label>

        <input value={company} type="radio" name="company" onChange={(e)=>setIndividual(e.target.value)} id="company"/>
        <label htmlFor="company">
            Company
        </label>
        <input value={publicIn} type="radio" name="publicIn" onChange={(e)=>setIndividual(e.target.value)} id="publicIn"/>
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
                <input value={lname} className="lname"  name="lname" onChange={(e) => setName(e.target.value)} id="lname" style={{border: '1px solid black'}} />
                    </div>
             
             </div>
                 
         
               
              
               
    


            <label htmlFor="Adress">Adress</label>
            <input value={adress} onChange={(e) => setAdress(e.target.value)}type="adress"  id="adress" name="adress" style={{border: '1px solid black'}}/>
            
            <label htmlFor="Company Name">Company Name</label>
            <input value={compName} onChange={(e) => setCompName(e.target.value)}type="companie"  id="companie" name="companie" style={{border: '1px solid black'}} />
            
            <label htmlFor="Company Adress">Company Adress</label>
            <input value={compAdress} onChange={(e) => setCompAdress(e.target.value)}type="adresa companiei"  id="adresa companiei" name="adresa companiei" style={{border: '1px solid black'}}/>
            
            <label htmlFor="Fiscal code">Fiscal code</label>
            <input value={fiscCode} onChange={(e) => setFiscCode(e.target.value)}type="cod fiscal"  id="cod fiscal" name="cod fiscal" style={{border: '1px solid black'}} />
            
            





            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" style={{border: '1px solid black'}} />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" style={{border: '1px solid black'}}/>

            
            
            <Link to="/browseForm">  
            <button type="submit" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('browseForm')}>Sign up</button>
            </Link>  
            <Link to="/">
            <button className="link-btn"  onClick={() => props.onFormSwitch('login') }>Already have an account? Log in</button>
            </Link>
        </form>
        <div className="Imagine2">
          {/**/} <img src={img1} alt="" style={{ width: '870px', height: '700px' }}/> 
        </div>
    </div>
    )
}