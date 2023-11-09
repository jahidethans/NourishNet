import { Table, Toast } from "flowbite-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const StatusChanger = ({eachFood}) => {

    const handleStatusChange = e =>{
        e.preventDefault();
    
        const form = e.target;
        

        const foodName = eachFood.foodName;
        const foodImage = eachFood.foodImage;
        const foodId = eachFood.foodId;
        const donatorEmail = eachFood.donatorEmail;
        const donatorName = eachFood.donatorName;
        const requestorName = eachFood.requestorName;
        const requestorEmail = eachFood.requestorEmail;
        const requestorImage = eachFood.requestorImage;
        const requestDate = eachFood.requestDate;
        const pickupLocation = eachFood.pickupLocation;
        const expiredDate = eachFood.expiredDate;
        const additionalNotes = eachFood.additionalNotes;
        const donate = eachFood.donate;
        const status = form.status.value;
        const id = eachFood._id;
    
    
    
    
        const requestedFood = {
          foodName
    ,foodImage
    ,foodId
    ,requestorName
    ,donatorEmail
    ,donatorName
    ,requestorEmail
    ,requestorImage
    ,requestDate
    ,pickupLocation
    ,expiredDate
    ,additionalNotes
    ,donate,
    status
        }
        console.log(requestedFood, id);


        const handleChangeUpdate = () =>{
            fetch(`http://localhost:5000/allrequests/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(requestedFood)
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount > 0){
                    // update state
                    toast.success(`Status changed to delivered`)

                }
            })
        }
        handleChangeUpdate()

      }

 console.log(eachFood);
    return (
       
            <Table.Body  className="divide-y border-b">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell> <img className="w-16 h-16" src={eachFood.requestorImage} alt="" /> </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {eachFood.requestorName}
              </Table.Cell>
              <Table.Cell>{eachFood.requestorEmail}</Table.Cell>
              <Table.Cell>{eachFood.requestDate}</Table.Cell>
              <Table.Cell>
                <form onSubmit={handleStatusChange}>
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

          </Table.Body>
          
       
    );
};

export default StatusChanger;