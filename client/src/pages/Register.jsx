import React from "react";

function Register() {
  return (
    <>
      <div className="bg-black w-screen h-screen text-white">
        <div className="flex justify-evenly pt-20 pl-0">
          <div className="registration-image ">
          <img className="rounded-xl" src="/registration.png" alt="Registration" width="600" height="600" />
          </div>
          <div className="form">
            <h1 className="text-5xl">Registration form</h1>

          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
