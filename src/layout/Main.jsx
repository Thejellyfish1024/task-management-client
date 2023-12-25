import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Main;