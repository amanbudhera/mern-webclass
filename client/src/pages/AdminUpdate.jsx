import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import {toast} from 'react-toastify'

function AdminUpdate() {

    const [data,setData]= useState({
        username:"",
        email:"",
        phone:""
    })

    const params = useParams()
    const {AuthorizationToken,WebClassUrl} = useAuth()

    const getSingleUserdata = async (id)=>{
        try {
            
        const response = await fetch(`${WebClassUrl}/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization: AuthorizationToken
                }
            })
        // console.log(id)
        const data = await response.json()
        setData(data)
        // console.log(`user after delete ${data}`)
        // if (response.ok){
        //     getAllUsersData()
        // }
        } catch (error) {
                console.log(error)
        }
        }

    useEffect(() => {
      getSingleUserdata()
    }, [])
    
    const handleinput = (e)=>{
      let name = e.target.name
      let value = e.target.value

      setData({
        ...data,
        [name]:value
      })
    }


    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        const response = await fetch(`${WebClassUrl}/api/admin/users/update/${params.id}`,{
          method:"PATCH",
          headers:{
              "Content-Type":"application/json",
              Authorization: AuthorizationToken
            },
            body: JSON.stringify(data)
        }
      )
      // console.log(response)
      if (response.ok) {
        toast.success("Updated Sucessfuly")
        
      } else {
        toast.error("Not Updated")
        
      }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className='main-heading'>
          Update User
        </h1>
      </div>
        <div className="container grid grid-two-cols">
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' required placeholder='username' value={data.username} autoComplete="off" onChange={handleinput} />
              </div>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' required placeholder='Email'  value={data.email} autoComplete="off" onChange={handleinput} />
              </div>
              <br />
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" name='Phone' id='email' required placeholder='Phone Number'  value={data.phone} autoComplete="off" onChange={handleinput} />
              </div>
              <br />
              <div className="btn">
                  <button className="btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default AdminUpdate