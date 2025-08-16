import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    
        <body className='m-0 p-0'>
    <div className='bg-black flex justify-between w-screen text-white p-4 '>
        <div className="flex">
            <Link to="/"><h1 className='font-bold text-3xl'>Logo</h1></Link>
        </div>
        <div className='flex gap-8 center text-lg pr-10'>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/">Home</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/contact">Contact</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/about">About</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/service">Service</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/login">Login</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/register">Register</NavLink>
        </div>
    </div>
    </body>

  )
}

export default NavBar