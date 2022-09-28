import React from 'react'
import './DcDashNav.css'
import { UilSearch,UilEnglishToChinese, UilBell} from '@iconscout/react-unicons'
import Avatar from '../../../imgs/nipp.png'

const DcDashNav = () => {
  return (
    <div className='DcDashNav'> 
        <div className='wrapper'>
            <div className='search'>
                {/* <input type='text' placeholder='Search...' onChange ={props.setState(e.target.value)}/> */}
                <input type='text' placeholder='Search...'/>
            < UilSearch/>
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
                </div>
            </div>

        </div>
    </div> 
  )
}

export default DcDashNav