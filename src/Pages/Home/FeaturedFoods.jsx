import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allfoods`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const featuredFoods = foods.slice(0, 6); // Take the first 6 items

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-16">
        {featuredFoods.map((food) => (
          <div key={food._id}>
            <div className="max-w-sm flex gap-2">
              <img
                className="w-52 h-80 object-cover"
                src={food.foodImage}
                alt={food.foodName}
              />
              <div className="space-y-1 flex-1 pl-2 border-l-2 border-black">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {food.foodName}
                </h5>
                <p className="font-normal text-gray-500">
                  {food.additionalNotes}
                </p>
                <p className="font-normal  text-gray-500">
                  <span className="font-medium text-black">Quantity:</span>{" "}
                  {food.foodQuantity}
                </p>
                <p className="font-normal  text-gray-500">
                  <span className="font-medium text-black">Pick up from:</span>{" "}
                  {food.pickupLocation}
                </p>
                <p className="font-normal text-gray-500">
                  <span className="font-medium text-black">Expiry date:</span>{" "}
                  {food.expiredDate}
                </p>
                <div className="flex justify-start items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={food.donatorImage}
                    alt=""
                  />
                  <p>{food.donatorName}</p>
                </div>
                <Link to={`/allfoods/${food._id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/allfoods"
        className="flex justify-center items-center  p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md"
      >
        View All
      </Link>
    </div>
  );
};

export default FeaturedFoods;
