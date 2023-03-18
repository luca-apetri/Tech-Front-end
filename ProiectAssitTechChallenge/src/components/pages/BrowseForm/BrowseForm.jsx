import React, { useState,useRef } from "react";
import { Link } from "react-scroll";
import './BrowseForm.css';

/*function MyComponent() {
    return (
      <div style={{ overflow: 'scroll', height: '200px' }}>
        <p>Content goes here...</p>
      </div>
    );
  }*/

  const cereri = [
    { id: 1, tip:"1. Cerere de inmatriculare" },
    { id: 2, tip:"2. Cerere de inmatriculare " },
    { id: 3, tip:"3. Cerere de inmatriculare " },
];
export const BrowseForm = (props) => {

  //const[form,setForm]=useState('');
 const[typeform,setTypeform]=useState('');


 const handle_typeform_Click = (tip) => {
    setTypeform(tip);
  
  };



  const [selectedName, setSelectedName] = useState(null);

  const handleNameClick = (name) => {
    setSelectedName(name);
  };




  return (

  <div className="browse-form">

      <h3 style={{marginLeft:'100px'}}>BROWSE FORMS</h3>
<div className="propozitie"  style={{maxWidth: '210px',marginLeft:'264px'}}>
<p >Select from a type</p>
  </div>
  <div className="scroll-bg">
  <div className="scroll-div">
  <div className="scroll-object">

   <div className="itemiiDeSelectat">


    {cereri.map((tip)=>(
       
    <p key={tip.id} onClick={()=>handle_typeform_Click(tip)}  style={{marginRight:"100px"}}>
  
    {tip.tip}

    </p>  
   

  ))}
      
  
   </div>

  </div>


  </div>

  </div>
  <div className="butoaneFormular">
  <button type="submit"  style={{border: '1px solid black',width:'200px',height:"20px",marginBottom:'200px',margin: '30px'}}>
    CREATE FORM
    
    </button>
    <button type="submit"  style={{border: '1px solid black',width:'200px',height:"20px",marginBottom:'200px',margin: '30px'}}>
   EDIT FORM
    
    </button>

    <button type="submit"  style={{border: '1px solid black',width:'200px',height:"20px",marginBottom:'200px',margin: '30px'}}>
  DELETE FORM
    
    </button>

    <button type="submit"  style={{border: '1px solid black',width:'200px',height:"20px",marginBottom:'200px',margin: '30px'}}>
   GENERATE PDF
    </button>

    <button type="submit"   style={{border: '1px solid black',width:'200px',height:"20px",marginBottom:'200px',margin: '30px'}}>
   CREATE QR 
    </button>
  </div>


  <div className="scroll-bg1" style={{marginBottom:"90px"}}>
  <div className="scroll-div1">
  <div className="scroll-object1">
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '10px' }}> </th>
          <th style={{ border: '1px solid black', padding: '10px' }}> </th>
          <th style={{ border: '1px solid black', padding: '10px' }}> </th>
          <th style={{ border: '1px solid black', padding: '10px' }}> </th>
          <th style={{ border: '1px solid black', padding: '10px' }}> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid black', padding: '40px' }}> </td>
          <td style={{ border: '1px solid black', padding: '40px' }}> </td>
          <td style={{ border: '1px solid black', padding: '40px' }}> </td>
          <td style={{ border: '1px solid black', padding: '40px' }}> </td>
          <td style={{ border: '1px solid black', padding: '40px' }}> </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
          <td style={{ border: '1px solid black', padding: '32px' }}> </td>
        </tr>
      </tbody>
    </table>

  </div>
  </div>
  </div>
 <div className="butoaneSubmissions" style={{maxWidth: '800px'}}>
 <button type="submit" style={{border: '1px solid black',marginRight:'100px'}} >
   VIEW SUBMISSIONS
    </button>

    <button type="submit" style={{border: '1px solid black'}}>
   SEARCH SUBMISSIONS 
    </button>



 </div>

 </div>  

      
 


    

  )
}
