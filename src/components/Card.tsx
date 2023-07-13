import { FaAngleRight } from "react-icons/fa";

type Props = {
  src: any;
  title: string;
  body: string;
};

const Card = ({ src, title, body }: Props) => {
  return (
    <div className="">
      <img src={src} className="" />
      <div className="flex flex-col ml-6 -mt-4">
        <h1 className="font-lexend font-semibold">{title}</h1>
        <p className="text-sm text-slate-500 w-[90%]">{body}</p>
        <button className="flex items-center mt-4">
          <p className="font-bold text-sm">Buy now</p>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
