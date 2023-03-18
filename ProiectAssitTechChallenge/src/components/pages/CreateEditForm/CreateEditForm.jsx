import React, { useState,useRef } from "react";
import { Link } from "react-scroll";
import './CreateEditForm.css';
export const CreateEditForm = (props) => {


    return(
        
        <div className="Create-Edit-Forms">
            <h1>Create/Edit Form</h1>
            <h3>Please complete all the information bellow</h3>
            <img src={CreateEditForm.jpg} alt="" style={{ width: '870px', height: '700px' }}/> 
            
            <div className="Left">
                <label htmlFor="title">Title:</label>
                {/**/}<input type="text" placeholder="Title" id="title" name="title"style={{border: '1px solid black'}} />
                <div className="scroll-bg1" style={{ marginBottom: "90px" }}>
                    <div className="scroll-div1">
                        <div class="scroll-object1">

                        </div>
                    </div>
                </div>

                <button className="AddNew-DF" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('AddNew')}>Add new</button>
                <button className="Delete-DF" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('Delete')}>Add new</button>

                <div className="Selectie">
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>

                    <button className="AddNew-SL" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('AddNew')}>Add new</button>
                    <button className="Delete-SL" style={{border: '1px solid black',width:"300px"}} onClick={() => props.onFormSwitch('Delete')}>Add new</button>
                </div>
            </div>

            <div className="Right">
                <label htmlFor="Label">Label:</label>
                    <input type="text" placeholder="Label" id="label" name="label"style={{border: '1px solid black'}} />
                
                <label htmlFor="PLaceholder">Placeholder keyword:</label>
                    <input type="text" placeholder="Placeholder" id="placeHolder" name="placeHolder"style={{border: '1px solid black'}} />
                
                <label htmlFor="Mandatory">Mandatory:</label>
                    <input type="text" placeholder="Mandatory" id="mandatory" name="mandatory"style={{border: '1px solid black'}} />
                
                <label htmlFor="FieldType">Field Type:</label>
                    <input type="text" placeholder="Type" id="fieldType" name="fieldType"style={{border: '1px solid black'}} />

                <label htmlFor="Content">Content:</label>
                <textarea width="300px" ></textarea>
                <label htmlFor="Scan">Scan Document Type:</label>
                <select>
                        <option value="none">None</option>
                        <option value="otherOption">Other option</option>
                </select>
            </div>

            <div className="Bottom">
                <label>Data retention period:</label>
                <input type="number"></input>
            </div>

        </div>
    )
}