import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/stores/userSlice.js";
import { toggleShow } from "../utils/stores/gptSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGpt = useSelector((store) => store.gpt.showGpt)

  function handleGPT() {
    dispatch(toggleShow())
  }
  // to add & remoeve userData on login , signOut ,signUp
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <header className="
  fixed top-0 left-0 w-full z-50 
  flex justify-between items-center 
  px-4 sm:px-6 md:px-12 py-3
  bg-linear-to-b from-black/80 to-transparent
">

      <img src={logo} className="w-24 sm:w-28 md:w-32" />

      {user && (
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={user.photoURL}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />

          <button
            onClick={handleGPT}
            className="bg-blue-400 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded"
          >
            Search GPT
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
