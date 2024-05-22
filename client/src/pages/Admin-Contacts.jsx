import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import {toast} from 'react-toastify'

function AdminContacts() {

  const [contactData,setContactData] = useState([])

  const {AuthorizationToken,WebClassUrl}= useAuth()

  const getContactData = async ()=>{
    try {
      const response = await fetch(`${WebClassUrl}/api/admin/contacts`,{
        method:"GET",
        headers:{
          Authorization:AuthorizationToken
        }
      })
      const data = await response.json
      if (response.ok) {
        // console.log(response)
        setContactData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deletecontactsbyId = async (id)=>{
    try {
      const response= await fetch(`${WebClassUrl}/api/admin/contacts/delete/${id}`,{
        method:'DELETE',
        headers:{
          Authorization:AuthorizationToken
        }
      })
      if (response.ok) {
        getContactData()
        toast.success("delete Sucessfuly")

      }
      else{
        toast.error("delete fail")

      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getContactData()
  },[])
  return (
    <>

    <section className='admin-contact-section'>
      <h1>admin contact data</h1>
      <div className="container admin-users">


      {
        Array.from(contactData).map((curData,index)=>{
          return (
            <div key={index}>
              <p>{curData.username}</p>
              <p>{curData.email}</p>
              <p>{curData.message}</p>
              <button className="btn" onClick={()=>deletecontactsbyId(curData._id)}>delete</button>
            </div>
          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default AdminContacts