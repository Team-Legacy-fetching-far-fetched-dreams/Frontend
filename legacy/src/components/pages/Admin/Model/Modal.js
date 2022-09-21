import React, {useState,} from 'react'
import './Modal.css'
import registerIm from '../../../../imgs/415.jpg'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Logo from '../../../../imgs/logo2.png'



const Modal = () => {

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

        <h1 className='cry'>Diagnose</h1>
       
        <form>
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

export default Modal