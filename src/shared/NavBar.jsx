import { NavLink } from "react-router-dom";


const NavBar = () => {
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
        <NavLink to="/about" className={({ isActive }) => isActive ?
            "bg-[#560bad] text-white py-2 px-4 rounded-lg font-bold " : 
            "hover:bg-[#a284c4] hover:text-white rounded-lg  py-2 px-4 font-bold"} >
            <li><p>About</p></li>
        </NavLink>
    </>
    return (
        <div>
            <div className=" max-h-[768px] w-screen">
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
                        <a href="#"
                            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                            Material Tailwind
                        </a>
                        <div className="flex items-center gap-4">
                            <div className="hidden mr-4 lg:block">
                                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
                                    {navLinks}
                                </ul>
                            </div>
                            <div className="flex items-center gap-x-1">
                                
                                <button
                                    className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button">
                                    <span>Sign in</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default NavBar;