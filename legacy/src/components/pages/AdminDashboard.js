import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import MainDash from './MainDash'

const AdminDashboard = () => {
  return (
    <div className='A-d-m'>
      <div className='A-d-g'>
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  )
}

export default AdminDashboard