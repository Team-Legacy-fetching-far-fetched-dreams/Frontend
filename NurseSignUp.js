import React from 'react'
import './NursePage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const NurseSignUp = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='N-content'>
            <h1>Nurse SignUp</h1> 
            <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
        <h1>
          Welcome Nurse, get started with Legacy today! Create your account by
          filling out the information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            id="surname"
            type="text"
            name="surname"
            className="form-inputs"
            placeholder="Enter your surname"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <p>{errors.surname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="name2" className="form-label">
            Other Names
          </label>
          <input
            id="name2"
            type="text"
            name="name2"
            className="form-inputs"
            placeholder="Enter your other names"
            value={values.name2}
            onChange={handleChange}
          />
          {errors.name2 && <p>{errors.name2}</p>}
        </div>
        <div className="form-inputs" action="/action_page.php">
          <label htmlFor="birthday" className="form-label">
            Date Of Birth
          </label>
          <input
            id="birthday"
            type="date"
            name="birthday"
            className="form-inputs"
            //value={values.date}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>

        <div className="form-inputs" action="/action_page.php">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="0598502203"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            className="form-inputs"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="form-inputs"
            placeholder="Enter your address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-inputs"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            id="gender"
            type="text"
            name="gender"
            className="form-inputs"
            placeholder="Male/Female/Undefined"
            value={values.gender}
            onChange={handleChange}
          />
          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
            

            <Link to ="/NurseLogin">
             <Button className='d-login' active>Submit</Button>
          </Link>
       </div>
    </div>
   </div>
  )
}

export default NurseSignUp