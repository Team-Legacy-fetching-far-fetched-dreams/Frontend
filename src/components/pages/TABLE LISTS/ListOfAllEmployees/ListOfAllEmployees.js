import React, {useEffect, useState} from 'react'
import '../../TABLE LISTS/ListOfAllEmployees/ListOfAllEmployees.css'
import {Link} from 'react-router-dom'





const ListOfAllEmployees = ({data}) => {
  

 useEffect(
    ()=>{
       console.log(data)

       
 },[]
 );
  return (
   
   
   
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
<Link to = {"/UsersInfo/"}>
   <input className="p-1 m-2" type="submit" value="view"/>
</Link>
<input  type="submit" value="delete" />
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
