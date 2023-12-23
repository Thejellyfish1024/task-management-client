import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
              <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#f5f3f4] ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#d8f3dc] p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        {dashboardLinks}
                    </ul>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;