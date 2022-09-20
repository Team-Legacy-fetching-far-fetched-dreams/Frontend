import React, {useEffect, useState} from 'react'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'

const datum = [
  {
    public_id:'1',
    username: "Essuman",
    other_names:'Godsaves',
    gender: "Male",
    surname: "kofi"
    },
    {
      public_id:'2',
      username: "Essuman",
      other_names:'Godsaves',
      gender: "Male",
      surname: "kofi"
      },
 
]



const ListOfSpecEmployee = ({public_id, username, other_names, gender}) => {
 
  const [listOfSpec,setlistOfSpec] = useState([]);

 useEffect(
    ()=>{
       console.log(datum)
       setlistOfSpec(datum)

       
 },[]
 );
  return (
    // <div className='d-m'>
    // <div className='d-g'>
    <div className='N-g'>
    <div className = "N-h">
        <img src={Logo} alt="" className = "N-logo"></img>  
    </div>
    <div className='N2-content'>
      <div className='ListOfSpec'>

         
     
         <h1>List of Specific Employee</h1>
      <table>

        
      <th>Public_id</th>
         <th>Username</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Surname</th>
         {listOfSpec.map((employ,key) =>{

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
             
            


           </tr>
            )
         }
         )
      }
        
       </table> 
      
      </div>
      </div>
   </div>




     

  )
}

export default ListOfSpecEmployee;
