import { FaAngleRight } from "react-icons/fa";

type Props = {
  title: string;
  body: string;
};

const Card = ({ title, body }: Props) => {
  return (
    <div className="md:min-h-[360px] flex flex-col rounded-2xl sm:w-[300px] ml-10 sm:mx-2 sm:ml-0 p-10 sm:border-r-2">
      <h1 className="font-lexend text-2xl font-medium">{title}</h1>
      <p className="text-sm mt-4 text-slate-500 w-[90%]">{body}</p>
      <button className="transition-all hover:text-slate-600 flex items-center mt-8">
        <p className="font-bold text-sm">Read more</p>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Card;
