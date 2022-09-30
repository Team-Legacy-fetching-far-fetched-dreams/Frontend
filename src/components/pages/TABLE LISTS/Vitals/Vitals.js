import React, {useEffect} from 'react'
import './Vitals.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const Vitals = ({data}) => {

    const { id } = useParams()
    const navigate = useNavigate()
    const Print =() =>{
        console.log("knadosk")
        console.log(id)
        navigate(`/VitalsForm/${id}`)
    }
    
    useEffect(
        ()=>{
            console.log(data)
        },[]
    )
  return (
    <div className='N4-content'>
        
            <h1>List of Vitals</h1>
            <div className='New1'>
            <Link to =  {`/VitalsForm/${id}`}>
         <Button className="btn btn-primary btn-sm" type="submit"  role="button" onClick={Print}><span></span><span className=" p-2 ">Record Vitals</span></Button>
         </Link>
         </div>
            {data?<div className='VitalsC'>
    
           <table className='table4'>
            <th>Patient_id</th>
            <th>Temperature ({'\u00b0'}C)</th>
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
                                vit.bloodpressure_Hg
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
        </div>:<div>List is Empty</div>}
      
    </div>
  )
}

export default Vitals
