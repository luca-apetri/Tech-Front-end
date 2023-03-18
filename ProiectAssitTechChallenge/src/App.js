import React, { useState } from "react";
import './App.css';
import { Login } from "./components/pages/Login/Login.jsx";
import { Register } from "./components/pages/register/Register.jsx";
import {  BrowseForm   } from "./components/pages/BrowseForm/BrowseForm.jsx";

import {  CreateEditForm  } from "./components/pages/CreateEditForm/CreateEditForm.jsx";


import img1 from './images/loginPage.png';


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FillForm } from "./components/pages/FillForm/FillForm";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/CreateEditForm" element={<CreateEditForm/>} />
        
          <Route path="/browseForm" element={<BrowseForm />} />
           <Route path="/fillForm" element={<FillForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
