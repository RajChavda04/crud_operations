import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   
      <nav class="navbar navbar-dark bg-dark" >
        <div clss="navbar">
      <ul class="navbar-nav ">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Users <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Product">Products <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Eg">Photos <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
      </nav>
      
    </>
  )
}

export default Navbar
