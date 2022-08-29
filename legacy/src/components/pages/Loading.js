import React from 'react'
import './Loading.css'
import 'react-loader-spinner/dist/loader/ThreeDots'
import { Circles } from  'react-loader-spinner'
import Logo from '../../imgs/logo2.png'

const Loading = () => {
  return (
    <div className = "head">
      <div>
        <img src={Logo} alt="" className = "logo"></img>
       </div>
       <div>
       <Circles color="var(--gray)" height={30} width={30}/>
       </div>
    </div>
  )
}

export default Loading