/* eslint-disable react/no-unescaped-entities */
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const Contact = () => {

    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        Swal.fire({
            title: "Send your message?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(data)
                reset()
                Swal.fire({
                    title: "Sent!",
                    text: "Your message has been sent.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="py-24 max-w-7xl mx-auto ">
            <h2 className="lg:text-5xl text-3xl italic font-bold text-center uppercase">Contact</h2>
            <div className="flex flex-col lg:flex-row mt-20 gap-6 items-center">
                <div className="lg:w-2/5 w-4/5 text-center lg:text-left">
                    <h4 className="text-accent text-xl font-semibold">Get In Touch</h4>
                    <h2 className="lg:text-4xl text-3xl font-semibold mt-4">Let's Talk For your
                        <span className="lg:block lg:mt-2 text-[#80b918]"> Next Level Ideas</span></h2>
                    <p className="mt-6 text-lg">Transforming ideas into digital reality. Let's do something amazing together</p>
                    <div>
                        <h4 className="text-xl font-bold text-sky-400 mt-8">Connect With Us</h4>
                        <div className="text-lg font-semibold flex justify-center lg:justify-normal items-center gap-5 lg:pl-5 mt-5">
                            <MdEmail className="text-3xl text-[#80b918]"></MdEmail>
                            <p className="hover:text-[#80b918]">xyz@gmail.com</p>
                        </div>
                        <div className="text-lg font-semibold flex justify-center lg:justify-normal items-center gap-5 lg:pl-5 mt-5">
                            <FaPhoneFlip className="text-3xl text-[#80b918]"></FaPhoneFlip>
                            <p className="hover:text-[#80b918]">+880-01991981115</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-xl font-bold text-sky-400 mt-8">Follow Us</h4>
                        <div className="mt-4 lg:pl-5 flex gap-4 justify-center lg:justify-normal">
                            <div className="bg-gray-200 hover:bg-[#80b918] text-black p-2 w-fit rounded-full">
                                <FaFacebookF className="text-2xl"></FaFacebookF>
                            </div>
                            <div className="bg-gray-200 hover:bg-[#80b918] text-black p-2 w-fit rounded-full">
                                <FaLinkedinIn className="text-2xl"></FaLinkedinIn >
                            </div>
                            <div className="bg-gray-200 hover:bg-[#80b918] text-black p-2 w-fit rounded-full">
                                <FaGithub className="text-2xl"></FaGithub >
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lg:w-3/5 w-full p-5 lg:p-0 mt-8 lg:mt-0">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="bg-black border border-[#80b918] p-10 rounded-xl text-white">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="w-full">
                                <p className="text-xl font-semibold">Full Name <span className="text-[#80b918]">*</span></p>
                                <input type="text" name="name"  {...register("name", { required: true })} placeholder="Name" className="py-3 rounded-xl pl-4 mt-4 w-full" />
                                {errors.name && <span className="text-red-600 font-semibold ">This field is required</span>}
                            </div>
                            <div className="w-full">
                                <p className="text-xl font-semibold">Email Address  <span className="text-[#80b918]">*</span></p>
                                <input type="email" name="email"  {...register("email", { required: true })} placeholder="Email" className="py-3 rounded-xl pl-4 mt-4 w-full" />
                                {errors.email && <span className="text-red-600 font-semibold ">This field is required</span>}
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col md:flex-row gap-5 mt-6">
                            <div className="w-full">
                                <p className="text-xl font-semibold">Phone Number</p>
                                <input type="text" name="phone"  {...register("phone")} placeholder="Phone Number" className="py-3 rounded-xl pl-4 mt-4 w-full" />

                            </div>
                            <div className="w-full">
                                <p className="text-xl font-semibold">Subject <span className="text-[#80b918]">*</span></p>
                                <input type="text" name="subject"  {...register("subject", { required: true })} placeholder="Subject" className="py-3 rounded-xl pl-4 mt-4 w-full" />
                                {errors.subject && <span className="text-red-600 font-semibold ">This field is required</span>}
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl font-semibold">Write your message<span className="text-[#80b918]"> *</span></p>
                            <textarea type="text" name="message"  {...register("message", { required: true })} placeholder="Write message" className="py-3 rounded-xl pl-4 mt-4 w-full h-32" />
                            {errors.message && <span className="text-red-600 font-semibold ">This field is required</span>}
                        </div>
                        <button className="btn px-8 mt-4 bg-[#80b918] hover:bg-gray-800 text-black hover:text-white  text-lg font-bold">Send Us Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;