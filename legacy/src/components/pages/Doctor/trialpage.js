import React from 'react'
import {useLocation, useParams } from 'react-router-dom'
import ListOfAllEmployees from '../../pages/TABLE LISTS/ListOfAllEmployees/ListOfAllEmployees'
import PatientForm from '../Doctor/PatientForm.js'


const TrialPage = () => {
    const {name} = useParams()


    return(
        <div>
            Hello {name} This is a tiral page
//Should display loading before data is set
            <div>

            </div>
        </div>
        
        )
} 

export default TrialPage