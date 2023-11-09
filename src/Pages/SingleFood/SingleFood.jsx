import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const SingleFood = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  console.log(food);

  function onCloseModal() {
    setOpenModal(false);

  }
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(today.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;

  const handleRequestFood = (e) => {
    e.preventDefault();

    const form = event.target;

    const foodName = form.name.value;
    const foodImage = form.imageUrl.value;
    const foodId = form.foodId.value;
    const donatorEmail = food.email;
    const donatorName = food.donatorName;
    const requestorName = user.displayName;
    const requestorEmail = user.email;
    const requestorImage = user.photoURL;
    const requestDate = form.requestDate.value;
    const pickupLocation = form.pickup.value;
    const expiredDate = form.expirydate.value;
    const additionalNotes = form.note.value;
    const donate = form.donate.value;
    const status = food.foodStatus;




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
    console.log(requestedFood);

    // send data to server
    fetch('http://localhost:5000/requests',{
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(requestedFood)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      if(data.insertedId){
        toast.success('Request added successfully')
      }
  })



  }

  return (
    <div className="container mx-auto my-20">
      <div>
        <div className="flex justify-start items-center gap-4 mt-10 mb-6">
          <img className="w-10 h-10 rounded-full" src={food.donatorImage} alt="" />
          <div>
            <p >{food.donatorName}</p>
            <p className="text-xs text-gray-500">Pick From: {food.pickupLocation}</p>
          </div>
        </div>

      </div>
      <div className="flex flex-col lg:flex-row gap-16">
        <img className="max-w-2xl max-h-[600px] object-cover " src={food.foodImage} alt={food.foodName} />
        <div className="space-y-3 flex flex-col">
          <div className="flex-grow space-y-3">
            <p className="text-3xl font-semibold">
              {food.foodName}
            </p>
            <p className="text-xl">Food Quantity: <span className="text-gray-500">{food.foodQuantity}</span></p>
            <p className="text-xl">Expires: <span className="text-gray-500">{food.expiredDate}</span></p>
          </div>
          <Button onClick={() => setOpenModal(true)}>Request this item</Button>


          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <form onSubmit={handleRequestFood} className="flex-1 p-6 font-poppins">
                <p className="text-black font-medium mb-1">Name</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={food.foodName}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                  required
                /> <br />
                <p className="text-black font-medium mb-1">Image URL</p>
                <input
                  type="text"
                  name="imageUrl"
                  defaultValue={food.foodImage}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                  required
                /> <br />
                <p className="text-black font-medium mb-1">Food id</p>
                <input
                  type="text"
                  name="foodId"
                  defaultValue={food._id}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                  required
                /> <br />
                <p className="text-black font-medium mb-1">Quantity</p>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={food.foodQuantity}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />
                <p className="text-black font-medium mb-1">Pick up location</p>
                <input
                  type="text"
                  name="pickup"
                  defaultValue={food.pickupLocation}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />
                <p className="text-black font-medium mb-1">Expiry date</p>
                <input
                  type="date"
                  name="expirydate"
                  defaultValue={food.expiredDate}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />
                <p className="text-black font-medium mb-1">Request date</p>
                <input
                  type="date"
                  name="requestDate"
                  value={currentDate}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />


                <p className="text-black font-medium mb-1">Additional Note</p>
                <input
                  type="text"
                  name="note"
                  placeholder="Bought more that I need..."
                  className="py-2 px-2 rounded-md w-full h-20 focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />
                <p className="text-black font-medium mb-1">Donate</p>
                <input
                  type="number"
                  name="donate"
                  placeholder="100tk"
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />

                <p className="text-black font-medium mb-1">Submit as: {user.displayName}</p>
                <input
                  type="text"
                  name="userEmail"
                  defaultValue={user.email}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />
                <p className="text-black font-medium mb-1">Request to: {food.donatorName}</p>
                <input
                  type="text"
                  name="donatorEmail"
                  defaultValue={food.email}
                  readOnly
                  className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
                /> <br />



                <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Request</button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;