import React from 'react'
import {Link} from "react-router-dom"
const Welcome = () => {
  return (
    <div className='relative'>
      <img className='w-screen max-h-screen ' src="/home.jpg" alt="welcome img" />
      <div className="buttons absolute z-10 top-3/4 flex gap-4 h-40 w-full justify-center items-center text-2xl font-bold text-black">
        <Link to="/login" ><div className="Login bg-blue-600 px-4 py-2 rounded-full min-w-36 flex items-center justify-center hover:bg-blue-800 duration-500" >Log in</div></Link>
        <Link to="/register" ><div className="register bg-blue-600 px-4 py-2 rounded-full min-w-36 flex items-center justify-center hover:bg-blue-800 duration-500">Register</div></Link>
      </div>
    </div>
  )
}

export default Welcome
