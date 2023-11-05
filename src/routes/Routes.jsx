import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
            path: '/',
            element: <Banner></Banner>
        },
    ]
      },
])

export default Routes;