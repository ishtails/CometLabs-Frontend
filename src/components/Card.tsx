import { FaAngleRight } from "react-icons/fa";

type Props = {
  title: string;
  body: string;
};

const Card = ({ title, body }: Props) => {
  return (
      <div className="flex flex-col rounded-2xl w-[300px] mx-2 p-10 bg-slate-100 shadow-card-shadow">
        <h1 className="font-lexend text-2xl font-medium">{title}</h1>
        <p className="text-sm mt-4 text-slate-500 w-[90%]">{body}</p>
        <button className="flex items-center mt-8">
          <p className="font-bold text-sm">Read more</p>
          <FaAngleRight />
        </button>
      </div>
  );
};

export default Card;
