import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";
import Login from "../Pages/Login/Login";

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
        }
    ]
      },
])

export default Routes;