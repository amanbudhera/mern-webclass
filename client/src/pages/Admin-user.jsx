import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'

function Adminuser() {
    const [users,setUsers]= useState([])
    const {AuthorizationToken,WebClassUrl} = useAuth()
    const getAllUsersData= async ()=>{
        try {
            const response = await fetch(`${WebClassUrl}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization: AuthorizationToken
                }
            })
            const data = await response.json()
            // console.log(response)
            // console.log("name"+data)
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
 
    const deleteUser = async (id)=>{
        try {
            
        
        const response = await fetch(`${WebClassUrl}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: AuthorizationToken
                }
            })
        // console.log(id)
        const data = await response.json()
        // console.log(`user after delete ${data}`)
        if (response.ok){
            getAllUsersData()
        }
    } catch (error) {
            console.log(error)
    }
    }

    useEffect(()=>{
        getAllUsersData()
    },[])
  return (
    <>
        <section className='admin-users-section'>
            <div className="container"><h1>Admin User Data</h1></div>
            <div className="container admin_users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser,index)=>{
                            return  <tr key={index}>
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                        <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

export default Adminuser