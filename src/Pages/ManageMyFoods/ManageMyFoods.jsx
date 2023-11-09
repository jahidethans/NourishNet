import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://nourish-net-server.vercel.app/managefoods?email=${user.email}`;

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
  }, [url]);


console.log(foods);

const handleDelete = id =>{
      
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
          

          fetch(`https://nourish-net-server.vercel.app/allfoods/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data =>{
            if(data.deletedCount > 0){
              
              // Filter out the deleted item from the foods array
          const remainingFoods = foods.filter(food => food._id !== id);
          
          // Update the state with the remaining items
          setFoods(remainingFoods);



              Swal.fire({
                title: "Deleted!",
                text: "Your donated food has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
}


 

  return (

    <div className="my-24">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Manage my food</title>
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
              <Link to={`/updatefood/${food._id}`} className="font-medium text-white hover:underline dark:text-cyan-500 p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] rounded-md">
              Update
              </Link>
            </Table.Cell>
            <Table.Cell>
              <button onClick={()=>handleDelete(food._id)} className="font-medium text-white hover:underline dark:text-cyan-500">
              <AiOutlineDelete className="w-5 h-5 hover:text-black"></AiOutlineDelete>
              </button>
            </Table.Cell>
            <Table.Cell>
            <Link to={`/allrequests/foods/${food._id}`} className="p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md">
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
