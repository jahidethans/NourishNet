import { useEffect, useState } from "react";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sortByExpiryDate, setSortByExpiryDate] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/allfoods')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, []);

  const handleSortByExpiryDate = () => {
    setSortByExpiryDate(!sortByExpiryDate);
    const sortedFoods = [...foods].sort((a, b) => {
      const dateA = new Date(a.expiredDate);
      const dateB = new Date(b.expiredDate);
      return sortByExpiryDate ? dateA - dateB : dateB - dateA;
    });
    setFoods(sortedFoods);
  };

  const handleSearch = () => {
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
        <div>
          <input
            type="text"
            placeholder="Search by food name"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="p-3 border rounded-md"
          />
          <button onClick={handleSearch} className="p-3 border rounded-md">Search</button>
        </div>
        <div>
          <button onClick={handleSortByExpiryDate}>
            Sort by expiry date: {sortByExpiryDate ? <AiOutlineSortAscending className='w-10'></AiOutlineSortAscending> : <AiOutlineSortDescending></AiOutlineSortDescending>}
          </button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <div key={food._id}>
            {/* Your card and food display code */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
