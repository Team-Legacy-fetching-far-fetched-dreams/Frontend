import React, {useEffect, useState} from 'react'
import './ListOfRegPatients.css'
// import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'

// const data = [
//   {
//   patient_id:'1',
//   surname: "Essuman",
//   other_names:'Godsaves',
//   gender: "Male"
//   },
//   {
//      patient_id:'2',
//   surname: "Larbi",
//   other_names:'Samuel',
//   gender: "Male"
//   },
//   {
//      patient_id:'3',
//   surname: "Baissie",
//   other_names:'Francis',
//   gender: "Male"
//   },
//   {
//      patient_id:'4',
//   surname: "Akyeampong",
//   other_names:'Barden',
//   gender: "Male"
//   },
//   {patient_id:'5',
//    surname: "Marfo",
//   other_names:'Nana',
//   gender: "Male"},
   
//   {patient_id:'6',
//   surname: "Emma",
//  other_names:'Kusi',
//  gender: "Male"} ,

//  {patient_id:'7',
//   surname: "Jacob",
//  other_names:'Jaay',
//  gender: "Male"} ,

//  {patient_id:'8',
//   surname: "Serebour",
//  other_names:'Kelvin',
//  gender: "Male"} ,

//  {patient_id:'9',
//   surname: "Gberbie",
//  other_names:'Emma',
//  gender: "Male"} 
// ]
// data = {patient_id :"", surname:"",other_names:"",gender:""}


const ListOfRegPatients = ({data}) => {
  
//   const [listOfRegP,setlistOfRegP] = useState([]);

 useEffect(()=>{
       console.log( data)
      //  setlistOfRegP( data)

       
 },[])
//  );
  return (
   //  <div className='N-g'>
    
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
<Link to = {"/AdminDashboard/Doctor"}>
   <input type="submit" value="view"/>
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
   // </div>

 





  )
}

export default ListOfRegPatients;
