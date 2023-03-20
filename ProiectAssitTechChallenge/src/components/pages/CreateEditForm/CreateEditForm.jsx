import React, { useState,useRef } from "react";
import { Link } from "react-scroll";
import './CreateEditForm.css';
import CEF from '../../../images/CreateEditForm.jpg'
export const CreateEditForm = (props) => {

    return(
        <div  className = "my-body">

        
        <div className="Create-Edit-Forms">
            <div className="TextTitle">
                <h1 >Create/Edit Form</h1>

            
                <h3>Please complete all the information bellow.</h3>

            </div>
            <img src={CEF} alt="imgCEF" style={{ width: '435px', height: '350px' }}/> 
            
            <div className="Title">
            <label htmlFor="title">Title:</label>
                <input type="text"  id="title" name="title"style={{border: '1px solid black'}} />

            </div>
            <div className="Left">
                
                <div className="scroll-bg1" style={{ marginBottom: "90px" }}>
                    <div className="scroll-div1">
                        <div className="scroll-object1">

                        </div>
                    </div>
                </div>
                <div className="Butoane1">
                <button className="AddNew-DF" style={{border: '1px solid black'}} onClick={() => props.onFormSwitch('AddNew')}>Add New</button>
                <button className="Delete-DF" style={{border: '1px solid black'}} onClick={() => props.onFormSwitch('Delete')}>Delete</button>
                </div>
                 {/*
                <div className="Selectie">
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    </div>
                       */}
             <div className="scroll-bg2" style={{ marginBottom: "90px" }}>
                    <div className="scroll-div2">
                        <div class="scroll-object2">

                        </div>
                    </div>
                </div>
                <div className="Butoane2">
                    <button className="AddNew-SL" style={{border: '1px solid black'}} onClick={() => props.onFormSwitch('AddNew')}>Add New</button>
                    <button className="Delete-SL" style={{border: '1px solid black'}} onClick={() => props.onFormSwitch('Delete')}>Delete</button>
                </div>
            </div>
              <div className="right">
            <div className="Right">
                <label htmlFor="Label">Label:</label>
                    <input type="text"id="label" name="label"style={{border: '1px solid black'}} />
                    
                    </div>
                    <div className="Right">     
                <label htmlFor="Placeholder">Placeholder keyword:</label>
                    <input type="text"  id="placeHolder" name="placeHolder"style={{border: '1px solid black'}} />
                    </div>
                  
                    <div className="Right">
                <label htmlFor="FieldType">Field Type:</label>
                <select>
                        <option value="none"></option>
                        <option value="otherOption">Text</option>
                        <option value="otherOption">Number</option>
                        <option value="otherOption">Decimal</option>
                        <option value="otherOption">Date</option>
                        <option value="otherOption">Sigle choice</option>
                        <option value="otherOption">Multiple choice</option>
                </select></div>
                    <div className="Right1">
                <label htmlFor="Mandatory">Mandatory:</label>
                <input type="checkbox" id="Checkbox" name="Checkbox" />
                 </div>
                    

                    <div className="Right2">
                <label htmlFor="DocumentKeywords">Document keywords:</label>
                <textarea id="textare" ></textarea>
                 </div>
                    </div>
                    <div className="Right3">
                <label htmlFor="Content">Content:</label>
                <textarea id="textareContent" ></textarea>

                </div>
                    <div className="Right4">
                <label htmlFor="Scan">Scan Document Type:</label>
                <select>
                        <option value="none">None</option>
                        <option value="otherOption">Identity Card</option>
                        <option value="otherOption">Passport</option>
                        <option value="otherOption">Birth Certificate</option>
                        <option value="otherOption">Wehicle Identitycard </option>
                        <option value="otherOption">Any Document</option>
                </select>
            </div>

            <div className="Period">
                <label>Data retention period (days):</label>
                <input type="number" min={1} max={30} placeholder="1"></input>
            </div>
               
                <Link to="/browseForm">
                <button className="create" onClick={() => props.onFormSwitch('browseForm')}>Create</button>
                </Link>
            
            

        </div>
        </div>
    )
}