import React from 'react'
import './DoctorPage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {Col, Container, Row} from "react-bootstrap";
import loginIcon from '../../imgs/user..jpg'
import uiImg from '../../imgs/womanlogin.png'


const DoctorLogin = () => {
  return (
    <div className='n-m'>
    <div className='n-g'>
    <div className = "n-h">
     <img src={Logo} alt="" className = "N-logo"></img>  
  </div>
  <div className='n-content'>
  <h1>Doctor Login</h1> 

  <Link to ="/DoctorDashboard">
             <Button className='n-login' active>Login</Button>
          </Link>

 <>
            <Container className='mt-5'>
              <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                  <img className='icon-img' src='{loginIcon}' alt="icon"/>
                <Form>
      <Form.Group  controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary btn-block" type="submit">
       Login
      </Button>
      <div className="text-left mt-3">
        <a href="#"><small className="reset">Password Reset</small><a/> II
        <a href="#"><small classNamw="reset ml-2">Quick Recover</small><a/>
        <div/>
    </Form>
                </Col>

              <Col lg={8} md={6} sm={12}>
                 <img className='w-100' src={uiImg} alt=""/>
              </Col>
              </Row>
            </Container>



 </>

     </div>
    </div> 
</div>
</div>

  );
}

export default NurseLogin