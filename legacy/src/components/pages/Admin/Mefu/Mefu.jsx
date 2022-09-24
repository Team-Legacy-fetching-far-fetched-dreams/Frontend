import React from 'react'
import './Mefu.css'
import nine from '../../../../imgs/hellonurse.jpg'
import Logo from '../../../../imgs/logo2.png'
import welcomes from '../../../../imgs/loginPic.png' 
import Nip from '../../../../imgs/nipp.png'
import {Link} from 'react-router-dom'

const Mefu = ({open, onClose}) => {
    if(!open) return null
  return (
 
    <div className='dss-contents'>
    <div className='left-sides'>
    <h1 className='cryy'>Vitals</h1>
    <ul className='op'>
  <li className='opp'>ID: 1234445</li>
  <li className='opp'>Temperature: 10F</li>
  <li className='opp'>Height: 150cm</li>
  <li className='opp'>Weight: 60kg</li>
  <li className='opp'>BP: 100</li>
  <li className='opp'>Keeper ID: 2333333</li>
  <li className='opp'>Date Recorded: 12-12-1222</li>
</ul>
    </div>
    <div className='right-sides'>
    <div className='top-rights'>
   
   
   
    </div>
    <div className='body-rights'>
      <div className='containerer'>
      <p onClick={onClose} className='closeBtn'>X</p>
        <h1 className='cry'>Diagnose</h1>
       
        <form className='jkl'>
         <div className='inner-group'>
          <h5 className='hac'>Syptoms</h5>
         <textarea type='text' className='mess' name='syp' ></textarea>
          </div>
       
          <div className='inner-group'>
          <h5 className='hac'>Diagnosis</h5>
          <textarea className='mess' type='text' name='dia'  />
          </div>
          
          <div className='inner-group'>
          <h5 className='hac'>Precriptions</h5>
          <textarea className='mess'  type='date'  name='pre' />
          </div>
        
        
         
         <input type='submit' id='sbtn' className='subway' />
         </form>
      </div>

    </div>
    </div>
  

  

     </div>

   

  )
}

export default Mefu   