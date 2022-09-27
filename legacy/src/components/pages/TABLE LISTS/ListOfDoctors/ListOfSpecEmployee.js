import React, {useEffect, useState} from 'react'
import './ListOfSpecEmployee.css'
import {Link,useLocation} from 'react-router-dom'

  


const DeleteUser = ({data}) => {

}

const ListOfSpecEmployee = ({data}, type) => {
 
   const location = useLocation()
   let user = "users"
   // const [user,setUser] = useState()
   // const [loc,setLoc] = useState()
   
   
   
 useEffect(
    ()=>{
      
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
              <Link to = {"/UsersInfo"}>
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
   </div>:<div>List Empty</div>




     

  )
}

export default ListOfSpecEmployee;
