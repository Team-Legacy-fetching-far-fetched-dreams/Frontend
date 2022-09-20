import React, {useEffect, useState} from 'react'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'

const datum = [
  {
  patient_id:'1',
  temperature: "27F",
  height:'30m',
  blood_pressure: "271/93",
  weight: "54kg",
  keeper_id: "10",
  date_recorded: "20-09-22"
  },
  {
   patient_id:'2',
   temperature: "25F",
   height:'20m',
   blood_pressure: "271/93",
   weight: "54kg",
   keeper_id: "20",
   date_recorded: "20-09-22"
    }
   
]



const ListOfVitals = ({patient_id, temperature, height, blood_pressure,keeper_id,date_recorded}) => {
  
  const [listOfVi,setlistOfVi] = useState([]);

 useEffect(
    ()=>{
       console.log(datum)
       setlistOfVi(datum)

       
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
      <div className='ListOfVi'>

         
     
         <h1>List of Vitals</h1>
      <table>

        
         <th>Patient_id</th>
         <th>Temperature</th>
         <th>Weight</th>
         <th>Height</th>
         <th>Keeper_id</th>
         <th>Date_recorded</th>
         {listOfVi.map((vital,key) =>{

           return( 
            <tr>
            <td key={key}>
            {
               vital.patient_id

            }
             
            </td>

            <td key={key}>
            {
               vital.temperature

            }
             </td>

             <td key={key}>
            {
               vital.height

            }
             </td>
            <td key={key}>
               {
                  vital.blood_pressure
               }

            </td>

            <td key={key}>
               {
                  vital.keeper_id
               }

            </td>

            <td key={key}>
               {
                  vital.date_recorded
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

//   <div className='List_O_P'>
//   <table>
//     {/* <tr>
//         <th>Patient_Id</th>
//         <th>Surname</th>
//         <th>Other_names</th>
//         <th>Gender</th>
//     </tr> */}
    
//     <tr>
//         {/* <td>{patient_id}</td>
//         <td>{surname}</td>
//         <td>{other_names}</td>
//         <td>{gender}</td> */}
//         {/* <td><button>View</button></td>
//         <td><button>Delete</button></td> */}

//     </tr>
//   </table>
//  </div>
//     </div> 
// </div>



     

  )
}

export default ListOfVitals;
