import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table } from "flowbite-react";



const MyFoodRequest = () => {

    const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const url = `http://localhost:5000/ownrequests?requestorEmail=${user.email}`;
  
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
          <Table.HeadCell>Donor Name</Table.HeadCell>
          <Table.HeadCell>Pickup Location</Table.HeadCell>
          <Table.HeadCell>Expiry Date</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Donation Amount</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          
          
          <Table.HeadCell>
            <span className="sr-only">Cancel</span>
          </Table.HeadCell>
        </Table.Head>

        {
        foods.map(food=> <Table.Body key={food._id} className="divide-y border-b">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="text-black">{food.donatorName} </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {food.pickupLocation}
            </Table.Cell>
            <Table.Cell>{food.expiredDate}</Table.Cell>
            
            <Table.Cell>
              {food.requestDate}
            </Table.Cell>
            <Table.Cell>
            {food.donate}
            </Table.Cell>
            <Table.Cell>
              <button href="#" className="font-medium text-white hover:underline dark:text-cyan-500">
              {food.status}
              </button>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>)}
      </Table>
     
    </div>
    )}
    </div>
    );
};

export default MyFoodRequest;