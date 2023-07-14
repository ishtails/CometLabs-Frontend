import image_2 from "../assets/Image_3.png";
import image_3 from "../assets/Image_4.png";
import CardImage from "../components/CardImage";
import image_5 from "../assets/Image_5.png";
import Rectangle_Box from "../components/Rectangle_Box";

const Products = () => {
  return (
    <div className="bg-slate-100 h-[120vh]">
      <div className="flex flex-col mt-14 justify-between pt-14">
        <h1 className="font-lexend text-5xl font-semibold text-center mb-10">
          Products
        </h1>

        <div className="relative flex items-center justify-between mx-auto max-w-6xl">
          <CardImage
            src={image_2}
            title={`Drones`}
            body={`Take to the skies and capture breathtaking moments with our high-performance drones. Unlock new perspectives, unleash your creativity, and explore the world from above with our cutting-edge aerial companions.`}
          />
          <CardImage
            src={image_3}
            title={`Digital Cameras`}
            body={`Capture memories instantly and bring them to life with our classic Polaroid cameras. Rediscover the joy of physical photos, share tangible mementos, and create lasting memories that you can hold in your hands.`}
          />

          <div className="absolute top-[120%]">
            <Rectangle_Box />
          </div>

          <img
            src={image_5}
            alt="earpods"
            className="absolute top-[130%] right-0 w-[50%] lg:w-[35%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
