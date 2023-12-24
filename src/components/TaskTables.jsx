

const TaskTables = () => {
    const todoTasks = [2, 2, 4]
    return (
        <div className="mt-16 space-y-8">
            {/* completed */}
            <div>
                <h2 className="text-[#FE4880] text-3xl mb-5 font-bold text-center">Completed Lists</h2>
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
                                    todoTasks?.map(todo => <tr key={todo}
                                        className="hover:bg-[#FE4880] hover:text-white bg-gray-300">
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center max-w-72">Cy Lorem ipsum dolor sit ame</td>
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center">Cy Ganderton</td>
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
                        todoTasks?.length === 0 &&
                        <h2 className="text-xl font-bold text-center w-full mt-6">No Task Added Yet</h2>
                    }
                </div>
            </div>
            {/* ongoing */}
            <div>
                <h2 className="text-[#D3A256] text-3xl mb-5 font-bold text-center">Ongoing Lists</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-lg text-center font-bold">Task Name</th>
                                <th className="text-lg text-center font-bold">Descriptions</th>
                                <th className="text-lg text-center font-bold">Priority</th>
                                <th className="text-lg text-center font-bold">Deadlines</th>

                            </tr>
                        </thead>
                        {
                            todoTasks?.length > 0 &&
                            <tbody>
                                {
                                    todoTasks?.map(todo => <tr key={todo}
                                        className="hover:bg-[#D3A256] hover:text-white bg-gray-300">
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center max-w-72">Cy Lorem ipsum dolor sit amet.</td>
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center">Cy Ganderton</td>

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
            {/* todo */}
            <div>
                <h2 className="text-[#BB34F5] text-3xl mb-5 font-bold text-center">To-Do Lists</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="text-lg text-center font-bold">Task Name</th>
                                <th className="text-lg text-center font-bold">Descriptions</th>
                                <th className="text-lg text-center font-bold">Priority</th>
                                <th className="text-lg text-center font-bold">Deadlines</th>

                            </tr>
                        </thead>
                        {
                            todoTasks?.length > 0 &&
                            <tbody>
                                {
                                    todoTasks?.map(todo => <tr key={todo}
                                        className="hover:bg-[#BB34F5] hover:text-white bg-gray-300">
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center max-w-72">Cy Lorem ipsum dolo</td>
                                        <td className="text-center">Cy Ganderton</td>
                                        <td className="text-center">Cy Ganderton</td>

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
        </div>
    );
};

export default TaskTables;