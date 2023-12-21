/* eslint-disable react/no-unescaped-entities */
import bannerImg from '../../assets/taskBGCopy.jpg'

const Banner = () => {
    return (
        <div className="mt-[75px]  bg-[#d8f3dc]">
             <div className="flex gap-6 max-w-7xl min-h-[90vh] mx-auto justify-between items-center" >
                <div className='w-full'>
                    <div>
                        <h2 style={{lineHeight: '3.5rem'}} className='lg:text-5xl md:text-3xl text-2xl font-bold w-2/3'>Manage your task and team with XTitle</h2>
                        <p className='w-[90%] mt-4 text-lg'>Are you struggling to stay organized and focused? We know how you feel. That's why we've created a task management tool that helps you stay on top of your to-do list and get more done in less time.</p>
                        <button className='bg-[#560bad] hover:bg-black mt-8 rounded-full py-3  px-10 text-white font-bold'>Get Started</button>
                    </div>
                </div>
                <div className='w-[90%]'>
                    <img className='w-full rounded-lg' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;