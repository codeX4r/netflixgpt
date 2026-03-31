import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/10 fixed w-full top-0 z-50">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-32 object-contain" />
      {user && (
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <img
            src={user.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />

          {/* Sign Out Button */}
          {
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-200"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          }
        </div>
      )}
    </header>
  );
};

export default Header;
