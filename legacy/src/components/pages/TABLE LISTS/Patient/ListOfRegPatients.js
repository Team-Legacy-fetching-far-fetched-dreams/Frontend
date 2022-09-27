import React, {useEffect, useState} from 'react'
import './ListOfRegPatients.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const DeleteUser = ({data}) => {

}
const ListOfRegPatients = ({data}) => {
  

 useEffect(()=>{
       console.log( data)

       
 },[])
  return (
    
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
 <td>
              <Link to = {"/AdminDashboard/Patient"}>
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
      </div>
   

 





  )
}

export default ListOfRegPatients;
