import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <form className='flex flex-col  w-1/3 bg-[#16181c] gap-12 py-12 font-bold px-16  rounded-xl border-blue-500 border'>
        <div className="header flex flex-col gap-2">
          <h1 className='text-2xl text-blue-500'>Log in</h1>
          <p className=''>Login to your accout to use the application.</p>
          <Link to="/" className="home flex gap-1">
          <span class="material-symbols-outlined text-blue-500">home</span>
          <p class="hover:text-blue-500 duration-300" >Home</p>
          </Link>
        </div>
        <div className="userName flex flex-col gap-2">
          <h1 className='text-lg'>Name</h1>
          <input type="text" placeholder="User Name" className='text-lg rounded-full pl-2 py-2 border border-blue-500 outline-none bg-[#16181c]' />
        </div>
        <div className="password flex flex-col gap-2">
          <h1 className='text-lg'>Password</h1>
          <input type="text" placeholder="Password" className='text-lg rounded-full pl-2 py-2 outline-none border border-blue-500 bg-[#16181c]'/>
        </div>
        <div className="subbmit flex justify-around items-center">
          <p className='text-lg'>Don't have an account Register <Link to="/register" className='text-blue-500'>Here.</Link></p>
          <button type='subbmit' className='bg-white text-blue-500 px-3 py-1 rounded-full'>subbmit</button>
        </div>
        
    </form>
  )
}

export default Login
