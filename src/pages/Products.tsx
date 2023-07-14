import image_1 from "../assets/image_7.jpg";
import image_2 from "../assets/image_2.jpg";
import image_3 from "../assets/Image_3.jpg";
import CardImage from "../components/CardImage";
import image_5 from "../assets/Image_5.png";
import Rectangle_Box from "../components/Rectangle_Box";

const Products = () => {
  return (
    <div
      id="products"
      className="bg-slate-100 pb-20 px-2 sm:min-h-[960px] sm:h-[120vh]"
    >
      <div className="flex flex-col mt-14 justify-between pt-14">
        <div className="flex flex-col mb-16 items-center self-center">
          <h1 className="font-bold text-5xl">Products</h1>
          <p className="text-slate-500 mt-4">
            A wide range of products including
          </p>
        </div>

        <div className="relative flex items-center pl-4 mx-auto max-w-6xl">
          <div className="flex justify-between xl:space-x-24 ml-6">
            <CardImage
              src={image_3}
              title={`Digital Cameras`}
              body={`Capture memories instantly and bring them to life with our classic Polaroid cameras. Rediscover the joy of physical photos, share tangible mementos, and create lasting memories that you can hold in your hands.`}
            />
            <CardImage
              src={image_2}
              title={`Drones`}
              body={`Take to the skies and capture breathtaking moments with our high-performance drones. Unlock new perspectives, unleash your creativity, and explore the world from above with our cutting-edge aerial companions.`}
            />
            <CardImage
              src={image_1}
              title={`Smart Watches`}
              body={`Elevate your style and stay connected with our high-end smartwatch. Combining timeless elegance with cutting-edge features, this sophisticated timepiece seamlessly integrates into your daily routine.`}
            />
          </div>

          <div className="absolute hidden sm:block left-0 xl:top-[70vh] top-[60vh]">
            <Rectangle_Box />
          </div>

          <img
            src={image_5}
            alt="earpods"
            className="hidden md:block absolute top-[90vh] xl:top-[75vh] right-0 xl:-right-36 w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
