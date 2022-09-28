import React, {useEffect, useState} from 'react'
import '../../TABLE LISTS/ListOfAllEmployees/ListOfAllEmployees.css'
// import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'

// const datum = [
//   {
//   public_id:'1',
//   username: "Essuman",
//   other_names:'Godsaves',
//   gender: "Male",
//   surname: "kofi",
//   qualification: "nurse"
//   },
//   {
//     public_id:'2',
//     username: "Ess",
//     other_names:'God',
//     gender: "Male",
//     surname: "Kobby",
//     qualification: "doctor"
//     },
    
//     {
//       public_id:'3',
//       username: "Ess",
//       other_names:'Godsaves',
//       gender: "Female",
//       surname: "Kobby",
//       qualification: "nurse"
//       } ,
//       {
//          public_id:'4',
//          username: "Ess",
//          other_names:'God',
//          gender: "Male",
//          surname: "Kofi",
//          qualification: "admin"
//          }
   
// ]



const ListOfAllEmployees = ({data}) => {
  

 useEffect(
    ()=>{
       console.log(data)
      //  setlistOfAllEmp(data)

       
 },[]
 );
  return (
    // <div className='d-m'>
    // <div className='d-g'>
   
   
    <div className='N6-content'>
      
          <h1>List of All Employees</h1>
         <div className='ListOfAllEmp'>
      <table className='table6'>

        
         <th>Public_id</th>
         <th>Username</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Qualification</th>
         <th>Surname</th>
         <th>Action </th>
         {data.map((ofAll,key) =>{

           return( 
            <tr>
            <td key={key}>
            {
               ofAll.public_id

            }
             
            </td>

            <td key={key}>
            {
               ofAll.username

            }
             </td>

             <td key={key}>
            {
               ofAll.other_names

            }
             </td>
            <td key={key}>
               {
                  ofAll.gender
               }

            </td>

            <td key={key}>
               {
                  ofAll.qualification
               }

            </td>

            <td key={key}>
               {
                  ofAll.surname
               }

            </td>

            <td>
<Link to = {"/AdminDashboard/Patient"}>
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




     

  )
}

export default ListOfAllEmployees;
