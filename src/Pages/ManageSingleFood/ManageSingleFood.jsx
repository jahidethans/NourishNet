import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { Table } from "flowbite-react";


const ManageSingleFood = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const [updatedFoodList, setUpdatedFoodList] = useState([...food]);

  const handleStatusChange = (event, index) => {
    event.preventDefault();

    const selectedStatus = event.target.status.value;
    
    // Create a copy of the updatedFoodList
    const updatedList = [...updatedFoodList];
    
    // Update the status for the selected food item
    updatedList[index].status = selectedStatus;

    // Update the state with the modified list
    setUpdatedFoodList(updatedList);
  }
  console.log(updatedFoodList);

  if (!food || food.length === 0) {
    return <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
          <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
          <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
          <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
          <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
        </svg>
        <p className="text-3xl">The item wasn't requested.</p>
        <Link to='/managemyfoods' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to previous page</Link>
      </div>
    </section>;
  }

  console.log("from manage page", food);

  return (
    <div className="my-20">
      <h3>All requests for this item:</h3>

      <Table className="mt-10" hoverable>
        <Table.Head>
          <Table.HeadCell>Requester image</Table.HeadCell>
          <Table.HeadCell>Requester name</Table.HeadCell>
          <Table.HeadCell>Requester email</Table.HeadCell>
          <Table.HeadCell>Request date</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>


        </Table.Head>

        {
          food.map(eachFood => <Table.Body key={eachFood._id} className="divide-y border-b">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell> <img className="w-16 h-16" src={eachFood.requestorImage} alt="" /> </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {eachFood.requestorName}
              </Table.Cell>
              <Table.Cell>{eachFood.requestorEmail}</Table.Cell>
              <Table.Cell>{eachFood.requestDate}</Table.Cell>
              <Table.Cell>
                <form onSubmit={(event) => handleStatusChange(event, index)}>
                  <select
                    name="status"
                    defaultValue={eachFood.status}
                    className="py-2 px-2 rounded-md w-2/3 focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                  >
                    <option value="available">Available</option>
                    <option value="delivered">Delivered</option>
                  </select>
                  <button type="submit" className="px-3 py-2 bg-primary text-black rounded-md">
                    Change
                  </button>
                </form>
              </Table.Cell>
            </Table.Row>

          </Table.Body>)}
      </Table>

    </div>
  );
};

export default ManageSingleFood;
