import React from 'react'
import Demo from './Demo';
import Verfication from './Verfication';
import LandingPage from '../../components/pages/LandingPage/LandingPage';
import Home from '../../components/pages/LandingPage/Home';
import AboutUs from '../../components/pages/LandingPage/AboutUs';
import ContactUs from '../../components/pages/LandingPage/ContactUs';

import Hello from '../../Hello';
import TrialPage from '../../components/pages/Doctor/trialpage.js';
import PatientInfo from './TABLE LISTS/UsersInfo/PatientInfo';
import UsersInfo from './TABLE LISTS/UsersInfo/UsersInfo';
import PatientForm from './Doctor/PatientForm';
import AwaitingTable from './TABLE LISTS/AwaitingTable/AwaitingTable';
import VitPage from './TABLE LISTS/Vitals/VitPage';

import Modal from '../../components/pages/Admin/Model/Modal';
import Mefu from '../../components/pages/Admin/Mefu/Mefu'
import DoctorPage from '../../components/pages/Doctor/DoctorPage';
import NursePage from '../../components/pages/Nurse/NursePage';
import AdminPage from '../../components/pages/Admin/AdminPage';
import AdminSignUp from '../../components/pages/Admin/AdminSignUp';
import AdminLogin from '../../components/pages/Admin/AdminLogin';
import DoctorSignUp from '../../components/pages/Doctor/DoctorSignUp'
import DoctorLogin from '../../components/pages/Doctor/DoctorLogin';
import NurseSignUp from '../../components/pages/Nurse/NurseSignUp'
import NurseLogin from '../../components/pages/Nurse/NurseLogin'
import {Routes, Route, useLocation} from 'react-router-dom'

import InnerContent from './InnerContent'
import AdminDashboard from '../../components/pages/Admin/AdminDashboard';
import Doctor from '../../components/pages/Admin/Doctor';
import Nurse from '../../components/pages/Admin/Nurse';
import VitalsForm from './TABLE LISTS/Vitals/VitalsForm';
import Patient from '../../components/pages/Admin/Patient';

import DoctorDashboard from '../../components/pages/Doctor/DoctorDashboard';
import DPatient from './Doctor/DPatient'
import AwaitingList from './Doctor/Awaitinglist'

import NurseDashboard from '../../components/pages/Nurse/NurseDashboard';
import NDoctor from '../../components/pages/Nurse/NDoctor';
import NPatient from '../../components/pages/Nurse/NPatient';
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
            

           
              <Route path ="/Hello" element={<Hello/>} />
              <Route path = "/TrialPage/:name" element={<TrialPage/>} />
              <Route path = "/Profile/Patient/:id" element={<PatientInfo/>}/>
              <Route path = "/Profile/Users/:id" element={<UsersInfo/>}/>
              <Route path = "/Patient/Register" element={<PatientForm/>}/>
              <Route path = "Patient/Vitals/:id" element = {<VitPage/>}/>

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