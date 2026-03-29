import Header from "./Header.jsx";

const Login = () => {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay (Improved) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Center Section */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="max-w-2xl text-center space-y-6">
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

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 w-full sm:w-80 bg-black/60 border border-gray-500 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                placeholder="password"
                className="px-4 py-3 w-full sm:w-80 bg-black/60 border border-gray-500 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
