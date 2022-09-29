import React from 'react'
import './VitalsForm.css';

import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';



export const VitalsForm = () => {
  const initialValues = {temperature: "", weight: "", height:"", bloodpressure_mm:"", bloodpressure_Hg:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setIsLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')

  const requestOptions = {
    method: "POST",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }, 
    body : JSON.stringify(formValues)
}


    const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        fetch(`/patients/vital/${id}`, requestOptions)
        .then(res=>{
            setIsLoading(true)
            res.json()
        })
        .then(data=>{
            console.log(data)
            setIsLoading(false)
            navigate(-1,{
                state:{
                    message:"Vitals Recorded Succesfully"            
                }
              })
        })
    }
    };

    useEffect(() => {
        console.log(formErrors);
        console.log("lkahd")
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
        if (!values.bloodpressure_Hg) {
            errors.bloodpressure_Hg = "bloodpressure_hg is required!"; 
        }else if (values.bloodpressure_Hg < 5){
            errors.bloodpressure_Hg = "value for bloodpressure_hg has exceeded maximum"
        }    
        return errors;
    }
  

   

  return (
    <section>
        <div className="register">
            <div className="col-1">
            
                {/* <span>this form is under test!</span> */}

                <form onSubmit={handleSubmit} id='form' className='flex flex-col'>
                <h2 className="topic">Vitals Form</h2>
                    <h1 className="label">Temperature</h1> 
                    <input type="number" name="temperature" placeholder='temperature(celsius)' onChange={handleChange} value={ formValues.temperature} />
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

                    
                    <div >
                    <input type="number" name="bloodpressure_Hg" placeholder='bloodpressure_Hg' value={ formValues.bloodpressure_Hg} onChange={handleChange} className='eachbp'/>
                    <h3 className="tags">{formErrors.bloodpressure_Hg}</h3>
                    </div>

                    </div>
                    

                    



                   

                   
                    
                    
                    {isloading && <div>...|Loading..</div>}
                    
                    <button className='btn'>Submit</button>
                </form>

            </div>
            
        </div>
    </section>
  )
}
export default VitalsForm;