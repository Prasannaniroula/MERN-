import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="bg-black w-screen min-h-screen text-white px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="rounded-full max-w-full h-auto"
              src="/registration.png"
              alt="Registration"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Login Form
            </h1>
            <form
              onSubmit={handleSubmitForm}
              className="w-full max-w-md pt-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-left">
                  E-mail:
                </label>
                <input
                  className="border border-white p-2 rounded-xl w-full bg-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="email"
                  placeholder="Enter your E-mail"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-left">
                  Password:
                </label>
                <input
                  className="border border-white p-2 rounded-xl w-full bg-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-pink-600 hover:bg-pink-700 transition mt-5 px-6 py-2 rounded-2xl">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
