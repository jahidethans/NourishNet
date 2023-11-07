import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
        }
    ]
      },
])

export default Routes;