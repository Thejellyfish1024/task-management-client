
import useTasks from "../hooks/useTasks";


const TaskTables = () => {
    // const {user} = useContext(AuthContext)
    const {data} = useTasks();
    console.log(data);
    const todoTasks = data?.filter(task => task?.status === 'todo')
    const ongoingTasks = data?.filter(task => task?.status === 'ongoing')
    const completedTasks = data?.filter(task => task?.status === 'completed')
    console.log(todoTasks,ongoingTasks,completedTasks);

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
                                        className="hover:bg-[#BB34F5] hover:text-white bg-gray-300">
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
                                        <button className='bg-violet-500 hover:bg-black text-white py-2 px-4 rounded-lg'>To-do</button>
                                        </td>
                                        <td className="text-center">
                                        <button className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
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
                                        className="hover:bg-[#D3A256] hover:text-white bg-gray-300">
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
                                        <button className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
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
                                        className="hover:bg-[#FE4880] hover:text-white bg-gray-300">
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
                                        <button className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
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
        </div>
    );
};

export default TaskTables;