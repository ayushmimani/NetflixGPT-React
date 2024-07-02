import React, { useRef, useState } from "react";
import Header from "./Header";
import { validatedata } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";

const Login = () => {
  const [issigninform, setissigninform] = useState(true);
  const [errormessage, seterrmessage] = useState(null);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setissigninform(!issigninform);
  };

  const handleButtonclick = () => {
    const message = validatedata(
      // fullname.current.value,
      email.current.value,
      password.current.value,
      issigninform ? null : fullname.current.value
    );
    seterrmessage(message);
    // if string get then return from the function to not executed further code
    if (message) return;

    if (issigninform) {
      // existing account
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signin - " + user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmessage(errorCode + "-" + errorMessage);
        });
    } else {
      // new account
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/70365571?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          seterrmessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {/* backgorund image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="Logo"
        />
      </div>
      {/* form for sign in and sign up  */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-lg w-3/12  text-white mx-auto my-36 right-0 left-0 p-12 bg-black bg-opacity-80"
      >
        {/* Form name sign in or sign up */}
        <h1 className="text-3xl py-4 text-bold">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {/* Full Name input field for signup form*/}
        {!issigninform && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        {/* Email input field */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {/* password input field */}
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {/* show error message */}
        <p className="text-red-600 font-bold tetx-lg py-2">{errormessage}</p>

        {/* sign or sign up message  */}
        <button
          onClick={handleButtonclick}
          className="bg-red-700 w-full p-4 my-4"
        >
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        {/* text to check account have or not */}
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
