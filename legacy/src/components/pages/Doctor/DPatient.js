import React, { Component} from 'react'
import './DPatient.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'

class DPatient extends Component {
  constructor(props){
    super(props);

    this.state ={
      data:undefined,

      // const [searchObj, setSearchObj] = useState(initialSearch)
      searchObj:{
        data:"",
        column_name: "surname"
      }
    };
}  

  componentDidMount(){
    this.renderMydata();
    // this.renderSearchData();
  }

  // renderSearchData(){
  //   const initialSearch = {
  //     data:"",
  //     column_name: "surname"
  //   }
  //   const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    
  //   const requestOptions = {
  //     method: "POST",
  //     headers : {
  //       'content-type': 'application/json',
  //       'Authorization': `Bearer ${JSON.parse(token)}`
  //     },
  //     body:JSON.stringify(this.state.searchObj)
  //   }

  //   fetch('http://127.0.0.1:5000/patients/search', requestOptions)
  //   .then(res => res.json())
  //   .then((resJson)=>{
  //     // this.setState({ data : resJson })
  //     // console.log(data)
  //   });
  // }

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
      console.log(resJson)
    });

 }
  render(){
    
  return (
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
      <div className='D-d-g'>
        <DcSidebar />
        <div className='Dashboardcontainer'>
        {/* <DcDashNav func = {this.setState({data: this.state.searchObj.data})}/> */}
        <DcDashNav/>
        <div className=''>
        <div>
          {this.state.data ? <ListOfRegPatients data={this.state.data}/>:<div>loading</div>}
      </div>
        </div>
        </div>
        <div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>

    
  );
}
}

export default DPatient