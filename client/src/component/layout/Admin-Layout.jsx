import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { FaUserAlt, FaRegListAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { useAuth } from '../../store/auth';
function AdminLayout() {
  const {user,isLoading} = useAuth()
  console.log(user)

  if(isLoading){
    return <h1>Loading.....</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />
  }
  return (
    <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li> <NavLink to='/admin/users' ><FaUserAlt /> users</NavLink> </li>
                    <li><NavLink to='/admin/contacts' ><GrContact /> contact</NavLink></li>
                    <li><NavLink to='/admin/services' ><FaRegListAlt /> services</NavLink></li>
                    <li><NavLink to='/' ><IoMdHome /> home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default AdminLayout