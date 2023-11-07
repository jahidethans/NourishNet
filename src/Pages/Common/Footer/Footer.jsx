import { Link } from "react-router-dom";
import bkash from '../../../assets/bkash.png'
import foodpanda from '../../../assets/foodPanda.png'
import pathao from '../../../assets/pathao.png'
import {FaFacebook} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";



const Footer = () => {
    return (
        <div className="w-full bg-gray-100 pt-16 border-black mt-2 border-t ">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
           
            <div className="flex justify-between flex-col md:flex-row">
            <div className="text-left">
            <h1>NOURISHNET.</h1>
                    <p className="text-base font-medium text-gray-700 mb-8">Mission: Connecting Communities Through Food</p>
                </div>
                <div className="text-left text-2xl font-semibold">
                    <p className="text-center text-[20px] mb-2">Partners</p> <div className="flex justify-center items-center gap-4">
                    <img className="w-20 h-5 " src={foodpanda} alt="" />
                    <img className="w-20 h-10" src={pathao} alt="" />
                    <img className="w-20 h-12" src={bkash} alt="" />
                    </div>
                </div>
            </div>


            <div className="footer-content flex flex-col justify-between mt-4">

            <div >
                    
                
                <div className="text-2xl hidden">
                    <p className="text-center text-[20px]">Partners</p> <div className="flex justify-center items-center gap-4">
                    <img className="w-20 h-5 " src={foodpanda} alt="" />
                    <img className="w-20 h-10" src={pathao} alt="" />
                    <img className="w-20 h-12" src={bkash} alt="" />
                    </div>
                </div>
                
                
                
                </div>

               
                
                <div className="flex justify-between flex-col md:flex-row items-center font-semibold mt-8">
                <div className="legal-links flex flex-col text-center md:text-left space-y-4 mb-2">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/terms-of-service">Sign Up</a>
                </div>
                <div>
                <p className="text-center text-[20px] mt-9 mb-4">Contact Us</p> 
                 
                 <div className="social-links flex justify-around gap-4 mb-8">
                     <a href="https://facebook.com/yourplatform" ><FaFacebook className="text-2xl"></FaFacebook></a>
                     <a href="https://instagram.com/yourplatform" ><FaInstagram className="text-2xl"></FaInstagram></a>
                     <a href="https://twitter.com/yourplatform"><FaSquareXTwitter className="text-2xl"></FaSquareXTwitter></a>
                 </div>
                </div>
                <div>
                <Link className="newsletter ">
                    Subscribe to Our Newsletter
                </Link>
                 <div className="flex items-center"><input type="text" className="border rounded-l-md p-2"/><button className="rounded-l-none p-2">Submit</button></div>
                </div>
                </div>

                
               

                
            </div>
            </div>
            <div className="copyright bg-black text-center  text-white py-2 mt-6">
                    &copy; {new Date().getFullYear()} Nourishnet.
                </div>
        </div>
    );
};

export default Footer;