import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../utils/userSlice";
const Header = () => {
  // navigate hook
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // handle signout
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 my-4 mx-2" src={user?.photoURL} />
          <button
            className="font-bold text-white bg-red-700 h-10 px-2 my-4"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
