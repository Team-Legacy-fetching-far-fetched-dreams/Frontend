import React from 'react'
// import './VitalsForm.css';
import bgImg from "../../../../imgs/doc5.png";
import { useState, useEffect } from "react";



export const VitalsForm = () => {
  const initialValues = {temperature: "", weight: "", height:"", bloodpressure_mm:"", bloodpressure_hg:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
         if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
         }
    }, [formErrors])
    
    const validate = (values) => {
        const errors = {}
        if (!values.temperature) {
            errors.temperature = "temperature is required!"; 
        }else if (values.temperature < 5){
            errors.temperature = "value for temperature has exceeded maximum"
        }
        if (!values.weight) {
            errors.weight = "weight is required!"; 
        }else if (values.weight < 5){
            errors.weight = "value for weight has exceeded maximum"
        }
        if (!values.height) {
            errors.height = "height is required!"; 
        }else if (values.height < 5){
            errors.height = "value for height has exceeded maximum"
        }
        if (!values.bloodpressure_mm) {
            errors.bloodpressure_mm = "bloodpressure_mm is required!"; 
        }else if (values.bloodpressure_mm < 5){
            errors.bloodpressure_mm = "value for bloodpressure_mm has exceeded maximum"
        }
        if (!values.bloodpressure_hg) {
            errors.bloodpressure_hg = "bloodpressure_hg is required!"; 
        }else if (values.bloodpressure_hg < 5){
            errors.bloodpressure_hg = "value for bloodpressure_hg has exceeded maximum"
        }    
        return errors;
    }
  

   

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 className="head">Vitals Form</h2>
                <span>this form is under test!</span>

                <form onSubmit={handleSubmit} id='form' className='flex flex-col'>
                    <h1 className="label">Temperature</h1> 
                    <input type="number" name="temperature" placeholder='temperature(celsius)' value={ formValues.temperature} onChange={handleChange}/>
                    <h3 className="tags">{formErrors.temperature}</h3>
                    
                    <h1 className="label">Weight</h1> 
                    <input type="number" name="weight" placeholder='weight(kg)' value={ formValues.weight} onChange={handleChange}/>
                    <h3 className="tags">{formErrors.weight}</h3>

                    <h1 className="label">Height</h1>
                    <input type="number" name="height" placeholder='height(m)' value={ formValues.height} onChange={handleChange}/>
                    <h3 className="tags">{formErrors.height}</h3>

                    
                    <h1 className="label">Blood Pressure</h1>
                    <div className='bp'>
                    <div >
                    <input type="number" name="bloodpressure_mm" placeholder='bloodpressure_mm' value={ formValues.bloodpressure_mm} onChange={handleChange} className='eachbp'/>
                    <h3 className="tags">{formErrors.bloodpressure_mm}</h3>
                    </div>

                    <div id='slash'>/</div>
                    <div >
                    <input type="number" name="bloodpressure_hg" placeholder='bloodpressure_hg' value={ formValues.bloodpressure_hg} onChange={handleChange} className='eachbp'/>
                    <h3 className="tags">{formErrors.bloodpressure_hg}</h3>
                    </div>

                    </div>
                    

                    



                   

                   
                    
                    
                    
                    
                    <button className='btn'>Submit</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg}alt=""/>
            </div>
        </div>
    </section>
  )
}
export default VitalsForm;