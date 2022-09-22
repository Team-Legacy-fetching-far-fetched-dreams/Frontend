import React from 'react'
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
const MainDash = () => {
  const data = [
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    }
  ]
  return (
    <div className=''>
      <h1>Dashboard</h1>
      <ListOfSpecEmployee data= {data}/>
    </div>
    
  )
}

export default MainDash