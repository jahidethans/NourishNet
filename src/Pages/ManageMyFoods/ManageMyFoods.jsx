import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://localhost:5000/managefoods?email=${user.email}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFoods(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
      setLoading(false);
    };
  
    fetchData();
  }, []);





 

  return (

    <div className="my-24">
    {loading && (
      <div className="flex items-center justify-center h-screen">
        <div className="loading loading-infinity text-secondary w-[8rem]">Loading</div>
      </div>
    )}

{!loading && (
    <div className="my-24">
        <div >
            <p className="text-xl font-semibold">Manage your Products</p>
            <p className="text-gray-600">Products added by you.You can edit, delete or manage status of any item.</p>
        </div>
      <Table  className="mt-10" hoverable>
        <Table.Head>
          <Table.HeadCell>food image</Table.HeadCell>
          <Table.HeadCell>food name</Table.HeadCell>
          <Table.HeadCell>quantity</Table.HeadCell>
          
          <Table.HeadCell>
            <span className="sr-only">Update</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {
        foods.map(food=> <Table.Body key={food._id} className="divide-y border-b">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell> <img className="w-16 h-16" src={food.foodImage} alt="" /> </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {food.foodName}
            </Table.Cell>
            <Table.Cell>{food.foodQuantity}</Table.Cell>
            
            <Table.Cell>
              <button href="#" className="font-medium text-white hover:underline dark:text-cyan-500">
              Update
              </button>
            </Table.Cell>
            <Table.Cell>
              <button href="#" className="font-medium text-white hover:underline dark:text-cyan-500">
              <AiOutlineDelete className="w-5 h-5 hover:text-black"></AiOutlineDelete>
              </button>
            </Table.Cell>
            <Table.Cell>
            <Link to={`/allrequests/${food._id}`} className="p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md">
  Manage
</Link>

            </Table.Cell>
          </Table.Row>
          
        </Table.Body>)}
      </Table>
     
    </div>
    )}
    </div>
  );
};

export default ManageMyFoods;
