import React, { useState, useEffect } from 'react'
import './Mefu.css'
import nine from '../../../../imgs/hellonurse.jpg'
import Logo from '../../../../imgs/logo2.png'
// import welcomes from '../../../../imgs/loginPic.png' 
import Nip from '../../../../imgs/nipp.png'
import {Link, useParams} from 'react-router-dom'

import registerImg from '../../../../imgs/415.jpg'

const Mefu = () => {
  const initialValues = {symptoms: "", diagnosis: "", prescription:""};
  const [formValues,setFormValues] = useState( initialValues);
  const [data,setData] = useState()
  const [isvitalAvail, setIsVitAvail] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoadingV, setIsLoadingV] = useState(false);
  const [isLoadingD, setIsLoadingD] = useState(false);
  const [isDone, setIsDone] =  useState(false);
  const { id } = useParams()


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const sendDiagnosis = (e) =>{
    e.preventDefault();
    setIsSubmit(true);
    console.log(formValues)

    if (isSubmit && id){
      fetch(`patients/diagnosis/${id}`)
      setIsLoadingD(true)
      .then(res=>res.json())
      .then(data=>{
        setIsLoadingD(false)
        console.log(data)
      })
    }
  }
  useEffect(()=>{
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }, body:JSON.stringify(formValues)
  }
    if (id){
    fetch(`patients/vital/${id}`, requestOptions)
    setIsLoadingV(true)
    .then(res=>{
      if (res.status==200){
        setIsVitAvail(true)
        res.json()
      }
    })
    .then(data=>{
      setIsLoadingV(false)
      console.log(data)
      setData(data)
    })
  }
    },[])

  return (
   
    <div className='dss-contents'>
    <div className='hij'>
    <h1 className='cry'>Vitals</h1>
    {(data && isvitalAvail)?<div className='left-sides'>
    
    <ul className='op'>
  <li className='opp'>ID: {data.patient_id}</li>
  <li className='opp'>Temperature: {data.temperature}F</li>
  <li className='opp'>Height: {data.height}cm</li>
  <li className='opp'>Weight:{data.weight}kg</li>
  <li className='opp'>BP: {data.bloodpressure_mm}/{data.bloodpressure_Hg} mmHg</li>
  <li className='opp'>Keeper ID: {data.keeper_id}</li>
  <li className='opp'>Date Recorded: {data.date}</li>
</ul>
    </div>:<div>No available vitals</div>}
     
    </div>
    <div className='right-sides'>
    <div className='body-rights'>
      <div className='containerser'>

        <h1 className='cry'>DIAGNOSE</h1>
       
        <form onSubmit={sendDiagnosis}>
         <div className='inner-group'>
          <h5 className='hac'>SYMPTOMS</h5>
         <textarea type='text' className='mess tinputs' name='symptoms' onChange={handleChange} value={formValues.symptoms}/>
          </div>
       
          <div className='inner-group'>
          <h5 className='hac'>DIAGNOSIS</h5>
          <textarea className='mess tinputs' type='text' name='diagnosis' onChange={handleChange} value={formValues.diagnosis}/>
          </div>
    
          <div className='inner-group'>
          <h5 className='hac'>PRESCRIPTION</h5>
          <textarea className='mess tinputs'  type='text' name='prescription' onChange={handleChange} value={formValues.prescription}/>
          </div>
        
         

         
         <input type='submit' id='sbtn' className='subway' value='Submit' />

         
         </form>
      </div>
      {isLoadingD &&<div>...LOADIND...</div>}
    </div>
    </div>
 

  

     </div>
  )
}

export default Mefu   