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
    { id: 1, tip:"Cerere de inmatriculare" },
    { id: 2, tip:"Cerere de nu stiu" },
    { id: 3, tip:"Cerere de ceva" },
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

      <h3>BROWSE FORMS</h3>

  <p1 style={{ marginRight:'975px'}}>Select from a type</p1>
  <div className="scroll-bg">
  <div className="scroll-div">
  <div className="scroll-object">
  <div className="itemiiDeSelectat">
  

    {cereri.map((tip)=>(
       
    <p key={tip.id} onClick={()=>handle_typeform_Click(tip)}  style={{marginRight:"1200px"}}>
  
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

  <div className="scroll-bg1" style={{marginBottom:"1000px"}}>
  <div className="scroll-div1">
  <div class="scroll-object1">
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
    <p>MERGE</p>
  </div>
  </div>
  </div>
 <div className="butoaneSubmissions">
 <button type="submit" style={{border: '1px solid black',width:'200px',marginBottom:'100px'}} >
   VIEW SUBMISSIONS
    </button>

    <button type="submit" style={{border: '1px solid black',width:'200px',margin: '140px',marginBottom:'200px'}}>
   SEARCH SUBMISSIONS 
    </button>



 </div>

 </div>  

      
 


    

  );
};
