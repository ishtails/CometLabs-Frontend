import image_1 from '../assets/Image_1.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-full flex mt-14 items-center justify-between mx-5 xl:mx-auto max-w-6xl">
        <div className="w-[30%] space-y-4">
            <h1 className="font-lexend font-bold text-4xl">Describe the value of booking an appointment</h1>
            <p className="text-slate-500">No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
            <button className="flex items-center space-x-2 bg-slate-800 text-white p-2">
            <p>Get in touch</p>
            <AiOutlineArrowRight />
        </button>
        </div>
        <img src={image_1} alt="logo" title="Weiss" className="w-[50%]"/>
    </div>
  )
}

export default Hero