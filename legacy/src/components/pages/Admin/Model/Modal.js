import React, {useState, useEffect} from 'react'
// import './Modal.css'
import registerIm from '../../../../imgs/415.jpg'
import Button from 'react-bootstrap/Button';
import {Link, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Logo from '../../../../imgs/logo2.png'



const Modal = (data={


  

  patient_id:0,
  temperature:0,
  height:0,
  weight:0,
  bloodpressure_mm:0,
  bloodpressure_Hg:0,
  keeper_id:0,
  date:"0000-00-00"


}) => {


  const { id } = useParams()
  const [datum, setData] = useState()
  useEffect(()=>{
  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
  const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
}

  // fetch(`patients/vitals/${id}`, requestOptions)
  // .then(res=>res.json())
  // .then(data=>{
  //   console.log(data)
  //   setData(data)
  // })
  },[])

return (
    <div className='dss-contents'>
    <div className='left-sides'>
    <h1 className='cryy'>Vitals</h1>
    <ul className='op'>
  <li className='opp'>ID: {data.patient_id}</li>
  <li className='opp'>Temperature: {data.temperature}F</li>
  <li className='opp'>Height: {data.height}cm</li>
  <li className='opp'>Weight:{data.weight}kg</li>
  <li className='opp'>BP: {data.bloodpressure_mm}/{data.bloodpressure_Hg} mmHg</li>
  <li className='opp'>Keeper ID: {data.keeper_id}</li>
  <li className='opp'>Date Recorded: {data.date}</li>
</ul>
    </div>
    <div className='right-sides'>
    <div className='top-rights'>
   
   
   
    </div>
    <div className='body-rights'>
      <div className='containerer'>

        <h1 className='cry'>Diagnose</h1>
       
        <form>
         <div className='inner-group'>
          <h5 className='hac'>Syptoms</h5>
         <textarea type='text' className='mess' name='syp' ></textarea>
          </div>
       
          <div className='inner-group'>
          <h5 className='hac'>Diagnosis</h5>
          <textarea className='mess' type='text' name='dia'  />
          </div>
          
          <div className='inner-group'>
          <h5 className='hac'>Precriptions</h5>
          <textarea className='mess'  type='date'  name='pre' />
          </div>
        
        
         
         <input type='submit' id='sbtn' className='subway' />
         </form>
      </div>

    </div>
    </div>
  

  

     </div>

)

}

export default Modal