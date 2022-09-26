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







const ListOfSpecEmployee = ({data}) => {
 
//   const [listOfSpec,setlistOfSpec] = useState([]);


   const DeleteUser = (e) =>{
      console.log(e)
      console.log(e)
      // e.preventDefault()
      // const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
   
      // const requestOptions ={
      //    method : 'DELETE',
      //    headers :{
      //       'content_type' : "application/json",
      //       'Authorization' :`Bearer ${JSON.parse(token)}`
      //    }
      // }
   
      // fetch(`/user/user/${id}`,requestOptions)
      //      .then(res=>res.json())
      //      .then(data=>{
      //          console.log(data)
      //      })
   }





 
  return (data.length>0?
    // <div className='d-m'>
    // <div className='d-g'>
   //  <div className='N-g'>
    
    <div className='N2-content'>
           <h1>List of Specific Employee</h1>

           <div className='ListOfSpec'>

           <table>

          
         <th>Public_id</th>
         <th>Username</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Surname</th>
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
               employ.other_name

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
<Link to = {`/Profile/Users/${employ.public_id}`}>
   <input type="submit" value="view" />
</Link>
   <input type="submit" value = "DELETE" onClick={DeleteUser(employ.public_id)}/>
 </td>
            


           </tr>
          
            )
         }
         )
      }
       </table> 
      
   
      </div>
   //</div>:<div>List Empty</div>




     

  )
}

export default ListOfSpecEmployee;
