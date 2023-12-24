import TaskTables from "../../components/TaskTables";


const DashboardHome = () => {

    return (
        <div className="mt-8 w-4/5 mx-auto">
            <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-5  mt-8">
                <div className="flex justify-center">
                    <div className="w-48 h-28 space-y-2 bg-gradient-to-r from-black to-[#FCDBFF]
                justify-center items-center rounded-lg flex flex-col">
                        <p className="text-lg font-bold">20</p>
                        <h4 className="text-lg font-semibold">Total Tasks</h4>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-48 h-28 space-y-2 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]
                justify-center items-center rounded-lg flex flex-col">
                        <p className="text-lg font-bold">20</p>
                        <h4 className="text-lg font-semibold">To-do Tasks</h4>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-48 h-28 space-y-2 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]
                justify-center items-center rounded-lg flex flex-col">
                        <p className="text-lg font-bold">20</p>
                        <h4 className="text-lg font-semibold">Ongoing Tasks</h4>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-48 h-28 space-y-2 bg-gradient-to-r from-[#FE4880] to-[#FECDE9]
                justify-center items-center rounded-lg flex flex-col">
                        <p className="text-lg font-bold">20</p>
                        <h4 className="text-lg font-semibold">Completed Tasks</h4>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <TaskTables></TaskTables>
            </div>
        </div>
    );
};

export default DashboardHome;