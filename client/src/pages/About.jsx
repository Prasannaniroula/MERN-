import React,{useEffect} from 'react'
import { useAuth } from '../store/auth';
function About() {
  const {user} = useAuth();
   const username = user.username;
   const email = user.email;
  return (
   <>
           <div className="bg-black w-screen h-screen">
              Hello! {username}<br/>
              {email}
          </div>
   </>
  )
}

export {About};