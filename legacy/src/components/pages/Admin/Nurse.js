import React, {Component} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
import {motion} from 'framer-motion/dist/framer-motion'

class Nurse extends Component {

  constructor(props){
      super(props);

      this.state = {
        data:undefined
      };
    }
  

  componentWillMount(){
    this.renderMyData();
  }
  
  renderMyData(){
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }

    fetch('/user/nurses', requestOptions)
    .then(res => res.json())
    .then((resJson) =>{
      this.setState({data : resJson })
      console.log(resJson)
    });
  }

  render(){
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='N-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className=''>
        {this.state.data ? <ListOfSpecEmployee data={this.state.data}/>:<div>loading</div>}
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
  )
}
}

export default Nurse