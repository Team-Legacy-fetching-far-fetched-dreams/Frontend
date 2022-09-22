import React, {useEffect} from 'react'
import './Vitals.css'

const Vitals = ({data}) => {

    useEffect(
        ()=>{
            console.log(data)
        },[]
    )
  return (
    <div className='N2-content'>
        
            <h1>List of Vitals</h1>
            <div className='VitalsC'>
            
            <table className='VitalT'>
            <th>Patient_id</th>
            <th>Temperature (C)</th>
            <th>Height (m)</th>
            <th>Blood Pressure (mmHg)</th>
            <th>Weight (kg)</th> 
            <th>Keeper_id</th>
            <th>Date_Recorded</th>
            {data.map((vit,key) =>{
                return(
                    <tr className='viTr'>
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
