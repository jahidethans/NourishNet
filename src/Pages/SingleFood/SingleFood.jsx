import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    const [openModal, setOpenModal] = useState(false);
    console.log(food);

    function onCloseModal() {
        setOpenModal(false);
        
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
                <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
               
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
            </div>
            </div>
        </div>
    );
};

export default SingleFood;