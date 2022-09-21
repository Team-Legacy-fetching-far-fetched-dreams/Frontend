import React from 'react'
import {useLocation, useParams } from 'react-router-dom'
import ListOfAllEmployees from '../../TABLE LISTS/ListOfAllEmployees/ListOfAllEmployees'
import PatientForm from '../Doctor/PatientForm.js'


const TrialPage = () => {
    const {name} = useParams()

    
      

    const location = useLocation()
    return(
        <div>
            Hello {name} This is a tiral page

            <div>
            <ListOfAllEmployees/>
            <PatientForm/>
            </div>
        </div>
        
        )
} 

export default TrialPage