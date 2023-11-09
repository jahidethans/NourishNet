import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateFood = () => {

    const {user} = useContext(AuthContext)
    const food = useLoaderData()
   
    console.log(food);
    

    const handleUpdatefood = event =>{
        event.preventDefault();
        const form = event.target;

        const foodImage = form.imageUrl.value;
        const foodName = form.name.value;
        const donatorName = user.displayName;
        const donatorImage = user.photoURL;
        const foodQuantity = form.quantity.value;
        const pickupLocation = form.pickup.value;
        const expiredDate = form.expirydate.value;
        const additionalNotes = form.note.value;
        const email = user.email;
        const foodStatus = form.foodStatus.value;
        
       
       

        const updatedFood = {foodImage, foodName, donatorName, 
            donatorImage, foodQuantity, pickupLocation, expiredDate,additionalNotes, email, foodStatus }
        console.log(updatedFood);

        // send data to server
        fetch(`https://nourish-net-server.vercel.app/allfoods/${food._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
              toast.success('Food updated successfully')
            }
        })
    } 


    return (
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-10">

        <div className="text-black text-center flex-1 text-9xl font-poppins font-semibold  border-b-2 sm:border-b-0 sm:border-r-2">Update <br /> The <br /> Food</div>

<form onSubmit={handleUpdatefood} className="flex-1 p-6 font-poppins">
  <p className="text-black font-medium mb-1">Name</p>
  <input
    type="text"
    name="name"
    defaultValue={food.foodName}
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
    required
  /> <br />
<p className="text-black font-medium mb-1">Image URL</p>
  <input
    type="text"
    name="imageUrl"
    defaultValue={food.foodImage}
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
    required
  /> <br />
  <p className="text-black font-medium mb-1">Quantity</p>
  <input
    type="text"
    name="quantity"
    defaultValue={food.foodQuantity}
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />
  <p className="text-black font-medium mb-1">Pick up location</p>
  <input
    type="text"
    name="pickup"
    defaultValue={food.pickupLocation}
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />
  <p className="text-black font-medium mb-1">Expiry date</p>
  <input
    type="date"
    name="expirydate"
    defaultValue={food.expiredDate}
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />
  <p className="text-black font-medium mb-1">Food status</p>
  <input
    type="text"
    name="foodStatus"
    defaultValue="available"
    readOnly
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />
 
  <p className="text-black font-medium mb-1">Additional Note</p>
  <input
    type="text"
    name="note"
    defaultValue={food.additionalNotes}
    className="py-2 px-2 rounded-md w-full h-20 focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />

<p className="text-black font-medium mb-1">Submit as: {user.displayName}</p>
  <input
    type="text"
    name="date"
    defaultValue={user.email}
    readOnly
    className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
  /> <br />

 

  <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Submit</button>
</form>           
    </div>
    );
};

export default UpdateFood;