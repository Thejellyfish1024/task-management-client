import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AddTask = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { register, formState: { errors }, handleSubmit , reset} = useForm()
    const onSubmit = async (data) => {
        // console.log(data);
        const taskName = data?.taskName;
        const priority = data?.priority;
        const description = data?.description;
        const deadline = data?.deadline;
        const startingDate = new Date();
        const email = user?.email;
        const status = 'todo';

        const newTask = {
            taskName, priority, description, deadline, startingDate,email, status
        }
        console.log(newTask);

        const res = await axiosPublic.post('/new-task',newTask)
            console.log(res.data);
            if(res?.data?.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully added the item",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

    }
    return (
        <div className="flex justify-center items-center h-screen">
             <div className="w-2/3 md:p-12 bg-black   rounded-md mb-16">
                    <form className=" p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                        {/*  */}
                        <div className="flex flex-col md:flex-row gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold text-white'>Task Title</h4>
                                <input type="text" {...register("taskName", { required: true })} name="taskName" placeholder='Title' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors?.taskName && <span className='text-red-500'>Title is required</span>}
                            </div>
                            
                        </div>
                        {/*  */}
                       
                     
                        <div className="flex flex-col md:flex-row  gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold text-white'>Deadline</h4>
                                <input type="datetime-local" {...register("deadline", { required: true })} name="deadline" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors?.deadline && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold text-white'>Priority</h4>
                                <select   {...register("priority", { required: true })} name="priority" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md'>
                                    <option disabled value='default'>Select</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                                {errors?.priority && <span className='text-red-500'>This field is required</span>}
                            </div>

                        </div>
                        {/*  */}
                       
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold text-white'>Task Description</h4>
                            <textarea type="text" {...register("description", { required: true })} name="description"
                                placeholder='Description' className='py-3 h-40 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors?.description && <span className='text-red-500'>Description is required</span>}
                        </div>
                        {/*  */}

                        <div className='text-center mt-10'>
                            <button className='hover:bg-white hover:text-black bg-[#560bad] w-1/2 p-2 text-white font-bold rounded-full uppercase'>
                                Add Task
                            </button>
                        </div>
                    </form>


                </div>
        </div>
    );
};

export default AddTask;