import React from 'react'
import Demo from './Demo';
import Verfication from './Verfication';
import LandingPage from './LandingPage/LandingPage';
import Home from './LandingPage/Home';
import AboutUs from './LandingPage/AboutUs';
import ContactUs from './LandingPage/ContactUs';

import Hello from '../../Hello';
import TrialPage from './Doctor/trialpage.js';
import PatientInfo from './TABLE LISTS/UsersInfo/PatientInfo';
import UsersInfo from './TABLE LISTS/UsersInfo/UsersInfo';
import PatientForm from './Doctor/PatientForm';
import AwaitingTable from './TABLE LISTS/AwaitingTable/AwaitingTable';
import VitPage from './TABLE LISTS/Vitals/VitPage';
import DiagnosisList from './TABLE LISTS/Diagnosis';
import DiagPage from './TABLE LISTS/DiagPage';

import Modal from './Admin/Model/Modal';
import Mefu from './Admin/Mefu/Mefu'
import DoctorPage from './Doctor/DoctorPage';
import NursePage from './Nurse/NursePage';
import AdminPage from './Admin/AdminPage';
import AdminSignUp from './Admin/AdminSignUp';
import AdminLogin from './Admin/AdminLogin';
import DoctorSignUp from './Doctor/DoctorSignUp'
import DoctorLogin from './Doctor/DoctorLogin';
import NurseSignUp from './Nurse/NurseSignUp'
import NurseLogin from './Nurse/NurseLogin'
import {Routes, Route, useLocation} from 'react-router-dom'

import InnerContent from './InnerContent'
import AdminDashboard from './Admin/AdminDashboard';
import Doctor from './Admin/Doctor';
import Nurse from './Admin/Nurse';
import VitalsForm from './TABLE LISTS/Vitals/VitalsForm';
import Patient from './Admin/Patient';

import DoctorDashboard from './Doctor/DoctorDashboard';
import DPatient from './Doctor/DPatient'
import AwaitingList from './Doctor/Awaitinglist'

import NurseDashboard from './Nurse/NurseDashboard';
import NDoctor from './Nurse/NDoctor';
import NPatient from './Nurse/NPatient';
// import VitalsForm from './Nurse/Vitals/VitalsForm';




import {AnimatePresence} from 'framer-motion/dist/framer-motion'

// import ListOfRegPatients from './ListOfRegPatients';



const AnimatedRoutes = () => {
    const location = useLocation(); 
  return (
<AnimatePresence initial={false}>
    <Routes location={location} key={location.pathname}>
             <Route path ="/" element={<Demo/>} />
             <Route path ="/Verfication" element={<Verfication/>} />
              <Route path ="/LandingPage" element={<LandingPage/>} />
              <Route path ="/Home" element={<Home/>} />
              <Route path ="/ContactUs" element={<ContactUs/>} />
              <Route path ="/AboutUs" element={<AboutUs/>} />
              <Route path ="/Patient/Diagnosis/:id" element={<Mefu/>} />
              <Route path = "/Patient/Diagnosis/List/:id" element={<DiagnosisList/>}/>
            

           
              <Route path ="/Hello" element={<Hello/>} />
              <Route path = "/TrialPage/:name" element={<TrialPage/>} />
              <Route path = "/Profile/Patient/:id" element={<PatientInfo/>}/>
              <Route path = "/Profile/Users/:id" element={<UsersInfo/>}/>
              <Route path = "/Patient/Register" element={<PatientForm/>}/>
              <Route path = "Patient/Vitals/:id" element = {<VitPage/>}/>
              <Route path = "Patient/Table/Diagnosis/:id" element = {<DiagPage/>}/>

              <Route path ="/DoctorPage" element={<DoctorPage/>} />
              <Route path ="/NursePage" element={<NursePage/>} />
              <Route path ="/VitalsForm/:id" element={<VitalsForm/>}/>
              {/* <Route path ="/ListOfRegPatients" element={<ListOfRegPatients/>} /> */}
              <Route path ="/AdminPage" element={<AdminPage/>} />
              <Route path ="/Modal" element={<Modal/>} />
              {/* <Route path ="/Mafu" element={<Mafu/>} /> */}
              <Route path ="/AwaitingTable" element={<AwaitingTable/>}/>

          
             

            
              <Route path ="/AdminSignUp" element={<AdminSignUp/>} />
              <Route path ="/AdminLogin" element={<AdminLogin/>} />
              <Route path ="/AdminSignUp" element={<AdminSignUp/>} />
              <Route path ="/DoctorSignUp" element={<DoctorSignUp/>} />
              <Route path ="/DoctorLogin" element={<DoctorLogin/>} />
              <Route path ="/NurseSignUp" element={<NurseSignUp/>} />
              <Route path ="/NurseLogin" element={<NurseLogin/>} />

              <Route path = '/AdminDashboard' element={<AdminDashboard/>} />
                <Route path = '/AdminDashboard/Doctor' element={<Doctor/>} />
                <Route path = '/AdminDashboard/Nurse' element={<Nurse/>} />
                <Route path = '/AdminDashboard/Patient' element={<Patient/>} />

              <Route path ="/AdminDashboard" element={<InnerContent/>} >
                <Route path = '/AdminDashboard/Patient' element={<AdminPage/>} />
                <Route path = '/AdminDashboard/Products' element={<NursePage/>} />
              </Route>


              <Route path ="/DoctorDashboard" element={<DoctorDashboard/>} />
              <Route path = '/DoctorDashboard/Patient' element={<DPatient/>} />
              <Route path = '/DoctorDashboard/AwaitingList' element={<AwaitingList/>} />
              

              <Route path ="/NurseDashboard" element={<NurseDashboard/>} />
              <Route path ="/NurseDashboard/Doctor" element={<NDoctor/>} />
              <Route path ="/NurseDashboard/Patient" element={<NPatient/>} />
              <Route path ="/PatientForm" element = {<PatientForm/>}/>
              {/* <Route path ="/NurseDashboard" element={<VitalsForm/>} /> */}

         </Routes>
     </AnimatePresence>
  )
}

export default AnimatedRoutes