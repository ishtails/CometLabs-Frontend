import Card from "../components/Card";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col pt-80 max-w-6xl xl:mx-auto">
      <div className="flex flex-col mb-16 items-center self-center">
        <h1 className="font-bold text-5xl">Reviews</h1>
        <p className="text-slate-500 mt-4">
          Here is what our customers say about us
        </p>
      </div>

      <div className="flex items-center justify-around mr-8">
        <Card
          title="Customer 1"
          body="Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
        />
        <Card
          title="Customer 2"
          body="Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
        />
        <Card
          title="Customer 3"
          body="Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
        />
      </div>
    </div>
  );
};

export default Reviews;
