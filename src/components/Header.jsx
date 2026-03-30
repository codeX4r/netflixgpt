import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <img src={logo} alt="logo" className="w-36 h-12" />
    </div>
  );
};

export default Header;
