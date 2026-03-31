import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header.jsx";
import { validate } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const inputStyle =
    "px-4 py-3 w-full bg-black/60 border border-gray-500 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600";

  function handleToggle() {
    setIsMember((prev) => !prev);
    setErrorMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    const error = validate(email, password);
    setErrorMessage(error);

    if (error == null) {
      // sign IN / Sign Up

      if (isMember) {
        //login
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user)
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        // signUp
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            setErrorMessage("Account Created Sucessfully !");
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  }

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/40"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="w-full max-w-5xl text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Unlimited movies, shows, and more
            </h1>

            <p className="text-lg md:text-xl">
              Starts at ₹149. Cancel at any time.
            </p>

            <p className="text-md md:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {/* Full Name */}
                <div className="flex-1">
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isMember
                        ? "opacity-0 scale-95 pointer-events-none"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Full name"
                      className={inputStyle}
                      onChange={() => setErrorMessage("")}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex-1">
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email address"
                    className={inputStyle}
                    onChange={() => setErrorMessage("")}
                  />
                </div>

                {/* Password */}
                <div className="flex-1">
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className={inputStyle}
                    onChange={() => setErrorMessage("")}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold w-full sm:w-auto"
                >
                  {isMember ? "Watch Now" : "Get Started"}
                </button>
              </div>

              {/* Toggle */}
              <p className="text-md my-3">
                {isMember ? "Not a member?" : "Already a member?"}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="text-red-600 ml-2 font-semibold"
                >
                  {isMember ? "Signup!" : "Login!"}
                </button>
              </p>

              {/* Error */}
              {errorMessage && (
                <div className="text-left">
                  <p className="text-red-400 text-sm font-medium">
                    {errorMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
