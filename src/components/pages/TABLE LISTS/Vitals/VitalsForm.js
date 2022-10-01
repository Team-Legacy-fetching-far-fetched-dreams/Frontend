import React from 'react'
import './VitalsForm.css';
import {Button} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import VImg from '../../../../imgs/Vitalsformimg.png'
import Cliploader from 'react-spinners/ClipLoader'
import { useLocation }  from 'react-router-dom'


const VitalsForm = () => {
  const initialValues = {temperature: "", weight: "", height:"", bloodpressure_mm:"", bloodpressure_Hg:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setIsLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

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
        setIsLoading(true)
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0) {
        fetch(`https://legacy-healthcare-services.herokuapp.com/patients/vital/${id}`, requestOptions)
        .then(res=>{
            setIsLoading(true)
            return res.json()
        })
        .then(data=>{
            console.log(data)
            setIsLoading(false)
           
                navigate(`/Patient/Vitals/${id}`,{
                    state:{
                        message:`Vitals for patient id:${id} has been recorded succesfully`
                    }
                })
            
              
        })
    }
    }

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
        }
        
        if (!values.weight) {
            errors.weight = "weight is required!"; 
        
        }
        if (!values.height) {
            errors.height = "height is required!"; 
        }
        if (!values.bloodpressure_mm) {
            errors.bloodpressure_mm = "bloodpressure_mm is required!"; 
        }
        
        if (!values.bloodpressure_Hg) {
            errors.bloodpressure_Hg = "bloodpressure_hg is required!"; 
        
        }    
        return errors;
    }
  

   

  return (
    <div className="A-d-m">
        <div className='V-f-g'>
        <Button as="sub" className="btn" id = "back-btn" onClick={() => navigate(-1)} >Back</Button>
    <section>
        <div className="register">
            <div>
            
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
                    

                    



                   

                   
                    
                    
                    {isloading && <div><Cliploader size={30}/></div>}
                    
                    <button className='vbtn'>Submit</button>
                </form>

            </div>
            
        </div>
    </section>
    <img src={VImg} alt="0" className="vimg"></img>
    </div>
    </div>
  )
}
export default VitalsForm;