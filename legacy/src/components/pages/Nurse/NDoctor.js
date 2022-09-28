import React, { Component}  from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Clock from '../Clock'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'



class NDoctor extends Component{
  constructor(props){
    super(props);

    this.state ={
      data:undefined,
      url:"",
      islogged:false
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

  fetch('/user/doctors', requestOptions)
    .then(res => res.json())
    .then((resJson)=>{
      this.setState({ data : resJson })
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
    <NSidebar setUrl={this.setState}/>
        <div className='Dashboardcontainer'>
        <NDashNav />
        <div className=''>
        {this.state.data ? <ListOfSpecEmployee data={this.state.data}/>:<div>loading</div>}
        </div>
        <div>
          <Clock />
        </div>
        </div>
    </div> 
</motion.div>
  )
}
}
export default NDoctor