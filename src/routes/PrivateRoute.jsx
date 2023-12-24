/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    // console.log(user,loading);

    if (loading) {
        return (
            <div className="text-center mt-32 ">
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if(user){
        return children;
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;