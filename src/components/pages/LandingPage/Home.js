import React, { useRef, useState } from 'react'
import './LandingPage.css'
import Comp from '../../../imgs/comp.png'
import Back from '../../../imgs/Doc.png'
import Arrow from '../../../imgs/arrow.png'
import Admin from '../../../imgs/Admin1.png'
import Doc from '../../../imgs/doc5.png'
import Nurse from '../../../imgs/Nurse1.png'
// import Hospital from '../../../imgs/hospital2.png'
import Object1 from '../../../imgs/object1.png'
import Object2 from '../../../imgs/object2.png'
import Object3 from '../../../imgs/object3.png'
import Object4 from '../../../imgs/object4.png'
import Object5 from '../../../imgs/object5.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import { UilFacebookF , UilInstagram, UilLinkedin, UilYoutube, UilTwitter  } from '@iconscout/react-unicons'

import Mefu from '../Admin/Mefu/Mefu'

const Home = () => {
const hero = useRef(null);


const scrollToSection =(elementRef)=>{
  window.scrollTo({
    top : elementRef.current.offsetTop,
behavior: "smooth",
  });
};
const [openMefu, setOpenMefu] = useState(false)
  return (
    <div className='body'>
          <h1 className='main-text'>Take good care of <br/> your <span>health</span></h1>
          <img src={Comp} alt='Laptop' className="image"></img>
          <div className='back'>
            <img src={Back} alt="" className='back-image'></img>
          </div>
          <p className="body-p">
          Health is the most important asset in our life. There is a saying that “healthy mind stays in healthy body”. So we have to take care of both physical and mental health. 
            
          </p>
          <a href="#WAY">
          <Button variant="success" className='main-btn'>Get Started</Button>
          </a>
          <div className='scroll'>
            <p className='scroll-p'>Scroll Down to the Who are you section </p>
            <motion.img src={Arrow} alt='' className='arrow'
            initial=  'hidden' animate='visible' variants={{
              hidden:{
                scale: 0.8,
                opacity: 0
              },
              visible:{
                scale: 1,
                opacity:1,
                transition:{
                  duration: 1,
                  repeat: Infinity,
                }
              },
             }}
            
            ></motion.img>
          </div>
          <div className='p'>
         <p>The hospital has different tools and equipments such as stethoscope,microscope,injectors and so on. It also has a pharmacy centre which contains drugs such as Antibiotics, Metformin, Losatan, etc. </p>
          <img src={Object1} alt='' className='object'></img>
          <img src={Object2} alt='' className='object'></img>
          <img src={Object3} alt='' className='object'></img>
          <img src={Object4} alt='' className='object'></img>
          <img src={Object5} alt='' className='object'></img>
          </div>
          
          {/* <div className='hospital'>
            <img src={Hospital} alt="" className='hospital-image'></img>

          </div> */}




          <div className='Who-are-you' id="WAY" ref={hero}>

 
            <div>
              <h1>Who are you?</h1>
            </div>
            <div className="card-container">
                <Link to ="/AdminPage">
                        <motion.Card className='card' style={{ width: '6rem', height: '10rem', background: '#ffffff8a' }}
                        whileHover ={{scale: 1.02}}
                        >
                    <Card.Img className="card-img1" src={Admin} />
                    <Card.Body>
                        <Card.Title className='card-title' >Admin</Card.Title>
                    </Card.Body>
                    </motion.Card>
                </Link>

                <Link to ="/DoctorPage" >
                    <motion.Card className='card'style={{ width: '6rem', height: '10rem', background: '#ffffff8a' }}
                     whileHover ={{scale: 1.02}}
                    >
                    <Card.Img className="card-img2" src={Doc} />
                    <Card.Body>
                        <Card.Title className='card-title'>Doctor</Card.Title>
                    </Card.Body>
                    </motion.Card>
                </Link>

                <Link to ="/NursePage">
                    <motion.Card className='card'style={{ width: '6rem', height: '10rem', background: '#ffffff8a' }}
                    whileHover ={{scale: 1.02}}
                    >
                    <Card.Img className="card-img3" src={Nurse} />
                    <Card.Body>
                        <Card.Title className='card-title'>Nurse</Card.Title>
                    </Card.Body>
                    </motion.Card>
                </Link>
            </div>
            <div>
          <p>These sections comprise of the admin, doctor and nurse. Each of them has its own vital or major role to play according to how the images are being created or formed..</p>

            </div>
          </div>
          <div className='footer'>
            <div className='social'>
              <motion.a href = 'https://www.facebook.com/profile.php?id=100086105886864'
               whileHover={{scale:1.1, originX: 0, color: ''}}
               transition={{ type: "spring" , stiffness: 300}}
              >
              <UilFacebookF/>
              </motion.a>
              <motion.a href= 'https://instagram.com/lega.cyhealthcare?igshid=NDRkN2NkYzU='
               whileHover={{scale:1.1, originX: 0, color: ''}}
               transition={{ type: "spring" , stiffness: 300}}
              >
             <UilInstagram/>
              </motion.a>
             <motion.a href = 'https://twitter.com/legacyhealthca2/status/1572236819491868674?s=46&t=M5aKCeFLNwB21SFljCsdHw'
              whileHover={{scale:1.1, originX: 0, color: ''}}
              transition={{ type: "spring" , stiffness: 300}}
             >
             <UilTwitter />
             </motion.a>
              <motion.a href='https://youtube.com/channel/UC9HoilrWwiE8DxHoQOCmKjA'
               whileHover={{scale:1.1, originX: 0, color: ''}}
               transition={{ type: "spring" , stiffness: 300}}
              >
              <UilYoutube/>
              </motion.a> 
           </div>
           <div>
          
           </div>
          </div>
        </div>
  )
}

export default Home