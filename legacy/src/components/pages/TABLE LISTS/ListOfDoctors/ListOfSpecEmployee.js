import React, {useEffect, useState} from 'react'
import './ListOfSpecEmployee.css'
// import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'

// const datum = [
//   {
//     public_id:'1',
//     username: "Manu",
//     other_names:'Godsaves',
//     gender: "Male",
//     surname: "kofi"
//     },
//     {
//       public_id:'2',
//       username: "Essuman",
//       other_names:'Godsaves',
//       gender: "Male",
//       surname: "kofi"
//       },
 
// ]

const DeleteUser = ({data}) => {

}

const ListOfSpecEmployee = ({data}) => {
 
//   const [listOfSpec,setlistOfSpec] = useState([]);

 useEffect(
    ()=>{
       console.log(data)
      //  setlistOfSpec(data)

       
 },[]
 );
  return (
    // <div className='d-m'>
    // <div className='d-g'>
   //  <div className='N-g'>
    
    <div className='N5-content'>
           <h1>List of Specific Employee</h1>

           <div className='ListOfSpec'>

           <table className='table5'>

          
         <th>Public_id</th>
         <th>Username</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Surname</th>
         <th colspan="2">Action</th>
         {data.map((employ,key) =>{

           return( 
            <tr>
            <td key={key}>
            {
               employ.public_id

            }
             
            </td>

            <td key={key}>
            {
               employ.username

            }
             </td>

             <td key={key}>
            {
               employ.other_names

            }
             </td>
            <td key={key}>
               {
                  employ.gender
               }

            </td>

          

            <td key={key}>
               {
                  employ.surname
               }


            </td>
            <td>
              <Link to = {"/AdminDashboard/Nurse"}>
                <input className="p-1 m-2" type="submit" value="view"/>
             </Link>
             <input  type="submit" value="delete" onClick={DeleteUser(employ.public_id)}/>

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

export default ListOfSpecEmployee;
