import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";


const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const [showProfile, setShowProfile] = useState(false);
    const dashboardLinks = <>
        <NavLink to="home" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white rounded-lg font-bold " :
            "hover:bg-[#a284c4] hover:text-white rounded-lg   font-bold"} >
            <li><p>Dashboard</p></li>
        </NavLink>
        <NavLink to="add-task" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white mt-2 rounded-lg font-bold " :
            "hover:bg-[#a284c4] hover:text-white rounded-lg mt-2   font-bold"} >
            <li><p>Add Task</p></li>
        </NavLink>
    </>
    return (
        <div>
            <Toaster></Toaster>
            <div>
                <div className="drawer lg:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-[#f5f3f4] ">
                        {/* Page content here */}
                        <div className="flex items-center gap-2 ml-5 mt-4">
                            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                                <MdOutlineDashboardCustomize size={24} className="text-blue-600"></MdOutlineDashboardCustomize>
                            </label>
                            <p className="font-bold text-blue-600">ProTask</p>
                        </div>
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-[#d8f3dc] p-4 w-80 min-h-full  text-base-content">
                            {/* Sidebar content here */}
                            {
                                user &&
                                <div className="flex items-center gap-5 mt-2 mb-4 ">
                                    <button onClick={() => setShowProfile(!showProfile)}>

                                        {
                                            user?.photoURL ?
                                                <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="not found" />
                                                :
                                                <FaUserCircle className='text-4xl'></FaUserCircle>
                                        }
                                    </button>
                                    <p className="text-lg font-bold">{user?.displayName}</p>
                                </div>
                            }
                            <div className={`text-end bg-gray-300 z-30 p-5 top-20 right-5 rounded-lg absolute flex justify-center w-60 ${showProfile ? '' : 'hidden'}`}>
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
                            {/* links */}
                            {dashboardLinks}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;