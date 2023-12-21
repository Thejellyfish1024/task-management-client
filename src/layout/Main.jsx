import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;