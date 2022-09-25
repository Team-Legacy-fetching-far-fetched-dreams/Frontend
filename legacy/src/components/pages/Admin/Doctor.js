import React, {Component} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
import AdminLogin from './AdminLogin'
import { logout } from '../../../auth'
import {Link} from 'react-router-dom'


import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'


class Doctor extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:undefined,
      islogged : false
    };

  }

  componentWillMount(){
    this.renderMydata();
  }

  renderMydata(){
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    const requestOptions = {
      method: "GET",
      header : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }
    
    fetch('/user/doctors', requestOptions)
    .then(res => {
      if(res.status===200){
        this.setState({islogged:true})
        return res.json()
      }
      else if (res.status === 401){
        logout(token)
        this.setState({islogged: false})
        // navigate('/DoctorLogin')

      }
      res.json()
    })
    .then((resJson)=>{
        this.setState({ data : resJson })
        console.log(resJson)
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
        <div className=''>
          <div className='createButton'>
            <Link to ={"/DoctorSignUp"}>
            <input type='submit' value = "Register New Doctor" />
            </Link>
            </div>
          {this.state.data ? <ListOfSpecEmployee data={this.state.data}/>:<div>loading</div>}
        </div>

        </div>
        <div>
          <Clock />
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>:<AdminLogin/>
  )
}
}

export default Doctor