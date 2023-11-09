import { BsPerson } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const location = useLocation();
    const staticNavbar = location.pathname !== '/';

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    console.log(location);
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

    const handleLogout = () => {
        logOut()

        toast.success('Logged out successfully');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex w-full justify-between items-center h-20 px-4 ${staticNavbar ? 'static' : 'fixed'} z-10 ${staticNavbar ? 'text-black ' : 'text-white '} `}>
            <div  >
                <h1 className={logo ? 'hidden' : 'block'}>NOURISHNET.</h1>
            </div>
            <ul className='hidden md:flex gap-6 px-5'>
                <Link to='/'>Home</Link>
                {
                    user?.email ? <><Link to='/allfoods'>Available Foods</Link>
                    <Link to='/addfood'>Add Food</Link>
                    <Link to='/managemyfoods'>Manage My Foods</Link>
                    <Link to='/myfoodrequest'>My Food Request</Link></> :
                    <Link to='/allfoods'>Available Foods</Link>
                }
            </ul>

            <div className='hidden md:flex'>
                {
                    user?.email ?
                        <>
                            <button
                                onClick={toggleDropdown}
                                id="dropdownAvatarNameButton"
                                data-dropdown-toggle="dropdownAvatarName"
                                className="flex items-center text-sm font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                                type="button"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 mr-2 rounded-full"
                                    src={user.photoURL}
                                    alt="user photo"
                                />
                                {user.displayName}
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-12 w-48 rounded-md shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 p-2">
                                    <div className="py-1 text-center">
                                        <div className='py-4'>
                                            <p className='text-sm'>{user.displayName}</p>
                                            <p className='text-sm'>{user.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>


                        :
                        <Link to='/login'><BsPerson size={20}></BsPerson></Link>
                }

            </div>

            <div className='md:hidden z-20' onClick={handleNav}>
                {nav ? <AiOutlineClose size={20}></AiOutlineClose> : <HiOutlineMenuAlt4 size={20}></HiOutlineMenuAlt4>}

            </div>

            {/* Mobile menu dropdown */}
            <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col z-10' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col '}>
                <ul className='text-black flex flex-col space-y-3'>
                    <h1>NOURISHNET.</h1>
                    {
                        user?.email ? <div className='py-4 flex flex-col items-center space-y-3'>
                            <img
                                    className="w-8 h-8 mr-2 rounded-full"
                                    src={user.photoURL}
                                    alt="user photo"
                                />
                        <p className='text-sm'>{user.displayName}</p>
                        <p className='text-sm'>{user.email}</p>
                    </div> : ''
                    }
                    <Link to='/' className='border-b border-black pb-2'>Home</Link>
                    {
                    user?.email ? <><Link to='/allfoods' className='border-b border-black pb-2'>Available Foods</Link>
                    <Link to='/addfood' className='border-b border-black pb-2'>Add Food</Link>
                    <Link to='/managemyfoods' className='border-b border-black pb-2'>Manage My Foods</Link>
                    <Link to='/myfoodrequest' className='border-b border-black pb-2'>My Food Request</Link></> :
                    <Link to='/allfoods' className='border-b border-black pb-2'>Available Foods</Link>
                }
                    <div className='flex'>
                        {
                            user?.email ? <button onClick={handleLogout} className='w-full my-4 p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md'>Sign Out</button> : <Link to='/login' className='w-full my-4 p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md'>Sign in</Link>
                        }
                    </div>
                   
                            
                       
                    
                </ul>
            </div>

        </div>
    );
};

export default Navbar;