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
import FeaturedFoods from "../Pages/Home/FeaturedFoods";
import About from "../Pages/Home/About";
import CommentSection from "../Pages/Home/CommentSection";
import ErrorPage from "../Pages/Common/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: (
                    <>
                      <Banner />
                      <FeaturedFoods />
                      <About></About>
                      <CommentSection></CommentSection>
                    </>
                  ),
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
                element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://nourish-net-server.vercel.app/allfoods/${params.id}`)
            },
            {
                path: '/managemyfoods',
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: '/myfoodrequest',
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
            },
            {
                path: '/allrequests/foods/:foodId',
                element: <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://nourish-net-server.vercel.app/allrequests/foods/${params.foodId}`),
                
            },
            {
                path: '/updatefood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params})=>fetch(`https://nourish-net-server.vercel.app/allfoods/${params.id}`)
            }
        ]
    },
])

export default Routes;