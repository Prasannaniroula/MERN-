import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    username:"",
    email: "",
    message: "",
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
      <div className="bg-black w-screen min-h-screen text-white px-4 py-10 md:px-40">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="rounded-xl max-w-full h-auto"
              src="/contact.png"
              alt="Contact"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Contact Us
            </h1>
            <form
              onSubmit={handleSubmitForm}
              className="w-full max-w-md pt-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-left">
                  Username:
                </label>
                <input
                  className="border border-white p-2 rounded-xl w-full bg-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="email"
                  placeholder="Enter your username here"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-left">
                  E-mail:
                </label>
                <input
                  className="border border-white p-2 rounded-xl w-full bg-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  type="email"
                  placeholder="Enter your e-mail here"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-left">
                  Message:
                </label>
                <textarea
                  className="border border-white p-2 rounded-xl w-full bg-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={4}
                  placeholder="Enter message here"
                  name="message"
                  id="message"
                  required
                  autoComplete="off"
                  value={user.message}
                  onChange={handleInput}
                />
              </div>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded-2xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
