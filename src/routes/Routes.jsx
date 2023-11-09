import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import SingleFood from "../Pages/SingleFood/SingleFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";
import UpdateFood from "../Pages/AddFood/UpdateFood";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
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
            },
            {
                path: '/allfoods/:id',
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
            },
            {
                path: '/managemyfoods',
                element: <ManageMyFoods></ManageMyFoods>
            },
            {
                path: '/myfoodrequest',
                element: <MyFoodRequest></MyFoodRequest>
            },
            {
                path: '/allrequests/foods/:foodId',
                element: <ManageSingleFood></ManageSingleFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/allrequests/foods/${params.foodId}`),
                
            },
            {
                path: '/updatefood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params})=>fetch(`http://localhost:5000/allfoods/${params.id}`)
            }
        ]
    },
])

export default Routes;