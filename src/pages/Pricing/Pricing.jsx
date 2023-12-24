

const Pricing = () => {
    return (
        <div className="py-28 max-w-7xl mx-auto ">
            <h2 className="lg:text-4xl text-3xl italic font-bold text-center ">
                Choose Your ProTask Plan.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:p-0 lg:grid-cols-3 gap-3 mt-8">
                {/* first */}
                <div className="flex justify-center">
                    <div className="border border-gray-400 rounded-md p-8">
                        <h4 className="md:text-3xl text-sky-500 text-2xl font-bold">Basic</h4>
                        <p className="text-lg mt-4">Core task management features for single users</p>
                        <h4 className="md:text-3xl text-2xl font-bold mt-8">Free</h4>
                        <p className="text-lg mt-1 text-gray-500">Per User/Forever</p>
                        <button className="btn btn-outline 
                        mt-4 w-full text-lg font-bold border-sky-500 text-sky-500">Get Started</button>
                        <div>
                            <h4 className="text-lg font-bold mt-8">Task management with :</h4>
                            <ul className="list-disc mt-3 ml-6 space-y-2 text-xl font-medium text-gray-500">
                                <li>Up to 3 projects</li>
                                <li>Unlimited project members</li>
                                <li>Customizable project boards</li>
                                <li>Customizable project boards</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className="flex justify-center">
                    <div className="border border-gray-400 rounded-md p-8">
                        <h4 className="md:text-3xl text-sky-500 text-2xl font-bold">Pro</h4>
                        <p className="text-lg mt-4">Simple, collaborative task management for teams</p>
                        <h4 className="md:text-3xl text-2xl font-bold mt-8">$6</h4>
                        <p className="text-lg mt-1 text-gray-500">Per User/Month</p>
                        <button className="btn btn-outline 
                        mt-4 w-full text-lg font-bold border-sky-500 text-sky-500">Get Started</button>
                        <div>
                            <h4 className="text-lg font-bold mt-8">Includes Basic and :</h4>
                            <ul className="list-disc mt-3 ml-6 space-y-2 text-xl font-medium text-gray-500">
                                <li>External Sharing</li>
                                <li>Unlimited Projects & Notes</li>
                                <li>Agenda</li>
                                <li>Unlimited integrations</li>
                                <li>Private projects</li>
                                <li>Automations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className="flex justify-center">
                    <div className="border border-gray-400 rounded-md p-8">
                        <h4 className="md:text-3xl text-sky-500 text-2xl font-bold">Business</h4>
                        <p className="text-lg mt-4">Extended collaboration features for teams with great benefits</p>
                        <h4 className="md:text-3xl text-2xl font-bold mt-8">$12</h4>
                        <p className="text-lg mt-1 text-gray-500">Per User/Month</p>
                        <button className="btn btn-outline 
                        mt-4 w-full text-lg font-bold border-sky-500 text-sky-500">Get Started</button>
                        <div>
                            <h4 className="text-lg font-bold mt-8">Includes Pro and :</h4>
                            <ul className="list-disc mt-3 ml-6 space-y-2 text-xl font-medium text-gray-500">
                                <li>Subtasks</li>
                                <li>Timeline</li>
                                <li>Roles and permissions</li>
                                <li>Custom fields</li>
                                <li>Security restrictions</li>
                                <li>Priority email & phone support</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Pricing;