import React from 'react'
import './App.css'

import Demo from './components/pages/Demo';
import Verfication from './components/pages/Verfication';
import LandingPage from './components/pages/LandingPage';
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import DoctorPage from './components/pages/DoctorPage';
import NursePage from './components/pages/NursePage';
import AdminPage from './components/pages/AdminPage';
import AdminLogin from './components/pages/AdminLogin';
import DoctorSignUp from './components/pages/DoctorSignUp'
import DoctorLogin from './components/pages/DoctorLogin';
import NurseSignUp from './components/pages/NurseSignUp'
import NurseLogin from './components/pages/NurseLogin'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminDashboard from './components/pages/AdminDashboard';
import DoctorDashboard from './components/pages/DoctorDashboard';
import NurseDashboard from './components/pages/NurseDashboard';




 
function App() {
  return (
    <div className="App">

             <Routes>
             <Route path ="/" element={<Demo/>} />
             <Route path ="/Verfication" element={<Verfication/>} />
              <Route path ="/LandingPage" element={<LandingPage/>} />
              <Route path ="/ContactUs" element={<ContactUs/>} />
              <Route path ="/AboutUs" element={<AboutUs/>} />

              <Route path ="/DoctorPage" element={<DoctorPage/>} />
              <Route path ="/NursePage" element={<NursePage/>} />
              <Route path ="/AdminPage" element={<AdminPage/>} />
              
              <Route path ="/AdminLogin" element={<AdminLogin/>} />
              <Route path ="/DoctorSignUp" element={<DoctorSignUp/>} />
              <Route path ="/DoctorLogin" element={<DoctorLogin/>} />
              <Route path ="/NurseSignUp" element={<NurseSignUp/>} />
              <Route path ="/NurseLogin" element={<NurseLogin/>} />

              <Route path ="/AdminDashboard" element={<AdminDashboard/>} />
              <Route path ="/DoctorDashboard" element={<DoctorDashboard/>} />
              <Route path ="/NurseDashboard" element={<NurseDashboard/>} />
             </Routes>


    </div>
  );
}

export default App;
