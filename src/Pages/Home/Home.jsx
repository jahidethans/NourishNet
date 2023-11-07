import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;