import React from 'react'
import './DcWidget.css'
import {UilUserMd, UilUserNurse, UilStethoscopeAlt, UilAccessibleIconAlt} from '@iconscout/react-unicons'


const DcWidget = ({type}) => {


  let data =[ 
  {
    title : "PATIENT",
  icon: <UilAccessibleIconAlt className="icon"/>,
  link: 'See all Patients'
},
{
  title : "AWAITING PATIENTS",
icon: <UilAccessibleIconAlt className="icon"/>,
link: 'See awaiting patients'
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
          };
          break;
          case "awaiting patients" :
            data = {
              title : "AWAITING PATIENTS",
              icon:  <UilStethoscopeAlt className="icon"/>,
              link: 'See awaiting patients'
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

export default DcWidget