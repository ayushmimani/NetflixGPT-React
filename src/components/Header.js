import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
  // navigate hook
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate("/");
      }
    });
    // Return the cleanup function to unsubscribe when the component unmountss
    return () => unsubscribe();
  }, []);

  // handle signout
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
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
