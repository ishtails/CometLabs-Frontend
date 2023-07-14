import { FaAngleRight } from "react-icons/fa";

const Rectangle_Box = () => {
  return (
    <div className="w-[80%] mx-10 bg-[#131416] text-slate-100 pl-10 pr-36 py-16">
      <div className="w-[60%]">
        <h3 className="text-slate-500 mb-5 md:mb-10 uppercase font-semibold">
          Unsere Firmenhistorie
        </h3>
        <h1 className="font-bold text-xl md:text-3xl mb-4">
          Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein
          Ingenieurbüro.
        </h1>
        <p className="mb-4">
          Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn
          Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006
          ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer
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
