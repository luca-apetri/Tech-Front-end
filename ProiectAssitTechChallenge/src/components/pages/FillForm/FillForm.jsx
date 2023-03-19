import './FillForm.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

export const FillForm = (props) => {

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [cnp, setCnp] = useState('');
    const [judet, setJudet] = useState('');
    const [localitate, setLocalitate] = useState('');
    const [strada, setStrada] = useState('');
    const [numar, setNumar] = useState('');
    const [bloc, setBloc] = useState('');
    const [scara, setScara] = useState('');
    const [etaj, setEtaj] = useState('');
    const [apartament, setApartament] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [solicit,setSolicit]=useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    return(
    <div className="fill-form">
   <h1 >FILL FORM</h1>
   <div className='cerere-de-inmatriculare'>
    <p ><h3 style={{marginRight:'5px'}}>Form:</h3>Cerere de inmatriculare</p> 
    </div>

     <form className='formular1' >
     <p style={{marginRight:'340px',fontSize:'20px',fontStyle:"italic"}}>Sectiunea 1:</p>
      <div>
        <label htmlFor="nume">Nume:</label>
        <input type="text" name="nume" />
      </div>
      <div>
        <label htmlFor="prenume">Prenume:</label>
        <input type="text" name="prenume" />
      </div>
      <div>
        <label htmlFor="cnp">CNP:</label>
        <input type="text" name="cnp" />
      </div>
      <div>
        <label htmlFor="judet">Judet:</label>
        <input type="text" name="judet" />
      </div>
      <div>
        <label htmlFor="localitate">Localitate:</label>
        <input type="text" name="localitate" />
      </div>
      <div>
        <label htmlFor="strada">Strada:</label>
        <input type="text" name="strada" />
      </div>
      <div>
        <label htmlFor="numar">Numar:</label>
        <input type="text" name="numar" />
      </div>
      <div>
        <label htmlFor="bloc">Bloc:</label>
        <input type="text" name="bloc" />
      </div>
      <div>
        <label htmlFor="scara">Scara:</label>
        <input type="text" name="scara" />
      </div>
      <div>
        <label htmlFor="etaj">Etaj:</label>
        <input type="text" name="etaj" />
      </div>
      <div>
        <label htmlFor="apartament">Apartament:</label>
        <input type="text" name="apartament" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="telefon">Telefon:</label>
        <input type="text" name="telefon" />
      </div>
      <div>
        <label style={{marginRight:'330px'}}>Solicit:</label>
        <div className='butoane-radio'>
          <label style={{width:'160px'}}><input type="radio" name="solicit" value="inmatriculare" />Inmatriculare</label>
          <label style={{width:'250px'}}><input type="radio" name="solicit" value="inmatriculare-temporara" />Inmatriculare temporara</label>
          <label style={{width:'400px'}}><input type="radio" name="solicit" value="transcriere" />Transcrierea transmiterii dreptului de proprietate</label>
          <label style={{width:'500px'}}><input type="radio" name="solicit" value="eliberare-duplicat" />  Eliberarea unui duplicat al certificatului de inmatriculare</label>
          <label style={{width:'500px'}}><input type="radio" name="solicit" value="eliberare-certificat-nou" />  Eliberarea unui nou certificat ca urmare a modificării datelor inscrise</label>
          <label style={{width:'160px'}}><input type="radio" name="solicit" value="radiere" />Radiere</label>        
        </div>
        <div>
          <button style={{marginBottom:'50px'}}>Scan Identity Card</button>
        </div>
      </div>

    </form>

     <form className='formular2'>
     <p style={{marginRight:'340px',fontSize:'20px',fontStyle:"italic",marginLeft:'40px'}}>Sectiunea 2:</p>
     <div>
        <label htmlFor="marca">Marca</label>
        <input type="marca" name="marca" />
      </div>
      <div>
        <label htmlFor="tip">Tip</label>
        <input type="tip" name="tip" />
      </div>
      <div>
        <label htmlFor="numar">Numar</label>
        <input type="numar" name="numar" />
      </div>
      <div>
        <label htmlFor="identificare">Identificare</label>
        <input type="identificare" name="identificare" />
      </div>
     </form>

























    
    
    
    
    </div>
    
    
    
    
    
    
    )
    











}