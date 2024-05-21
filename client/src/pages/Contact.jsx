import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Contact() {

const [contact,setContact] = useState({
  username:"",
  email:"",
  message:""
})

const [userData,setUserData]= useState(true)

const {user} = useAuth()
if (userData && user) {
  setContact({
    username:user.username,
    email:user.email,
    message:"",
  })
  setUserData(false)
}

const handleinput = (e)=>{
  let name = e.target.name;
  let value = e.target.value

  setContact({
    ...contact,
    [name]:value
  })
}
const handlesubmit = async (e)=>{
  e.preventDefault()
  // console.log(contact)

  try {
    const response = await fetch('http://localhost:4000/api/form/contact',
      {method:"POST",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
    })
    if (response.ok) {
      useState({
        username:"",
        email:"",
        message:""
      })
      const data = await response.json()
      console.log(data)
      toast.success("message sent succesfully")
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className='main-heading'>
          Contact Us
        </h1>
      </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="img"
              width="400"
              height="500"
            />
          </div>

          <div className="section-form">
            <form onSubmit={handlesubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' required placeholder='username' value={contact.username} autoComplete="off" onChange={handleinput} />
              </div>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' required placeholder='Email'  value={contact.email} autoComplete="off" onChange={handleinput} />
              </div>
              <br />
              <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" name='message' id='message' required placeholder='message'  value={contact.message} onChange={handleinput} autoComplete="off" cols="30" rows="6" />
              </div>
              <br />
              <div className="btn">
                  <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact