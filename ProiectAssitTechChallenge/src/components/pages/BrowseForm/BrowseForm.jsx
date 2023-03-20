import React, { useState,useRef } from "react";
///import { Link } from "react-scroll";
import './BrowseForm.css';
import img3 from '../../../images/BrowseForm.jpg';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
/*function MyComponent() {
    return (
      <div style={{ overflow: 'scroll', height: '200px' }}>
        <p>Content goes here...</p>
      </div>
    );
  }*/

 

export const BrowseForm = (props) => {






  
  //const[form,setForm]=useState('');
    const[typeform,setTypeform]=useState('');
    const [selectedTip, setSelectedTip] = useState('');
    var editCheck=false;
    var cale="/CreateEditForm";
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [id,setID]=useState('');
    const handle_typeform_Click = (tip) => {
    setTypeform(tip);
   console.log("Tip cerere",tip);
   setIsOptionSelected(true);
   setID(tip.id);
  };
   


  const [selectedName, setSelectedName] = useState(null);
  const [cereri, setCereri] = useState([
    { id: 1, tip:" 1. Cerere de inmatriculare" },
    { id: 2, tip: "2. Cerere de Altceva " },
    { id: 3, tip:"3. Cerere de Rezolvat " },
  ]);
  const handleNameClick = (name) => {
    setSelectedName(name);

  };
  const handleEditClick = ()=>{
    if(isOptionSelected==true){
      console.log('Reusit');
      
    }
   
  }
  const handleDeleteClick =()=>{
    if(isOptionSelected==true){
      setCereri(cereri.filter((cereri) => cereri.id !== id)); // remove the element with id 2
      setIsOptionSelected(false);
    } 
  }  

  return (
<div className="browse-body">
      <div className="browse-form">
      <div className="ImagineBrowseForm">
                <img src={img3} alt="" style={{ width: '500px', height: '370px' }}/>
            </div>
      <h1>BROWSE FORMS</h1>
     <div className="TextTipulSelectiei"  >
     <p>Select from a type:</p>
  </div>
  <div className="scroll-bg">
  <div className="scroll-div">
  <div className="scroll-object">

   <div className="itemiiDeSelectat">


    {cereri.map((tip)=>(
       
    <p key={tip.id} onClick={()=>handle_typeform_Click(tip)}  >
     
     {tip.tip}
 
    </p>  
   

  ))}
  
      
  
   </div>

  </div>


  </div>

  </div>
  <div className="butoaneFormular">
  <Link to="/CreateEditForm">
  <button className="submit"  >CREATE FORM</button>
    </Link>

     {isOptionSelected===true ?(

    <Link to='/CreateEditForm'>
    <button className="submit"   onClick={() => handleEditClick()}>EDIT FORM
   </button>
   </Link>):(
     <button className="submit"   onClick={() => handleEditClick()} disabled>
     EDIT FORM

    </button>
   
     )} 

    <button className="submit"   onClick={() => handleDeleteClick()}>
  DELETE FORM
    
    </button>

    <button className="submit"  >
   GENERATE PDF
    </button>

    <button className="submit"  >
   CREATE QR 
    </button>
  </div>


  <div className="scroll-bg1" >
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
 <button className="submit" style={{border: '1px solid black',marginRight:'100px'}} >
   VIEW SUBMISSIONS
    </button>

    <button className="submit" style={{border: '1px solid black'}}>
   SEARCH SUBMISSIONS 
    </button>



 </div>

 </div>  

      
 </div>


    

  )
}
