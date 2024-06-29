import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issigninform, setissigninform] = useState(true);
  const toggleSignInForm = () => {
    setissigninform(!issigninform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="Logo"
        />
      </div>
      <form className="absolute rounded-lg w-3/12  text-white mx-auto my-36 right-0 left-0 p-12 bg-black bg-opacity-80">
        <h1 className="text-3xl py-4 text-bold">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="bg-red-700 w-full p-4 my-4">
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {issigninform
            ? "New to Netflix? Sign Up Now"
            : "Already registared? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
