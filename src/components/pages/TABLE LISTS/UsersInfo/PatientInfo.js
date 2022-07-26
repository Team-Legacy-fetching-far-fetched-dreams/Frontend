import React, { useState, useEffect } from 'react'
// import user_2 from '../UsersInfo/user_2.png'
import Button from 'react-bootstrap/esm/Button'
import { set } from 'react-hook-form'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Logo from '../../../../imgs/logo2.png'
import NewProfile from "../../../../imgs/NewProfile.png"
import "./PatientInfo.css"
import Cliploader from 'react-spinners/ClipLoader'
const PatientInfo = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data,setData] = useState()
    useEffect(()=>{
        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
        const requestOptions = {
            method: "GET",
            headers : {
              'content-type': 'application/json',
              'Authorization': `Bearer ${JSON.parse(token)}`
            }
        }

        fetch(`https://legacy-healthcare-services.herokuapp.com/patients/${id}`,requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    return  (data?
        <div className='d-m'>
            <div className='d-g'>
                <div className='d-h'>
                    <img src={Logo} alt="" className = "D-logo"></img> 
                </div>
                <img src={NewProfile} alt="" className='NewPro'></img> 
                <Button as="sub" className="btn" id = "dback-btn" onClick={() => navigate(-1)}>Back</Button>
    <div className="row align-content-center ">
    <div className="row">
    <div className="col-md-3 border-right">
     <div className="d-flex flex-column align-items-center text-center p-3 py-5"><span className="font-weight-bold"><h4>Patient : {data.patient_id}</h4></span><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="text-black-50">{data.email}</span><span> </span></div>
    </div>
    
    
    <div className="col-md-5 border-right">
        <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Patient Profile </h4>
              
                <div className="col-md-4">
        <div className="p-3 py-4">
            
        <Link to = {`/Patient/Vitals/${id}`}>
         <Button className="btn btn-primary  btn-sm " type="submit"  role="button"><span></span><span className="p-1 m-1">View Vitals</span></Button>
         </Link>
         <Link to = {`/Patient/Table/Diagnosis/${id}`}>
         <Button className="btn btn-primary  btn-sm mt-2" type="submit"  role="button" ><span></span><span className="p-7">View Diagnosis</span></Button>
         </Link>
         
            {/* <div className="col-md-12"><label className="labels">Experience in Designing</label></div> */}
            {/* <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div> */}
        </div>
    </div>

            </div>
            <div className="row mt-3">
                <div className="col-md-6 p-1">Name :</div>
                <div className="col-md-6 p-1"><label className="labels">{data.surname} {data.other_names}</label></div>

                <div className="col-md-6 p-1"><label className="labels">Birth date : </label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.date_of_birth}</label></div>


                <div className="col-md-6 p-1"><label className="labels">Address : </label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.address}</label></div>

                <div className="col-md-6 p-1"><label className="labels">Contact 1 :</label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.contact1}</label></div>

                <div className="col-md-6 p-1"><label className="labels">Contact 2 :</label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.contact2}</label></div>

                {/* <div className="col-md-6 p-1"><label className="labels">Username :</label></div>
                <div className="col-md-6 p-1"><label className="labels">hsnm778</label></div> */}

                <div className="col-md-6 p-1"><label className="labels">Date_Created :</label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.date_registered}</label></div>

                <div className="col-md-6 p-1"><label className="labels">Gender :</label></div>
                <div className="col-md-6 p-1"><label className="labels">{data.gender}</label></div>

                
            </div>
            
           
        </div>

    </div>
    
</div>

</div>

</div>
</div>:<div><Cliploader size={30} color="blue" className='spinner'/></div>

  )  
   
}

export default PatientInfo
       
