import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import './Hello.css'
import {useForm} from 'react-hook-form'
import {login, useAuth} from './auth'
import {useNavigate} from 'react-router-dom'

const Hello = () => {

    // const {username, setUsername} = useState('');
    // const {password, setPassword} = useState('');
    
    const {register, watch, reset, handleSubmit} = useForm();
    const [logged] = useAuth()
    const navigate = useNavigate()

    const loginUser =(data)=>{
        
        // console.log(data)
        // console.log(data.username)
        // console.log(data.password)

        const body={
            username:data.username,
            password:data.password
        }

        const requestOptions={
            method : "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(body)
        }

        fetch('http://127.0.0.1:5000/user/login', requestOptions)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            login(data.access_token)
            

            {data.access_token?navigate('/LandingPage') :navigate('/Hello')}
        })
        

        reset()
    }

    // console.log(watch("username"));
    // console.log(watch("password"));

    return (
        <div className="container">
            <div className="form">                                                                                                                                                                                  
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        placeholder="Your username"
                        // value={username}
                        // name="username"
                        // onChange={(e)=>{setUsername(e.target.value)}}
                        {...register("username")}
                    />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your password"
                        // value={password}
                        // name="password"
                        // onChange={(e)=>{setPassword(e.target.value)}}
                        {...register("password")}
                    />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button as="sub" variant="primary" onClick ={handleSubmit(loginUser)}>Submit</Button>
                </Form.Group>
            </div>
        </div>
  )
 }


export default Hello