import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AddTask from "../pages/Dashboard/AddTask";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/ContactUs/Contact";
import Pricing from "../pages/Pricing/Pricing";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/pricing',
            element:<Pricing></Pricing>
        },
      ],
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"/dashboard/home",
          element:<DashboardHome></DashboardHome>
        },
        {
          path:"/dashboard/add-task",
          element:<AddTask></AddTask>
        }
      ]
    }
  ]);