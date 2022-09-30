import React, { useState } from 'react'
import './AdDashNav.css'
import { UilSearch,UilEnglishToChinese, UilBell} from '@iconscout/react-unicons'
import Avatar from '../../../imgs/nipp.png'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// const initialSearch = { column_name: "surname", data: ""}
// const [searchObj, setSearchObj] = useState(initialSearch)

const AdDashNav = (data) => {
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    const location = useLocation()
    const [isSearch,setIsSearch] = useState(false)
    // const StartSearch = (e) => {
    //     const {name, value} = e.target;
        
    //     setSearchObj({...searchObj, [name]: value})
    //     // setLen(searchObj.data.length)
    //     const requestOptions ={
    //        method : 'POST',
    //        headers :{
    //           'content_type' : "application/json",
    //           'Authorization' :`Bearer ${JSON.parse(token)}`
    //        },
    //        body: JSON.stringify(searchObj)
    //     }

    //     if (location.pathname === "/AdminDashboard/Patient"){
    //         fetch("/patients/search", requestOptions)
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //         })
    //     }
    //  }
    
    useEffect(()=>{
        console.log(data)

        let loc = location.pathname

        if (loc === "/AdminDashboard/Patient" || loc === "/AdminDashboard/Doctor" || loc === "/AdminDashboard/Nurse")
        {
            setIsSearch(true)
        }
    },[])


  return (
    <div className='AdDashNav'> 
        <div className='wrapper'>
            <div className='search'>
                {isSearch && <div><input type='text' placeholder='Search...'  />
            < UilSearch/></div>}
            </div>
            <div className='items'>
                <div className='item'>
                    <UilEnglishToChinese/>
                 English
                </div>
                <div className='item'>
                    <UilBell/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <img src={Avatar} alt='' className='avatar'/>
                        {/* <span>{data.data.username}</span> */}
                </div>
            </div>

        </div>
    </div> 
  )
}

export default AdDashNav