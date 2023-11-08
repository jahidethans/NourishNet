import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {

    const { user } = useContext(AuthContext);
    
    

    const {foods} = useLoaderData();
    
    
    
    console.log(`from manage pageee`, foods);
      return (
          <div>manage this request</div>
      );
  };

export default ManageSingleFood;