import Card from "../components/Card";

const Reviews = () => {
  return (
    <div id="reviews" className=" flex flex-col mb-20 mt-20 sm:mt-56 md:mt-96 xl:mt-72 max-w-6xl xl:mx-auto">
      <div className="flex flex-col mb-16 items-center self-center">
        <h1 className="font-bold text-5xl">Reviews</h1>
        <p className="text-slate-500 mt-4">
          Here is what our customers have to say
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around mr-8">
        <Card
          title="Sarah"
          body="he build quality of these earpods is second to none. From the moment you hold them in your hands, you can feel the attention to detail and the premium craftsmanship."
        />
        <Card
          title="Michael "
          body="I'm blown away by the noise cancellation feature of these earpods. They create a cocoon of silence, allowing me to enjoy my music without any distractions."
        />
        <Card
          title="John "
          body="I've tried countless earpods in search of the perfect sound, and these exceeded all my expectations. The audio quality is simply outstanding."
        />
      </div>
    </div>
  );
};

export default Reviews;
