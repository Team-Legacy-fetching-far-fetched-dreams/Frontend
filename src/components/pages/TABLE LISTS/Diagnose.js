import React, { useState, useEffect } from 'react'
 import "./Diagnose.css"
import Logo from '../../../imgs/logo2.png'
import { Button } from 'react-bootstrap'
import {Link, useParams, useNavigate} from 'react-router-dom'


const Diagnose = () => {
   
        const initialValues = {symptoms: "", diagnosis: "", prescription:""};
        const [formValues,setFormValues] = useState( initialValues);
        const [data,setData] = useState()
        const [isvitalAvail, setIsVitAvail] = useState(false)
        const [isSubmit, setIsSubmit] = useState(false);
        const [isLoadingV, setIsLoadingV] = useState(true);
        const [isLoadingD, setIsLoadingD] = useState(false);
        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
        const [vitals, setVitals] =  useState(false);
        const navigate = useNavigate()
        const { id } = useParams()
        const requestOptionsD = {
          method: "POST",
          headers : {
            'content-type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(token)}`
          }, body:JSON.stringify(formValues)
      }
      const requestOptionsV = {
        method: "GET",
        headers : {
          'content-type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      }
      
        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormValues({...formValues, [name]: value});
        }
      
        const sendDiagnosis = (e) =>{
          e.preventDefault();
          setIsSubmit(true);
          console.log(formValues)
          setIsLoadingD(true)
      
          if (isSubmit && id){
            fetch(`/patients/diagnosis/${id}`,requestOptionsD)
            .then(res=>{
              setIsLoadingD(true)
              return res.json()})
            .then(data=>{
              setIsLoadingD(false)
              console.log(data)
            })
          }
        }
        useEffect(()=>{
          if (id){
          fetch(`/patients/vital/${id}`, requestOptionsV)
          .then(res=>{
            setIsLoadingV(true)
            if (res.status==200){
              setIsVitAvail(true)
              return res.json()
            }
            else if(res.status===401){
              navigate('/DoctorLogin')
              console.log("gout")
            }
          })
          .then(data=>{
            setIsLoadingV(false)
            console.log(data)
            setData(data[data.length-1])
            console.log(data[data.length-1])
          })
        }
          },[])
  return (

    <div className='d-m'>
    
    <div className='d-g'>
         <div className='d-h'>
                    <img src={Logo} alt="" className = "D-logo"></img> 
                </div>
    <div className='row align-content-center'>
      <div className="row mx-auto">
       
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="ms-2">Vitals</h3>
                    
                </div>
                <div className="row mt-2 ">
                    <div className="col-md-6 align-items-center"><label className="labels">Patient Id</label><input type="text" className="form-control"   value="1" /></div>
                    <div className="col-md-6"><label className="labels">Temperature</label><input type="text" className="form-control" value="43"/></div>
                </div>
                <div className='row mt-3'>
                    <div className="col-md-6"><label className="labels">Height</label><input type="text" className="form-control" value="5.5"/></div>
                    <div className="col-md-6"><label className="labels">Weight</label><input type="text" className="form-control"  value="47"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Keeper Id</label><input type="text" className="form-control"  value="2"/></div>
                    <div className="col-md-6"><label className="labels">Date_Recorded</label><input type="text" className="form-control" value="12-02-22" /></div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12"><label className="labels">Blood Pressure</label><input type="text" className="form-control" value="123/23"/></div>
                </div>
            </div>
        
        </div>
            
                <div className='col-md-5 '>
                <div className='body-rights'>
                <div className='containert'>
                    <form className='form '>
                    <div className="form-group">
                     <label for=""><h3>DIAGNOSE</h3></label>
                     <textarea className="form-control" id="" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                     <label for=""><h3>SYMPTOMS</h3></label>
                     <textarea className="form-control" id="" rows="3"></textarea>
                        </div>

                      <div className="form-group">
                     <label for=""><h3>PRESCRIPTION</h3></label>
                     <textarea className="form-control" id="" rows="3"></textarea>
                        </div>    

                        
                        
                        <div className='button1'>
                        <Button className="btn btn-primary  btn-sm mt-3" type="submit"  role="button"><span></span><span className="p-1">Submit</span></Button>
                        </div>
                    </form>
                </div>
                </div>
                </div>
            </div>

        </div>
        
        </div>

    </div>

    
  )
}

export default Diagnose
