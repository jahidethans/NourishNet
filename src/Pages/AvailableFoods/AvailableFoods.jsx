import { useEffect, useState } from "react";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { Link } from "react-router-dom";

const AvailableFoods = () => {

  const [foods, setFoods] = useState([]);
  const [sortByExpiryDate, setSortByExpiryDate] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/allfoods')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, []);

  const handleSortByExpiryDate = () => {
    // Toggle the sorting order
    setSortByExpiryDate(!sortByExpiryDate);

    // Sort the foods array based on the expiry date
    const sortedFoods = [...foods].sort((a, b) => {
      const dateA = new Date(a.expiredDate);
      const dateB = new Date(b.expiredDate);
      return sortByExpiryDate ? dateA - dateB : dateB - dateA;
    });

    setFoods(sortedFoods);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value
    // Filter the foods based on the search text
    const filteredFoods = foods.filter(food => 
      food.foodName.toLowerCase().includes(searchText.toLowerCase())
    );
    // Update the foods array with the filtered results
    setFoods(filteredFoods);
  };


  

  console.log(foods);

  return (
    <div>

      <div className="flex justify-between items-center p-4">
      <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by food name"
            name='search'
            // value={searchText}
            // onChange={e => setSearchText(e.target.value)}
            className="p-3 border rounded-md"
          />
          <button  className="p-3 border rounded-md">Search</button>
        </form>
        

        <div>
        <button onClick={handleSortByExpiryDate}>
          Sort by expiry date: {sortByExpiryDate ? <AiOutlineSortAscending className='w-10'></AiOutlineSortAscending> : <AiOutlineSortDescending></AiOutlineSortDescending>}
        </button>
        </div>
      </div>


     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
     {
  foods.map((food) => (
    <div key={food._id}>
      <div className="max-w-sm flex gap-2">
    
        <img className="w-52 h-80 object-cover " src={food.foodImage} alt={food.foodName} />

    
        <div className="space-y-1 flex-1 pl-2 border-l-2 border-black">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {food.foodName}
        </h5>
        <p className="font-normal text-gray-500">
          {food.additionalNotes}
        </p>
        <p className="font-normal  text-gray-500">
          <span className="font-medium text-black">Quantity:</span> {food.foodQuantity
}
        </p>
        <p className="font-normal  text-gray-500">
        <span className="font-medium text-black">Pick up from:</span> {food.pickupLocation
}
        </p>
        <p className="font-normal text-gray-500">
        <span className="font-medium text-black">Expiry date:</span> {food.expiredDate}
        </p>
        <div className="flex justify-start items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={food.donatorImage} alt="" />
          <p>{food.donatorName}</p>
        </div>
        <Link to={`/allfoods/${food._id}`}><button>View Details</button></Link>
        </div>
      </div>
    </div>
  ))
}
     </div>



    </div>
  );
};

export default AvailableFoods;