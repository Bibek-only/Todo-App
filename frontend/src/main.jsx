import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import TodoContent from './components/TodoContent.jsx'
import Welcome from './components/Welcome.jsx'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App />} >
        <Route path='' element={<Welcome/>} ></Route>
        <Route path="login" element={ <Login /> }></Route>
        <Route path="register" element={ <Register /> }></Route>
        <Route path="todo" element={ <TodoContent/>}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router = {router}></RouterProvider>
    
  </React.StrictMode>,
)
