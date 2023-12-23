/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";



const Login = () => {

    const { signInUser, googleSigning } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result?.user) {
                    toast.success('Successfully Logged In!!')
                    navigate(location?.state ? location.state : '/dashboard')
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    const handleGoogle = () => {
        googleSigning()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!!')
                navigate(location?.state ? location.state : '/dashboard')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <div className="w-screen h-screen flex p-5 md:p-0 justify-center items-center bg-gray-300">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">

                <div
                    className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Sign In
                    </h3>
                </div>
                <form  onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="email" required name="email"
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="password" required name="password"
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <div className="-ml-2.5">
                            <div className="inline-flex items-center">
                                <label htmlFor="checkbox" className="relative flex items-center p-3 rounded-full cursor-pointer">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                        id="checkbox" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 "
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="flex justify-center mb-2 font-sans text-sm antialiased font-light leading-normal text-inherit">
                    Don't have an account?
                    <Link to='/register'>
                        <span
                            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Sign up
                        </span>
                    </Link>
                </p>
                <div className='px-6 w-full flex justify-center my-2'>
                    <button onClick={handleGoogle} className='hover:bg-black hover:text-white border border-black flex justify-center gap-3  items-center rounded-full py-2 px-8 font-bold w-full '>
                        <FcGoogle className='text-2xl'></FcGoogle>
                        <span> Continue with Google</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;