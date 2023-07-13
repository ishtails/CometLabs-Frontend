import image_1 from "../assets/Image_2.png";
import image_2 from "../assets/Image_3.png";
import image_3 from "../assets/Image_4.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Products = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex mt-14 items-center justify-between mx-5 lg:mx-auto max-w-6xl">
        <div className="flex flex-col">
          <img src={image_1} alt="" className="" />
          <div className="flex flex-col">
            <h1 className="font-lexend font-semibold">Title</h1>
            <p className="">
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation
            </p>
            <button className="flex items-center space-x-2">
              <p>Contact</p>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
