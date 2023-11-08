import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ManageMyFoods = () => {

    const {user} = useContext(AuthContext);
    const [food, setFood] = useState([]);

     const url = `http://localhost:5000/managefoods?email=${user.email}`

     useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>console.log(data))
     },[])

    return (
        <div>
            manage my foods in tabular format
        </div>
    );
};

export default ManageMyFoods;