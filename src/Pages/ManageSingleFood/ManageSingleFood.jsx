import  { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {

    const { user } = useContext(AuthContext);
    
    

    const food = useLoaderData();
    
    
    
    console.log(`from manage pageee`, food);


      return (
          <div>manage this request</div>
      );
  };

export default ManageSingleFood;