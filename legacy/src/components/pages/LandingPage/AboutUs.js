import React from 'react'
import './AboutUs.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Logo from '../../../imgs/logo2.png'
import Back from '../../../imgs/Doc.png'

const AboutUs = () => {
return(
<motion.div className='Ab-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
<div className='Ab-g'>
  <div className = "d-h">
     <img src={Logo} alt="" className = "D-logo"></img>  
  </div>
  
  <h2 className='abtus'> About Us</h2>
    <div class="cnt" >
    <img src={Back} alt="" className='back-image1'></img>
    {/* <img src={Back} alt="" className='back-image2'></img> */}
    <h1 className='leg' >Legacy Health Care</h1>
    <h2 className='farf'>Fetching Far Fetched Dreams</h2>
    
      <h2 className='farfy'>
        Introduction
      </h2>
        
      <p className='p11'>
      The Legacy Health Care(LHC) is located in Kumasi, the capital of the Ashanti region.

The geographical location of the 300-bed hospital, the road network of the country and the unique commercial setting of Kumasi makes the hospital accessible to all remaining fifteen (15) regions of the country, especially those that shares boundaries with the Ashanti region.

The hospital currently has twelve (12) clinical directorates and two (2) non-clinical support services directorates.
      </p>
      <h2 className='farf'>
        Our History
      </h2>
      <p className='p11'>
      



The new hospital complex was completed by the contractors, Messrs. GEE Walter and named Legacy Health Care(LHC) 

The hospital attained a teaching hospital status for the clinical training of medical students following the establishment of the School of Medical Sciences (now School of Medicine and Dentistry, SMD) of the Kwame Nkrumah University of Science and Technology.

Legacy Health Care is currently a major centre for the training of postgraduate medical and dental practitioners in various specialties and the training of undergraduate personnel in Pharmacy, Nursing and many Allied Health Professions.

Through its Directorates and Units, many research works on health and health-related areas have been undertaken, many of which have been published in renowned and peer-reviewed national and international journals.
      </p>
      
      {/* <a href="#" class="btn">Get In Touch </a> */}
      
      
          
</div>
  </div>
</motion.div>
)
}
export default AboutUs
