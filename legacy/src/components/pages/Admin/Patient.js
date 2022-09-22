import React from 'react'
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'

const Patient = () => {
  

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
    <div>Patient

    <ListOfSpecEmployee data={data}/>
    </div>
    // <div>

    // </div>
   
  )
}

export default Patient