import React, {Component} from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Clock from '../Clock'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'


class NPatient extends Component{
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
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer'>
        <NDashNav/>
        <div className=''>
        {this.state.data ? <ListOfRegPatients data={this.state.data} />:<div>loading</div>}

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

export default NPatient