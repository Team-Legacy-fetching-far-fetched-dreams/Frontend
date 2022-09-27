import React, {useEffect, useState, Component} from 'react'
import './ListOfRegPatients.css'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'



const DeleteUser = ({data}) => {

}
const ListOfRegPatients = ({data}) => {
   const navigate = useNavigate();
   const initialSearch = { column_name: "surname", data: ""}
   const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
   const [searchObj, setSearchObj] = useState(initialSearch)
   const [len, setLen] = useState(0)
   const [actData, setActData] = useState()
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



const openProfile = (id) => {
   navigate(`/Profile/Patient/${id}`)
}
 useEffect(()=>{
       console.log( data)

       
 },[])
 
//  );
  return (data.length>0?
    
    <div className='N2-content'>
         <h1>List of Registered Patients</h1>
         <div className='New'>
         <Link to = {"/AdminDashboard/Patient"}>
         <Button className="btn btn-primary btn-sm" type="submit"  role="button"><span></span><span className="  p-2 ">New Registration</span></Button>
         </Link>
         </div>
         <div className='ListOfRegP'>
      <table className="table3">

       
          <th>Patient_id</th>
         <th>Surname</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Action</th>
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
      ListOf.surname
  
   }
    </td>
  
    <td key={key}>
   {
      ListOf.other_names
  
   }
    </td>
   <td key={key}>
      {
         ListOf.gender
      }
 </td>

 <td key={key}>
 {
    ListOf.surname

 }
  </td>

  <td key={key}>
 {
    ListOf.other_names

 }
  </td>
 <td key={key}>
    {
       ListOf.gender
    }

 </td>
 <td>
              <Link to =  {`/Profile/Patient/${ListOf.patient_id}`}>
                <input className="p-1 m-2" type="submit" value="view"/>
             </Link>
             <input  type="submit" value="delete" onClick={DeleteUser(ListOf.patient_id)}/>

             </td>
  
  
  
  
 </tr>
              )
           }
           
           )
         }
        
        </table> 
         
        
        </div>

  

  
  
  </div>:<div>List Empty</div>
  
    )


 
 
      


}
 

export default ListOfRegPatients
