
import {BrowserRouter,Routes, Route} from "react-router-dom"

import './App.css'

// default export dosent nede in {curly braces} to import
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Navbar from "./component/Navbar"
import Error404 from "./pages/Error404"
import Footer from "./component/footer/Footer"
import AdminLayout from "./component/layout/Admin-Layout"
import Adminuser from "./pages/Admin-user"
import AdminContacts from "./pages/Admin-Contacts"
import AdminUpdate from "./pages/AdminUpdate"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Error404/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<Adminuser/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="users/:id/edit" element={<AdminUpdate/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
