import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


function Register() {

  const [user,setUser]= useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  const navigate = useNavigate()

  const {storeTokenInLS} = useAuth()

  const handleinput = function (e) {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,[name]:value
    })
  }
  const handlesubmit = async function(e){
    e.preventDefault();
    // console.log(user)
  
  try {
    const response = await fetch(`http://localhost:4000/api/auth/register`,{method:"POST",headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user),
  })

  const res_data = await response.json()
  if (response.ok) {
    storeTokenInLS(res_data.token)
    // localStorage.setItem("token",res_data.token)
    setUser(
      {username:"",
    email:"",
    phone:"",
    password:""}
    )
    toast.success("Registration Succesful")

    navigate('/')
  } else{
    toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
  }
} catch (error) {
  console.log("register",error)
}
  }

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registraton-image">
              <img src="/images/register.png" alt="img" width="500" height="500" />
            </div>
            <div className="registration-form">
              <h1 className='main-heading mb3'>registration</h1>
              <br />
              <form onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name='username' placeholder='username' value={user.username} id='username' required autoComplete='off' onChange={handleinput} />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' placeholder='Email' id='email' value={user.email} required autoComplete='off' onChange={handleinput} />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" name='phone' placeholder='Phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleinput} />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="Password" name='password' placeholder='Password' value={user.password} id='password' required autoComplete='off' onChange={handleinput} />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register