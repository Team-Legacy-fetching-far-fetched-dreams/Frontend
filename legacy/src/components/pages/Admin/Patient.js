import React, { Component}  from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'
import {Link} from 'react-router-dom'

class Patient extends Component {
  constructor(props){
    super(props);

    this.state ={
      data:undefined
    };
}  
  componentWillMount(){
    this.renderMydata();
  }

  renderMydata(){
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }
  
  
     console.log(token)
  
    fetch('/patients', requestOptions)
      .then(res => res.json())
      .then((resJson)=>{
        this.setState({ data : resJson })
      });
  
   }
   render(){
  return (
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className=''>
        <div className='createButton'>
            <Link to ={"/Patient/Register"}>
            <input type='submit' value = "Register New Patient" />
            </Link>
            </div>
        {this.state.data ? <ListOfRegPatients data={this.state.data}/>:<div>loading</div>}
         <div>
        </div>
        </div>
        </div>
        <div>
          <Clock />
        </div>
       
        {/* <MainDash/> */}
      </div>
       
    </motion.div>
  )
}
}
export default Patient
