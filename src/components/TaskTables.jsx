
import Swal from "sweetalert2";
import useTasks from "../hooks/useTasks";
import useAxiosPublic from "../hooks/useAxiosPublic";
import UpdateTask from "./UpdateTask";
import { useState } from "react";



const TaskTables = () => {

    // const {user} = useContext(AuthContext)
    const [updateData, setUpdateData] = useState({})
    const axiosPublic = useAxiosPublic()
    const [statusId, setStatusId] = useState(null)

    const { data, refetch } = useTasks();
    console.log(data);
    const todoTasks = data?.filter(task => task?.status === 'todo')
    const ongoingTasks = data?.filter(task => task?.status === 'ongoing')
    const completedTasks = data?.filter(task => task?.status === 'completed')
    console.log(todoTasks, ongoingTasks, completedTasks);

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/task/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleUpdate = task => {
        document.getElementById('my_modal_5').showModal()
        console.log(task);
        setUpdateData(task)
    }

    const handleStatus = id => {
        document.getElementById('my_modal_6').showModal()
        console.log(id);
        setStatusId(id)
    }

    const handleStatusUpdate = e => {
        e.preventDefault();
        document.getElementById('my_modal_6').close()
        const newStatus = e.target.status.value;
        console.log(newStatus, statusId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then( async(result) => {
            if (result.isConfirmed) {

                await axiosPublic.patch(`/task-status/${statusId}`, {newStatus})
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: "Status has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
        
    }


    return (
        <div className="mt-16 space-y-8">


            {/* todo */}
            <div>
                <h2 className="text-[#BB34F5] text-2xl uppercase mb-5 font-bold">To-Do Lists</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-lg text-center font-bold">Task Name</th>
                                <th className="text-lg text-center font-bold">Descriptions</th>
                                <th className="text-lg text-center font-bold">Priority</th>
                                <th className="text-lg text-center font-bold">Deadlines</th>
                                <th className="text-lg text-center font-bold">Status</th>
                                <th className="text-lg text-center font-bold">Action</th>
                                <th className="text-lg text-center font-bold">Action</th>

                            </tr>
                        </thead>
                        {
                            todoTasks?.length > 0 &&
                            <tbody>
                                {
                                    todoTasks?.map(todo => <tr key={todo?._id}
                                        className=" bg-gray-300">
                                        <td className="text-center">{todo?.taskName}</td>
                                        <td className="text-center max-w-72">{todo?.description}</td>
                                        <td className="text-center">{todo?.priority}</td>
                                        <td className="text-center">
                                            <p>
                                                <span className="block">{todo?.startingDate?.split('T')[0]}</span>
                                                to
                                                <span className="block">{todo?.deadline?.split('T')[0]}</span>
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleStatus(todo?._id)}
                                                className='bg-violet-500 hover:bg-black text-white py-2 px-4 rounded-lg'>To-do</button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(todo?._id)} className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleUpdate(todo)} className='bg-green-600 hover:bg-black text-white py-2 px-4 rounded-lg'>Update</button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>

                        }
                    </table>
                    {
                        todoTasks?.length === 0 &&
                        <h2 className="text-xl font-bold text-center w-full mt-6">No Task Added Yet</h2>
                    }
                </div>
            </div>
            {/* ongoing */}
            <div>
                <h2 className="text-[#D3A256] text-2xl uppercase mb-5 font-bold">Ongoing Lists</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-lg text-center font-bold">Task Name</th>
                                <th className="text-lg text-center font-bold">Descriptions</th>
                                <th className="text-lg text-center font-bold">Priority</th>
                                <th className="text-lg text-center font-bold">Deadlines</th>
                                <th className="text-lg text-center font-bold">Status</th>
                                <th className="text-lg text-center font-bold">Action</th>
                                <th className="text-lg text-center font-bold">Action</th>

                            </tr>
                        </thead>
                        {
                            ongoingTasks?.length > 0 &&
                            <tbody>
                                {
                                    ongoingTasks?.map(ongoing => <tr key={ongoing}
                                        className=" bg-gray-300">
                                        <td className="text-center">{ongoing?.taskName}</td>
                                        <td className="text-center max-w-72">{ongoing?.description}</td>
                                        <td className="text-center">{ongoing?.priority}</td>
                                        <td className="text-center">
                                            <p>
                                                <span className="block">{ongoing?.startingDate?.split('T')[0]}</span>
                                                to
                                                <span className="block">{ongoing?.deadline?.split('T')[0]}</span>
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <button className='bg-orange-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Ongoing</button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(ongoing?._id)} className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
                                        </td>
                                        <td className="text-center">
                                            <button className='bg-green-600 hover:bg-black text-white py-2 px-4 rounded-lg'>Update</button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>

                        }
                    </table>
                    {
                        ongoingTasks?.length === 0 &&
                        <h2 className="text-xl font-bold text-center w-full mt-6">No Task Added Yet</h2>
                    }
                </div>
            </div>
            {/* completed */}
            <div>
                <h2 className="text-[#FE4880] text-2xl uppercase mb-5 font-bold">Completed Lists</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-lg text-center font-bold">Task Name</th>
                                <th className="text-lg text-center font-bold">Descriptions</th>
                                <th className="text-lg text-center font-bold">Priority</th>
                                <th className="text-lg text-center font-bold">Deadlines</th>
                                <th className="text-lg text-center font-bold">Status</th>
                                <th className="text-lg text-center font-bold">Action</th>
                                <th className="text-lg text-center font-bold">Action</th>

                            </tr>
                        </thead>
                        {
                            completedTasks?.length > 0 &&
                            <tbody>
                                {
                                    completedTasks?.map(completed => <tr key={completed}
                                        className=" bg-gray-300">
                                        <td className="text-center">{completed?.taskName}</td>
                                        <td className="text-center max-w-72">{completed?.description}</td>
                                        <td className="text-center">{completed?.priority}</td>
                                        <td className="text-center">
                                            <p>
                                                <span className="block">{completed?.startingDate?.split('T')[0]}</span>
                                                to
                                                <span className="block">{completed?.deadline?.split('T')[0]}</span>
                                            </p>
                                        </td>
                                        <td className="text-center">
                                            <button className='bg-green-600 hover:bg-black text-white py-2 px-4 rounded-lg'>Completed</button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleDelete(completed?._id)} className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
                                        </td>
                                        <td className="text-center">
                                            <button className='bg-green-600 hover:bg-black text-white py-2 px-4 rounded-lg'>Update</button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>

                        }
                    </table>
                    {
                        completedTasks?.length === 0 &&
                        <h2 className="text-xl font-bold text-center w-full mt-6">No Task Added Yet</h2>
                    }
                </div>
            </div>

            {/* update modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <UpdateTask updateData={updateData} refetch={refetch}></UpdateTask>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Status!</h3>
                    <form onSubmit={handleStatusUpdate}>
                        <select name="status" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md'>
                            <option value="todo">To-do</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button className="btn bg-green-700 text-white mt-4 text-center">Update</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-red-500 text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>


    );
};

export default TaskTables;