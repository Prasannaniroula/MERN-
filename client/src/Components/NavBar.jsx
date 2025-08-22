import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../store/auth'

function NavBar() {

  const isLoggedIn = useAuth();
  console.log(isLoggedIn.isLoggedIn);
 

  return (
    
    <div className='bg-black flex justify-around w-screen text-white p-4 '>
        <div className="flex">
            <Link to="/"><h1 className='font-bold text-xl'>Portfolio</h1></Link>
        </div>
        <div className='flex gap-2 center text-sm pr-10'>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/">Home</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/contact">Contact</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/about">About</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/service">Service</NavLink>

         {isLoggedIn.isLoggedIn ? <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/logout">Logout</NavLink> : <>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/login">Login</NavLink>
         <NavLink className={({isActive})=>`w-20 hover:border-b-4 border-pink-600 text-center hover:text-pink-300 ${isActive ? "text-pink-300 border-b-4 border-pink-600 ":""}`} to="/register">Register</NavLink>
         </> }

         


        </div>
    </div>

  )
}

export default NavBar