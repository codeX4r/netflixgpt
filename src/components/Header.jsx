import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <img src={logo} alt="logo" className="w-36 h-12" />

      <button className="bg-red-700 px-4 py-2 rounded text-white">
        Sign In
      </button>
    </div>
  );
};

export default Header;
