import React, {useEffect, useState, Component} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
 
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import Clock from '../Clock'
import {Link, useNavigate} from 'react-router-dom'
import rendrIfo from './renderInfo'
import { logout } from '../../../auth'
import DoctorLogin from './DoctorLogin'


class DoctorDashboard extends Component{

  // 
  constructor(props){
    super(props);

    this.state ={
      data:undefined,
      islogged:false,
      view:false
  }
}
  

  componentDidMount(){
    this.renderMyInfo()
  }

  renderMyInfo(){
    
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    // const navigate = useNavigate()
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      },
      
    }
  
  
    console.log(token)
  
    fetch('/user/users', requestOptions)
      .then(res => 
        {
        if (res.status===200)
        {
          this.setState({islogged: true})
          
          
        }
        else if (res.status == 401){
          logout(token)
          this.setState({islogged: false})
          // navigate('/DoctorLogin')

        }
        else if (res.status===402){

        }
        return res.json()
        })
      .then(data=>{
        console.log(data)
        this.setState({data: data})
        
      })
  }


render(){
  return (this.state.islogged===true?
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='D-d-g'>
    
    <DcSidebar/>
        <div className='Dashboardcontainer'>
        <DcDashNav/>
        <div className='widgets'>
        <Link to="/DoctorDashboard/Patient">
          <DcWidget type = "patient"/>
          </Link>
           <rendrIfo props = {this.setState(this.state.data)}/>
        </div>
        <div>
          <Clock />
          <div></div>
        </div>
        </div>
    </div> 
</motion.div>:<DoctorLogin/>
  )
}
}

export default DoctorDashboard