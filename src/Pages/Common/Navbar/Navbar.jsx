import { BsPerson} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const staticNavbar = location.pathname !== '/';


    console.log(location);
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
        setLogo(!logo);
    }

    return (
        <div className={`flex w-full justify-between items-center h-20 px-4 ${staticNavbar ?  'static' : 'fixed' } z-10 ${staticNavbar ?  'text-black ' : 'text-white ' } `}>
            <div  >
                <h1 className={logo ? 'hidden' : 'block'}>NOURISHNET.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Available Foods</li>
                <li>Add Food</li>
                <li>Manage My Foods</li>
                <li>My Food Request</li>     
            </ul>
           
           <div className='hidden md:flex'>
            <Link to='login'><BsPerson size={20}></BsPerson></Link>
           </div>

           <div className='md:hidden z-20' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20}></AiOutlineClose> : <HiOutlineMenuAlt4 size={20}></HiOutlineMenuAlt4>}
            
           </div>

            {/* Mobile menu dropdown */}
           <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col z-10' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col ' }>
            <ul className='text-black'>
            <h1>NOURISHNET.</h1>
                <li className='border-b border-black '>Home</li>
                <li className='border-b border-black'>Available Foods</li>
                <li className='border-b border-black'>Add Food</li>
                <li className='border-b border-black'>Manage My Foods</li>
                <li className='border-b border-black'>My Food Request</li>  
                <div className='flex'>
                    <Link to='/login' className='w-full my-4 p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md'>Sign in</Link>
                </div>
            </ul>
           </div>
            
        </div>
    );
};

export default Navbar;