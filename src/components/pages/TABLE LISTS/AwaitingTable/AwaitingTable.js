import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import "./AwaitingTable.css"



const AwaitingTable = ({data}) => {

   const { id } = useParams()
const diagnose =() =>{

}
    useEffect(()=>{
        console.log(data)
        console.log("gkf")
    },[])
    
  return (data.length?

    <div className='N7-content'>
       <h1>List of Awaiting Patients</h1>
       
         <div className='ListOfAwaiting'>
      <table className="table7">

       
         <th>Patient_id</th>
         <th>Surname</th>
         <th>Other Names</th>
         <th>Gender</th>
         <th>Action</th>
      
        
         {data.map((Await,key) =>{

return(
 <tr>
 <td key={key}>
 {
    Await.person_id

 }
  
 </td>

 <td key={key}>
 {
    Await.surname

 }
  </td>

  <td key={key}>
 {
    Await.other_names

 }
  </td>
 <td key={key}>
    {
       Await.gender
    }

 </td>
 <td>
              <Link to = {`/Patient/Diagnosis/${Await.person_id}`}>
                <input className="p-1 m-2" type="submit" value="Diagnose"/>
             </Link>

             </td>
 
   </tr>
            )
         }
         )
      
      }
      </table> 
       
      </div>
    </div>:<div className='emlist'>List Empty</div>
  )
}

export default AwaitingTable
