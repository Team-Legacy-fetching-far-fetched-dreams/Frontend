import React, {useEffect, useState, Component} from 'react'
import './ListOfRegPatients.css'
// import Logo from '../../../imgs/logo2.png'
import {Link, useNavigate} from 'react-router-dom'

// const data = [
//   {
//   patient_id:'1',
//   surname: "Essuman",
//   other_names:'Godsaves',
//   gender: "Male"
//   },
//   {
//      patient_id:'2',
//   surname: "Larbi",
//   other_names:'Samuel',
//   gender: "Male"
//   },
//   {
//      patient_id:'3',
//   surname: "Baissie",
//   other_names:'Francis',
//   gender: "Male"
//   },
//   {
//      patient_id:'4',
//   surname: "Akyeampong",
//   other_names:'Barden',
//   gender: "Male"
//   },
//   {patient_id:'5',
//    surname: "Marfo",
//   other_names:'Nana',
//   gender: "Male"},
   
//   {patient_id:'6',
//   surname: "Emma",
//  other_names:'Kusi',
//  gender: "Male"} ,

//  {patient_id:'7',
//   surname: "Jacob",
//  other_names:'Jaay',
//  gender: "Male"} ,

//  {patient_id:'8',
//   surname: "Serebour",
//  other_names:'Kelvin',
//  gender: "Male"} ,

//  {patient_id:'9',
//   surname: "Gberbie",
//  other_names:'Emma',
//  gender: "Male"} 
// ]
// data = {patient_id :"", surname:"",other_names:"",gender:""}


const ListOfRegPatients = ({data}) => {
   const navigate = useNavigate();
   const initialSearch = { column_name: "surname", data: ""}
   const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
   const [searchObj, setSearchObj] = useState(initialSearch)
   const [len, setLen] = useState(0)
   const [actData, setActData] = useState()
// const [,setlistOfRegP] = useState([]);
const viewDetails = (id) =>{
   navigate(`/TrialPage/:${id}`)
}
const StartSearch = (e) => {
   const {name, value} = e.target;
   
   setSearchObj({...searchObj, [name]: value})
   setLen(searchObj.data.length)
   const requestOptions ={
      method : 'POST',
      headers :{
         'content_type' : "application/json",
         'Authorization' :`Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(searchObj)
   }

   fetch("http://127.0.0.1:5000/patients/search", requestOptions)
          .then((res)=>res.json())
          .then(data=>{
            console.log(data)
            setActData(data)
          })
}

 

       
 
//  );
   return (
      // <div className='d-m'>
      // <div className='d-g'>
      <div className='N-g'>
      <div className = "N-h">
          {/* <img src={Logo} alt="" className = "N-logo"></img>   */}
      </div>
      <div className='N2-content'>
        <div className='ListOfRegP'>
  
           
       
           <h1>List of Registered Patients</h1>
           <div className='search'>
                <input type='text' placeholder='Search...' name="data" onChange ={StartSearch} value={searchObj.data}/>
            
             </div>
        <table>
  
          
           <th>Patient_id</th>
           <th>Surname</th>
           <th>Other Names</th>
           <th>Gender</th>
           {/* {len===0?setActData(data):setActData(searchObj.data)} */}
           {data.map((ListOf,key)=>{
  
  return( 
   <tr>
   <td key={key}>
   {
      ListOf.patient_id
  
   }
    
   </td>
  
   <td key={key}>
   {
      ListOf.surname
  
   }
    </td>
  
    <td key={key}>
   {
      ListOf.other_names
  
   }
    </td>
   <td key={key}>
      {
         ListOf.gender
      }
  
   </td>
   
   <td>
   <Link to = {`/TrialPage/${ListOf.patient_id}`}>
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
//   return (
//    //  <div className='N-g'>
    
//     <div className='N2-content'>
      
//          <h1>List of Registered Patients</h1>
//          <div className='ListOfRegP'>
//       <table>

       
//           <th>Patient_id</th>
//          <th>Surname</th>
//          <th>Other Names</th>
//          <th>Gender</th>
      
        
//          {data.map((ListOf,key) =>{

// return( 
//  <tr>
//  <td key={key}>
//  {
//     ListOf.patient_id

//  }
  
//  </td>

//  <td key={key}>
//  {
//     ListOf.surname

//  }
//   </td>

//   <td key={key}>
//  {
//     ListOf.other_names

//  }
//   </td>
//  <td key={key}>
//     {
//        ListOf.gender
//     }

//  </td>
//    </tr>
//             )
//          }
//          )
      
//       }
//       </table> 
       
//       </div>
//       </div>
//    // </div>

 





//   )
}





//  );
 

export default ListOfRegPatients;
