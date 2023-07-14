import logo from "../assets/Weiss Logo.svg";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="flex py-5 px-10 justify-between max-w-6xl xl:mx-auto items-center">
      <img src={logo} alt="logo" title="Weiss" className="w-32" />

      <div className="hidden sm:flex space-x-4 font-semibold text-slate-700">
        <Link to="products" spy={true} smooth={true} offset={-50} duration={500}>
          <p className="cursor-pointer">Products</p>
        </Link>
        <Link to="reviews" spy={true} smooth={true} offset={-100} duration={700}>
          <p className="cursor-pointer">Reviews</p>
        </Link>
        <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
          <p className="cursor-pointer">Support</p>
        </Link>
      </div>

      <button className="flex items-center space-x-2 bg-slate-800 text-white p-2">
        <p>Sign up</p>
        <BiLogInCircle />
      </button>
    </div>
  );
};

export default NavBar;
