

const TaskTables = () => {
    const todoTasks = [2,2,4]
    return (
        <div className="mt-16">
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
                                    <td className="text-center max-w-72">Cy Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum maiores molestiae dolores consequatur quibusdam nemo? Ipsa fuga magnam reiciendis?</td>
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
    );
};

export default TaskTables;