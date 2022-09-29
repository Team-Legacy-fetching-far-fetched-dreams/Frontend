import React, { Component, useEffect, useState} from 'react'
import './DPatient.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'
import { logout } from '../../../auth'

const DPatient = () => {
    const  [state, setState] = useState()
    const [isLoading, setLoading]  = useState()

      // const [searchObj, setSearchObj] = useState(initialSearch)
      const searchObj ={
        data:"",
        column_name: "surname"
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

  useEffect(() =>{
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
  .then(res => {
    if(res.status===200){
      setLoading(true)
      return res.json()
    }
    else if (res.status === 401){
      logout(token)
    }
    res.json()
  })
  .then((resJson)=>{
      setState(resJson)
      console.log(resJson)
      setLoading(false)
  })

 },[])

    
  return (state?
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
          {!isLoading ? <ListOfRegPatients data={state}/>:<div>loading</div>}
      </div>
        </div>
        </div>
        <div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>:<div>...LOADING...</div>

    
  );
}


export default DPatient