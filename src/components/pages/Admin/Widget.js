import React from 'react'
import './Widget.css'
import {UilUserMd, UilUserNurse, UilAccessibleIconAlt} from '@iconscout/react-unicons'


const Widget = ({type}) => {


  let data =[ {
    title: "DOCTOR",
    icon: <UilUserMd className="icon"/>,
    link: 'See all Doctors'
  },
  {
    title: "NURSE",
    icon: <UilUserNurse className="icon"/>,
    link: 'See all Nurses'
  },
  {
    title : "PATIENT",
  icon: <UilAccessibleIconAlt className="icon"/>,
  link: 'See all Patients'
}
  ];
  
  switch(type){
    case "doctor" :
      data = {
        title: "DOCTOR",
        icon: <UilUserMd className="icon" style={{color:"crimson" }}/>,
        link: "See all Doctors "
      };
      break;
      case "nurse" :
        data = {
          title: "NURSE",
          icon: <UilUserNurse className="icon" style={{color:"green"}}/>,
          link: "See all Nurses"
        };
        break;
        case "patient" :
          data = {
            title: "PATIENT",
            icon: <UilAccessibleIconAlt className="icon" style={{color:"var(--blue)" }}/>,
            link: "See all Patients"
          }
  }

  return (
    <div className='widget'>
        <div className='left'>
          <span className='title'>
            {data.title}
          </span>
          
          <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className=''>

          </div>
          {data.icon}
        </div>

        
    </div>
  ) 
}

export default Widget