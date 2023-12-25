

const Beneficial = () => {
    const info =[
        {
            category : "Students",
            description : "Organize assignments and deadlines, boosting productivity and reducing stress. Enhance academic performance and time management skills."
        },
        {
            category : "Business Professionals",
            description : "Efficiently manage tasks, projects, and meetings. Improve workflow, collaboration, and overall productivity for better business outcomes."
        },
        {
            category : "Freelancers",
            description : "Streamline project management, meet deadlines, and showcase reliability. Optimize time and task tracking for successful freelance careers."
        },
        {
            category : "Entrepreneurs",
            description : "Plan, prioritize, and execute business strategies. Drive innovation and manage workload effectively to achieve entrepreneurial success."
        },
        {
            category : "Creatives",
            description : "Organize creative projects and ideas, fostering inspiration. Enhance creative output and meet artistic goals with efficient task management."
        },
        {
            category : "Parents",
            description : "Coordinate family schedules, manage household tasks, and stay organized. Facilitate efficient family life and balance responsibilities effectively."
        },
    ]
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="lg:text-4xl text-3xl font-bold text-center mb-10">Most Beneficial To</h2>
            <div className="grid md:grid-cols-2 lg:p-0 p-8 lg:grid-cols-3 gap-5">
                {
                   info?.map(singleInfo => 
                   <div key={singleInfo?.category} className="bg-slate-300 p-8 rounded-md hover:scale-110 hover:border-2 hover:border-white space-y-4">
                    <h2 className="text-2xl font-bold">{singleInfo?.category}</h2>
                    <p className="text-lg font-medium">{singleInfo?.description}</p>
                   </div>)
                }
            </div>
        </div>
    );
};

export default Beneficial;