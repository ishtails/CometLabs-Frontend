import image_1 from "../assets/Image_1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="hero" className="h-full flex mt-14 items-center justify-between mx-10 xl:mx-auto max-w-6xl">
      <div className="sm:w-[30%] lg:w-[40%] space-y-4">
        <h1 className="font-lexend font-bold text-4xl">
          Quality You Can Trust
        </h1>
        <p className="text-slate-500">
          We curate our collection from trusted brands renowned for their
          commitment to excellence. Every gadget undergoes rigorous quality
          testing to ensure you receive only the best.
        </p>
        <button className="flex items-center space-x-2 bg-slate-800 text-white p-2">
          <p>Get in touch</p>
          <AiOutlineArrowRight />
        </button>
      </div>
      <img
        src={image_1}
        alt="logo"
        title="Weiss"
        className="hidden sm:block w-[50%]"
      />
    </div>
  );
};

export default Hero;
