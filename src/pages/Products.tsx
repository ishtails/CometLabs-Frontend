import image_1 from "../assets/Image_2.png";
import image_2 from "../assets/Image_3.png";
import image_3 from "../assets/Image_4.png";
import CardImage from "../components/CardImage";
import image_5 from "../assets/Image_5.png";
import Rectangle_Box from "../components/Rectangle_Box";

const Products = () => {
  return (
    <div className="bg-slate-100 h-[120vh]">
      <div className="flex flex-col mt-14 justify-between pt-14">
        <h1 className="font-lexend text-5xl font-semibold text-center mb-12">
          Products
        </h1>

        <div className="relative flex items-center justify-between mx-auto  max-w-6xl">
          <CardImage
            src={image_1}
            title={`VR Headset`}
            body={`Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.`}
          />
          <CardImage
            src={image_2}
            title={`Drones`}
            body={`Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.`}
          />
          <CardImage
            src={image_3}
            title={`Digital Cameras`}
            body={`Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.`}
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
