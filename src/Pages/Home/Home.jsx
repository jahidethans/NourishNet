import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nourishnet-Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;