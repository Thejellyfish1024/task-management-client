import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [showProfile, setShowProfile] = useState(false);
    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white py-2 px-4 rounded-lg font-bold " :
            "hover:bg-[#a284c4] hover:text-white rounded-lg  py-2 px-4 font-bold"} >
            <li><p>Home</p></li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white py-2 px-4 rounded-lg font-bold " :
            "hover:bg-[#b486e8] hover:text-white rounded-lg py-2 px-4 font-bold"} >
            <li><p>Contact</p></li>
        </NavLink>
        {
            user &&
            <NavLink to="/dashboard/home" className={({ isActive }) => isActive ?
                "bg-[#560bad] text-white py-2 px-4 rounded-lg font-bold " :
                "hover:bg-[#b486e8] hover:text-white rounded-lg py-2 px-4 font-bold"} >
                <li><p>Dashboard</p></li>
            </NavLink>

        }
        <NavLink to="/pricing" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white py-2 px-4 rounded-lg font-bold " :
            "hover:bg-[#a284c4] hover:text-white rounded-lg  py-2 px-4 font-bold"} >
            <li><p>Pricing</p></li>
        </NavLink>
    </>
    return (
        <div>
            <div className=" max-h-[768px] w-screen hidden lg:block">
                <nav
                    className="fixed top-0 z-10 block w-full max-w-full px-4 py-2  bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                    <div className="flex items-center max-w-7xl mx-auto justify-between text-blue-gray-900">
                        <button
                            className=" focus:bg-transparent disabled:opacity-50 disabled:shadow-none lg:hidden"
                            type="button">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
                                    strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </span>
                        </button>
                        <p
                            className="mr-4 block cursor-pointer py-1.5 font-sans text-xl font-bold leading-relaxed text-inherit antialiased">
                            ProTask
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="hidden mr-4 lg:block">
                                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
                                    {navLinks}
                                </ul>
                            </div>
                            <div className="flex items-center gap-x-1">
                                {
                                    user ?
                                        <button onClick={() => setShowProfile(!showProfile)}>

                                            {
                                                user?.photoURL ?
                                                    <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="not found" />
                                                    :
                                                    <FaUserCircle className='text-4xl'></FaUserCircle>
                                            }
                                        </button>
                                        :
                                        <Link to='/login'>
                                            <button
                                                className=" select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                                                type="button">
                                                <span>Sign in</span>
                                            </button>
                                        </Link>
                                }
                            </div>
                        </div>
                        <div className={`text-end bg-gray-300 z-30 p-5 top-16 right-5 rounded-lg absolute flex justify-center w-60 ${showProfile ? '' : 'hidden'}`}>
                            <div className="w-full">
                                <div className="flex justify-center w-full">
                                    <div>
                                        {
                                            user?.photoURL ?
                                                <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="not found" />
                                                :
                                                <FaUserCircle className='text-4xl'></FaUserCircle>

                                        }


                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <h5 className='text-lg text-black font-semibold mb-2'>{user?.displayName}</h5>
                                </div>
                                <p className="text-center mb-2 text-gray-500">{user?.email}</p>
                                <div className="flex justify-center">
                                    <button onClick={() => {
                                        logOut();
                                        setShowProfile(!showProfile)
                                        toast.success('User logged out!!')
                                    }} className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="fixed w-full top-0 flex pt-3 items-center  justify-between lg:hidden 
            z-10 max-w-full  bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ProTask</a>
                </div>

                <div className="pr-7">
                    {
                        user ?
                            <button onClick={() => setShowProfile(!showProfile)}>

                                {
                                    user?.photoURL ?
                                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="not found" />
                                        :
                                        <FaUserCircle className='text-4xl'></FaUserCircle>
                                }
                            </button>
                            :
                            <Link to='/login'>
                                <button
                                    className=" select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                                    type="button">
                                    <span>Sign in</span>
                                </button>
                            </Link>
                    }
                </div>
                <div className={`text-end bg-gray-300 z-30 p-5 top-16 right-5 rounded-lg absolute flex justify-center w-60 ${showProfile ? '' : 'hidden'}`}>
                    <div className="w-full">
                        <div className="flex justify-center w-full">
                            <div>
                                {
                                    user?.photoURL ?
                                        <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="not found" />
                                        :
                                        <FaUserCircle className='text-4xl'></FaUserCircle>

                                }


                            </div>
                        </div>
                        <div className="flex justify-center">
                            <h5 className='text-lg text-black font-semibold mb-2'>{user?.displayName}</h5>
                        </div>
                        <p className="text-center mb-2 text-gray-500">{user?.email}</p>
                        <div className="flex justify-center">
                            <button onClick={() => {
                                logOut();
                                setShowProfile(!showProfile)
                                toast.success('User logged out!!')
                            }} className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;