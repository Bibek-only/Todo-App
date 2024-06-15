import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='flex items-center justify-around  w-full mt-14 fixed  z-10 '>
      <div className="left">
        <div className="logo text-2xl font-bold">Only<span className='text-blue-500'>Do...</span></div>
      </div>
      <div className="right flex gap-6 text-2xl font-bold">
        <Link to="/login" >Login</Link>
        <Link to="/register" >Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
