import React from 'react'
import './Mefu.css'
import nine from '../../../../imgs/hellonurse.jpg'
import Logo from '../../../../imgs/logo2.png'
import welcomes from '../../../../imgs/loginPic.png' 
import Nip from '../../../../imgs/nipp.png'

import registerImg from '../../../../imgs/415.jpg'

const Mefu = () => {
  
  return (
   
    <div className='dss-contents'>
    <div className='hij'>
     
    </div>
    <div className='right-sides'>
    <div className='body-rights'>
      <div className='containerser'>

        <h1 className='cry'>DIAGNOSE</h1>
       
        <form>
         <div className='inner-group'>
          <h5 className='hac'>SYMPTOMS</h5>
         <textarea type='text' className='mess tinputs' name='symp' ></textarea>
          </div>
       
          <div className='inner-group'>
          <h5 className='hac'>DIAGNOSIS</h5>
          <textarea className='mess tinputs' type='text' name='dia'   />
          </div>
    
          <div className='inner-group'>
          <h5 className='hac'>PRESCRIPTION</h5>
          <textarea className='mess tinputs'  type='text' name='pres'  />
          </div>
        
         

         
         <input type='submit' id='sbtn' className='subway' value='Submit' />
         </form>
      </div>

    </div>
    </div>
 

  

     </div>
  )
}

export default Mefu   