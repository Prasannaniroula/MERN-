import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    
        <body className='m-0 p-0'>
    <div className='bg-black flex justify-between w-screen text-white p-4 '>
        <div className="flex">
            <Link to="/"><h1 className='font-bold text-3xl'>Logo</h1></Link>
        </div>
        <div className='flex gap-8 center text-lg pr-10'>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center text-pink-200'  to="/">Home</Link>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center  text-pink-200' to="/contact">Contact</Link>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center  text-pink-200' to="/about">About</Link>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center  text-pink-200' to="/service">Service</Link>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center  text-pink-200' to="/register">Register</Link>
         <Link className='w-20 hover:border-b-4 border-pink-600 text-center  text-pink-200' to="/login">Login</Link>
        </div>
    </div>
    </body>

  )
}

export default NavBar