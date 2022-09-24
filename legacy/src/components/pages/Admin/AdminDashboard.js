import React,{Component} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'
import AdminLogin from './AdminLogin'

class AdminDashboard extends Component{


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
        // navigate("/AdminLogin")

      }
      else if (res.status===402){
        this.setState({islogged: false})
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
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className='widgets'>
          <Link to="/AdminDashboard/Doctor">
          <Widget type ="doctor"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <Widget type="nurse"/>
          </Link>
          <Link to="/DoctorDashboard/Patient">
          <Widget type = "patient"/>
          </Link>
        </div>
        <div>
          <Clock />
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>:<AdminLogin/>
  )
}
}
export default AdminDashboard