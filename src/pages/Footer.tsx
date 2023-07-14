import image_6 from "../assets/Image_6.png";
import { FaAngleRight } from "react-icons/fa";
import logo_2 from "../assets/Weiss Logo_Light.svg";

const Footer = () => {
  return (
    <div>
      <div className="relative pt-24 lg:pt-56">
        <img
          src={image_6}
          alt="watch"
          className="w-[50%] hidden xl:block object-cover max-w-[650px] absolute -top-8 right-[10%]"
        />

        <div className="bg-slate-100 flex flex-col justify-between">
          <div className="xl:w-[90%] max-w-6xl xl:mx-auto">
            <div className="px-10 py-10 xl:w-[50%]">
              <h3 className="text-slate-700 mb-5 md:mb-10 uppercase font-semibold">
                Unsere Firmenhistorie
              </h3>
              <h1 className="font-bold text-xl md:text-3xl mb-4">
                Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein
                Ingenieurbüro.
              </h1>
              <p className="mb-4">
                Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat
                Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters.
              </p>
              <hr />
              <button className="flex items-center mt-4">
                <p className="font-bold text-sm">Buy now</p>
                <FaAngleRight />
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 px-10">
            <div className=" text-slate-50 max-w-6xl xl:mx-auto">
              <div className="flex justify-between mt-10 ">
                <img src={logo_2} />
                <span>
                  <h3 className="font-lexend font-semibold">Contact</h3>
                  <p className="text-sm">Beratender Ingenieur</p>
                  <p className="text-sm">Dipl.-Ing. Klaus Weiss</p>
                </span>
                <span>
                  <h3 className="font-lexend font-semibold">Address</h3>
                  <p className="text-sm">Beratender Ingenieur</p>
                  <p className="text-sm">Dipl.-Ing. Klaus Weiss</p>
                </span>
              </div>
              <hr className="mt-10 mb-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
