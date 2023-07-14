import { FaAngleRight } from "react-icons/fa";

const Rectangle_Box = () => {
  return (
    <div className="w-[90%] max-w-[960px] xl:w-full mx-10 bg-[#131416] text-slate-100 pl-10 pr-36 py-10">
      <div className="lg:w-[60%]">
        <h3 className="text-slate-500 mb-5 md:mb-10 uppercase font-semibold">
          Unleash Your Creativity
        </h3>
        <h1 className="font-bold text-xl md:text-3xl mb-4">
          Amplify your artistic abilities with our range of creative tools.
        </h1>
        <p className="mb-4">
        Immerse yourself in a world of rich, immersive sound, where every note, every beat, and every lyric comes alive with breathtaking clarity. Our state-of-the-art earpods deliver a truly premium audio experience, designed for discerning music lovers and audio enthusiasts who demand nothing but the best.
        </p>
        <hr />
        <button className="flex items-center mt-4">
          <p className="font-bold text-sm">Buy now</p>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Rectangle_Box;
