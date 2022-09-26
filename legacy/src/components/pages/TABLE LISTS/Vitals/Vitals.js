import React, {useEffect} from 'react'
import './Vitals.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const Vitals = ({data}) => {

    useEffect(
        ()=>{
            console.log(data)
        },[]
    )
  return (
    <div className='N4-content'>
        
            <h1>List of Vitals</h1>
            <div className='New1'>
            <Link to = {"/VitalsForm"}>
         <Button className="btn btn-primary btn-sm" type="submit"  role="button"><span></span><span className=" p-2 ">Record Vitals</span></Button>
         </Link>
         </div>
            <div className='VitalsC'>
    
           <table className='table4'>
            <th>Patient_id</th>
            <th>Temperature (F)</th>
            <th>Height (m)</th>
            <th>Blood Pressure (mmHg)</th>
            <th>Weight (kg)</th> 
            <th>Keeper_id</th>
            <th>Date_Recorded</th>
            {data.map((vit,key) =>{
                return(
                    <tr >
                        <td key={key}>
                            {
                                vit.patient_id
                            }
                        </td>

                        <td key={key}>
                            {
                                vit.temperature
                            }
                        </td>

                        <td key={key}>
                            {
                                vit.height
                            }
                        </td>

                        <td key={key}>
                            {
                                vit.bloodpressure_mm
                            } /
                            {
                                vit.bloodpressure_hg
                            }

                        </td>

                        <td key={key}>
                            {
                                vit.weight
                            }
                        </td>

                        <td key={key}>
                            {
                                vit.keeper_id
                            }
                        </td>

                        <td key={key}>
                            {
                                vit.date_recorded
                            }
                        </td>

                    </tr>
                )
            })}
            </table>
        </div>
      
    </div>
  )
}

export default Vitals
