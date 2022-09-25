import React, {useEffect, useState} from 'react'
import './ListOfRegPatients.css'
// import Logo from '../../../imgs/logo2.png'
import {Link, useNavigate} from 'react-router-dom'




const ListOfRegPatients = ({data}) => {
  
//   const [listOfRegP,setlistOfRegP] = useState([]);

const navigate = useNavigate();

const openProfile = (id) => {
   navigate(`/Profile/Patient/${id}`)
}
 useEffect(()=>{
       console.log( data)
      //  setlistOfRegP( data)

       
 },[])
//  );
   return (
      <div className='N2-content'>
           
        <h1>List of Registered Patients</h1>
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
<Link to = {`/Profile/Patient/${ListOf.patient_id}`}>
   <input type="submit" value="view" />
</Link>
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
