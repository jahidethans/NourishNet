import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
            path: '/',
            element: <Banner></Banner>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addfood',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: '/allfoods',
            element: <AvailableFoods></AvailableFoods>
        }
    ]
      },
])

export default Routes;