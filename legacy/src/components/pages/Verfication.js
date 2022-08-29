import React , {useState , useEffect} from 'react'
import './Verification.css'
import Logo from '../../imgs/logo2.png'
import Security from '../../imgs/security.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

 
  
const Verfication = () => {

  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
      if (isCPasswordDirty) {
          if (password === cPassword) {
              setShowErrorMessage(false);
              setCPasswordClass('form-control is-valid')
          } else {
              setShowErrorMessage(true)
              setCPasswordClass('form-control is-invalid')
          }
      }
  }, [cPassword])

  const handleCPassword = (e) => {
      setCPassword(e.target.value);
      setIsCPasswordDirty(true);
  }

  return (
    <div className = "ver">
    <div className="AppGlass">
      <div align="center" className = "container">
         <img src={Logo} alt="" className = "Vlogo"></img>
         <h1>Welcome!!</h1>
         <h2>Please Enter The Unique Code</h2>
           <form>
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Code</label>
                    <input type="password" className="form-control" id="password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Code</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
                        onChange={handleCPassword} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

            <Link to ="/LandingPage">
                <button type="submit" className="btn btn-primary" id = 'btn'>OK</button>
            </Link>
            </div>
            </form>
         <img align = "left" src= {Security} alt="" className ="Secure"></img>
      </div>
      </div>
    </div>
  )
}

export default Verfication