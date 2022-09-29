import React, {useEffect, useState} from 'react'
import './ListOfSpecEmployee.css'
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

  








const ListOfSpecEmployee = ({data}) => {
 
   const location = useLocation()
   const [user,setUser] = useState()
   const [isAuth, setAuth] = useState(false)
   const navigate = useNavigate()
   const handleSubmit = () =>{
      if(user=='DOCTORS'){
         navigate("/DoctorSignUp",{
            state:{
               prevLocation : location.pathname
            }
         })
      }
      if (user=='NURSES'){
         navigate("/NurseSignUp")
      }
      if (user=='ADMINS'){
         navigate("/AdminSignUp")
      }
   }
   
   
 useEffect(
    ()=>{

      const DeleteUser = (e) =>{
         console.log(e)
         console.log(e)
      }
      
      console.log("ujgui")
       console.log(data)
      console.log(location.pathname.split("/")[location.pathname.split("/").length -1])
      let loc = location.pathname.split("/")[location.pathname.split("/").length -1]
      let access =  location.pathname.split("/")[1]
      console.log(loc)


      if (loc==="Doctor"){
         setUser("DOCTORS")
        
       }
      else if (loc === "Nurse"){
         setUser("NURSES")
         
      }
      else{
         setUser("ADMINS")
        
      }
      
      if (access==="AdminDashboard"){
         setAuth(true)
      }

       
 },[]
 );
  return (

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
   





 
  
   
    
    <div className='N5-content'>
           {<h1>LIST OF {user}</h1>}
           <div className='New1'>
         {location.state && <div>{location.state.message}</div>}
           
         {isAuth &&<Link to = "/Patient/Register"><Button className="btn btn-primary btn-sm" type="submit"  role="button"><span></span><span className="p-2" onclick={handleSubmit}>New Registration</span></Button> </Link> }
         </div>{data.length>0?
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
   {isAuth && <input type="submit" value = "DELETE" />}
 </td>
            


           </tr>
          
            )
         }
         )
      }
       </table> 
      
   
      </div>:<div>List Empty</div>}
   </div>




     

  )
}

export default ListOfSpecEmployee;
