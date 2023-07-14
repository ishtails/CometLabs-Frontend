import { FaAngleRight } from "react-icons/fa";

type Props = {
  src: any;
  title: string;
  body: string;
};

const CardImage = ({ src, title, body }: Props) => {
  return (
    <div className="flex flex-col max-w-[400px]">
      <img src={src} className="max-w-[300px] w-[90%] mb-4" alt="card_image"/>
      <div className="max-w-[300px] w-[90%]">
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
