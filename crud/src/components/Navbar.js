import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   
      <nav class="navbar navbar-dark bg-dark" >
        <div clss="navbar">
      <ul class="navbar-nav ">
      <li class="nav-item active">
        <NavLink  className={({ isActive }) => isActive ? "active" : "non-active"}  to="/">Users <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink  className={({ isActive }) => isActive ? "active" : "non-active"} to="/Product">Products <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink  className={ ({ isActive }) => isActive ? "active" : "non-active"}  to="/Eg">Photos <span class="sr-only">(current)</span></NavLink>
      </li>
    </ul>
  </div>
      </nav>
      
    </>
  )
}

export default Navbar
