import React, { useState } from "react";

function Login() {

   const [ user, setuser] = useState({
    email:"",
    password:"",
   });

   const handleInput = (e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setuser({
        ... user,

        [name]: value,
      })
   }

   const handleSubmitForm = (e)=>{
     e.preventDefault();
     console.log(user)
   }


  return (
    <>
      <div className="bg-black w-screen h-screen text-white">
        <div className="flex justify-evenly pt-20 pl-0">
          <div className="registration-image ">
            <img
              className="rounded-full"
              src="/registration.png"
              alt="Registration"
              width="700"
              height="900"
            />
          </div>
          <div className="form">
            <h1 className="text-5xl">Login form</h1>
            <form onSubmit={handleSubmitForm} className=" w-96 pt-10 flex flex-col text-center gap-6">
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                 className="border-1 border-white p-2 rounded-xl w-96"
                  type="text"
                  placeholder="Enter your E-mail"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                 className="border-1 border-white p-2 rounded-xl w-96"
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                /><br/>
                <div className="flex justify-center">
             <button className="bg-pink-600 mt-5 px-6 py-2 rounded-2xl">Login</button>
             </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
