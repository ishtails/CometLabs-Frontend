import { FaAngleRight } from "react-icons/fa";

type Props = {
  src: any;
  title: string;
  body: string;
};

const CardImage = ({ src, title, body }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <img src={src} />
      <div className="ml-[10%] -mt-2">
        <h1 className="font-lexend text-lg font-semibold">{title}</h1>
        <p className="text-sm text-slate-500">{body}</p>
        <button className="flex items-center mt-4">
          <p className="font-bold text-sm">Buy now</p>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default CardImage;
