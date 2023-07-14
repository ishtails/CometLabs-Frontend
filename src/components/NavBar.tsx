import logo from '../assets/Weiss Logo.svg'
import { AiOutlineMail } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex mt-5 mx-10 justify-between max-w-6xl xl:mx-auto items-center">
        <img src={logo} alt="logo" title="Weiss" className="w-32"/>

        <div className="flex space-x-4 font-semibold text-slate-800">
            <p>Home</p>
            <p>Products</p>
            <p>Contact Us</p>
        </div>

        <button className="flex items-center space-x-2 bg-slate-800 text-white p-2">
            <p>Contact</p>
            <AiOutlineMail />
        </button>
    </div>
  )
}

export default NavBar