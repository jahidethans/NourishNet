import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table } from "flowbite-react";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



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
  console.log(foods);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the deletion
        fetch(`http://localhost:5000/allrequests/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            // Check if the deletion was successful and show a success message
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your request has been deleted.", "success");
              const remaining = foods.filter(food=> food._id !== id);
              setFoods(remaining);
            } else {
              Swal.fire("Error", "Failed to delete the request.", "error");
            }
          });
      }
    });
  };
  
 
    return (
        <div className="my-24">
          <Helmet>
                <meta charSet="utf-8" />
                <title>My food requests</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    {loading && (
      <div className="flex items-center justify-center h-screen">
        <div className="loading loading-infinity text-secondary w-[8rem]">Loading</div>
      </div>
    )}

{!loading && (
    <div className="my-24">
        <div >
            <p className="text-xl font-semibold">My requests</p>
            <p className="text-gray-600">Products requested by you.You can <br /> cancel request as long as the item is not delivered.</p>
        </div>
      <Table  className="mt-10" hoverable>
        <Table.Head>
          <Table.HeadCell>Item</Table.HeadCell>
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
          <Table.Cell> <img className="w-16 h-16 object-cover" src={food.foodImage} alt="" /> </Table.Cell>
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
              <p>{food.status}</p>
            </Table.Cell>
            <Table.Cell>
              <button onClick={()=> handleDelete(food._id)} className="font-medium text-white hover:underline dark:text-cyan-500 disabled:text-red-600"  disabled={food.status === "delivered"}>
              <AiOutlineDelete className="text-xl"></AiOutlineDelete>
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