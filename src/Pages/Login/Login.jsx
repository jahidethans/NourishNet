import { Link, useLocation, useNavigate } from "react-router-dom";


import toast from "react-hot-toast";
import { useState } from "react";
import SocialLogin from "../Common/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const [isloading, setIsloading] = useState(false);


  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(`login page`,location);

  const handleSignIn = (event)=>{
     event.preventDefault();
     const email = event.target.email.value;
     const password = event.target.password.value;
     const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6}$/;

     // password validation
     if(!passwordRegex.test(password)){
       toast.error("Password must be atleast one special character, capital letter and 6 characters.")
       return;
   }
  

  //  sign in
  setIsloading(true);
  loginUser(email, password)
  .then(res=>{toast.success('Logged in successfully');
  navigate(location?.state ? location.state : '/')})
  .catch(error=>{
    toast.error(error.message)
  })
  setIsloading(false);


  }

  





    return (
      <div className="bg-gray-800">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">Sign in with</p>
           <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">Or sign in with credentials</p>
         
         
          <form onSubmit={handleSignIn} className="mt-6">
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                
                type="text"
                name="email"
                placeholder="Email"
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.780a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712v-17a1 1 0 011.5-.87 9.005 9.005 0 005.168 18c1.836 0 3.517-.689 4.806-1.824a1 1 0 01.005-1.419 1 1 0 00-.499-.872 8.983 8.983 0 01-9.306-.105z" />
                </svg>
              </div>
            </div>

            
            <div className="relative mt-3">
             
             
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
               
                type="text"
                name="password"
                placeholder="Password"
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
            <p className="mt-4 italic text-gray-500 font-light text-xs">Password strength: <span className="font-bold text-green-400">strong</span></p>
            <div className="mt-4 flex items-center text-gray-500">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label className="text-sm" htmlFor="remember">Remember me.</label>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Sign In</button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-dimWhite">Don't have an account! <Link to='/register'><span className="text-indigo-600 underline"> Register</span></Link> </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  