import React, {useEffect, useState, Component} from 'react'
import './Patient/ListOfRegPatients.css'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'



const DeleteUser = ({data}) => {

}
const DiagnosisList = ({data}) => {
   const location = useLocation()
   const navigate = useNavigate();
   const initialSearch = { column_name: "surname", data: ""}
   const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
   const [searchObj, setSearchObj] = useState(initialSearch)
   const [len, setLen] = useState(0)
   const [isAuth, setAuth] = useState()
   const [actData, setActData] = useState()
   const { id } = useParams()
// const [,setlistOfRegP] = useState([]);
const viewDetails = (id) =>{
   navigate(`/TrialPage/:${id}`)
}
const StartSearch = (e) => {
   const {name, value} = e.target;
   
   setSearchObj({...searchObj, [name]: value})
   setLen(searchObj.data.length)
   const requestOptions ={
      method : 'POST',
      headers :{
         'content_type' : "application/json",
         'Authorization' :`Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(searchObj)
   }
}

const handleSubmit = () =>{
//    navigate("/Patient/")
navigate(`https://legacy-healthcare-services.herokuapp.com/Patient/Diagnosis/${id}`)
}

const openProfile = (id) => {
//    navigate(`/Profile/Patient/${id}`)
}
 useEffect(()=>{
       console.log( data)
       console.log(location)
       console.log("iahoi")
       let access =  location.pathname.split("/")[1]
         

       if (access === "DoctorDashboard" ){
            setAuth(true)
       }
       
 },[])
 
//  );
  return (
   //  <div className='N-g'>
    
    <div className='N2-content'>
         <h1>List of Patient Diagnosis</h1>
         <div className='New'>
         {location.state && <div>{location.state.message}</div>}
         {isAuth &&<Link to = {`/Patient/Diagnosis/${id}`}><Button className="btn btn-primary btn-sm" type="submit"  role="button"><span></span><span className="  p-2 " onclick={handleSubmit}>Record New Diagnosis</span></Button> </Link> }
         </div>{data.length>0?
         <div className='ListOfRegP'>
      <table className="table3">

       
          <th>Patient_id</th>
         <th>Symptoms</th>
         <th>Diagnosis</th>
         <th>Prescription</th>
         <th>Keper_id</th>
         <th>Date_recorded</th>
           {data.map((ListOf,key) =>{
  
  return(

   <tr>
   <td key={key}>
   {
      ListOf.patient_id
  
   }
    
   </td>
  
   <td key={key}>
   {
      ListOf.symptoms
  
   }
    </td>
  
    <td key={key}>
   {
      ListOf.diagnosis
  
   }
    </td>
   <td key={key}>
      {
         ListOf.prescription
      }
 </td>
 <td key={key}>
      {
         ListOf.keeper_id
      }
 </td>
 <td key={key}>
      {
         ListOf.date_recorded
      }
 </td>

 




 <td>
    {isAuth && <input  type="submit" value="delete" onClick={DeleteUser(ListOf.patient_id)}/>}
</td>
  
  
  
  
 </tr>
              )
           }
           
           )
         }
        
        </table> 
         
        
        </div>:<div>List Empty</div>}

  

  
  
  </div>
  
    )


 
 
      


}
 

export default DiagnosisList
