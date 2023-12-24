/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const UpdateTask = ({updateData, refetch}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()

    // console.log(updateData);

    const onSubmit = async (data) => {
        console.log(data);
        document.getElementById('my_modal_5').close()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosPublic.patch(`/task/${updateData?._id}`, data)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.modifiedCount > 0) {
                            reset()
                              Swal.fire({
                                title: "Updated!",
                                text: "Item has been updated.",
                                icon: "success"
                              });
                              refetch();
                        }
                    })


            }
        });
    }

    return (
        <div className="p-5">
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action w-full">
                        <form className="w-full p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                            {/*  */}
                            <div className=" w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold '>Task Title</h4>
                                    <input defaultValue={updateData?.taskName} type="text" {...register("taskName")} name="taskName" placeholder='Title' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                </div>
                            </div>
                            {/*  */}


                            <div className=" w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold '>Deadline</h4>
                                    <input defaultValue={updateData?.deadline} type="datetime-local" {...register("deadline", { required: true })} name="deadline" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors?.deadline && <span className='text-red-500'>This field is required</span>}
                               
                                </div>

                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold '>Priority</h4>
                                    <select defaultValue={updateData?.priority}  {...register("priority", { required: true })} name="priority" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md'>
                                        {/* <option disabled value='default'>Select</option> */}
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>
                                    </select>
                                    {errors?.priority && <span className='text-red-500'>This field is required</span>}
                                   
                                </div>

                            </div>
                            {/*  */}

                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Task Description</h4>
                                <textarea defaultValue={updateData?.description} type="text" {...register("description",  { required: true })} name="description"
                                    placeholder='Description' className='py-3 h-28 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                               {errors?.description && <span className='text-red-500'>This field is required</span>}
                            </div>
                            {/*  */}

                            <div className='text-center mt-10'>
                                <button className='hover:bg-black hover:text-white bg-[#560bad] w-1/2 p-2 text-white font-bold rounded-full uppercase'>
                                    Update
                                </button>
                            </div>
                        </form>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button  className="btn bg-red-500 text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateTask;