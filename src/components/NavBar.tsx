import logo from "../assets/Weiss Logo.svg";
import { Link } from "react-scroll";
import SignUpModal from "./Signup";

const NavBar = () => {
  return (
    <div className="flex py-5 px-10 justify-between max-w-6xl xl:mx-auto items-center">
      <img src={logo} alt="logo" title="Weiss" className="w-32" />

      <div className="hidden sm:flex space-x-4 font-semibold text-slate-700">
        <Link
          to="products"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <p className="cursor-pointer">Products</p>
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          <p className="cursor-pointer">Reviews</p>
        </Link>
        <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
          <p className="cursor-pointer">Support</p>
        </Link>
      </div>

      
      <SignUpModal />
    </div>
  );
};

export default NavBar;
