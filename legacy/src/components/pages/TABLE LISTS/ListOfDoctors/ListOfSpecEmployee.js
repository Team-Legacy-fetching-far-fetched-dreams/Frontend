import React, {useEffect, useState} from 'react'
import './ListOfSpecEmployee.css'
import {Link,useLocation} from 'react-router-dom'

  








const ListOfSpecEmployee = ({data}, type) => {
 
   const location = useLocation()
   let user = "users"
   // const [user,setUser] = useState()
   // const [loc,setLoc] = useState()
   
   
   
 useEffect(
    ()=>{
      const DeleteUser = (e) =>{
         console.log(e)
         console.log(e)
      }
      
       console.log(data)
      console.log(location.pathname.split("/")[location.pathname.split("/").length -1])
      let loc = location.pathname.split("/")[location.pathname.split("/").length -1]
      // setLoc(location.pathname)
      console.log(loc)


      if (loc==="Doctor"){
         user = "Doctor"
         console.log(user)
       }
      else if (loc === "Nurse"){
         user = "Nurse"
         console.log(user)
      }
      else{
         user = "Admin"
         console.log(user)
      }
       

       
 },[user]
 );
  return (data.length>0?

//   const [listOfSpec,setlistOfSpec] = useState([]);


   
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
   





 
  
    // <div className='d-m'>
    // <div className='d-g'>
   //  <div className='N-g'>
    
    <div className='N5-content'>
           {user==="users"?<div>...loading...</div>:<h1>List of {user}</h1>}

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
   <input className='p-1 m-2' type="submit" value="view" />
</Link>
   <input type="submit" value = "DELETE" />
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

export default ListOfSpecEmployee;
