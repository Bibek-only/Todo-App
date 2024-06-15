import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import {Outlet} from "react-router-dom"
const App = () => {
  return (
    <>
      <div className="mainBody min-h-screen w-full bg-black text-white flex flex-col items-center">
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      
    </>
  )
}

export default App
