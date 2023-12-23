/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/taskBGCopy.jpg'

const Banner = () => {
    return (
        <div className="lg:mt-[75px] md:mt-16 p-4 lg:p-0  bg-[#d8f3dc]">
            <div className="flex pt-16 md:pt-0 flex-col-reverse md:flex-row gap-6 max-w-7xl min-h-[90vh] mx-auto md:justify-between justify-center items-center" >
                <div className='w-full '>
                    <div className='flex md:block flex-col justify-center items-center'>
                        <h2 style={{ lineHeight: '3.5rem' }} className='lg:text-5xl md:text-3xl text-2xl text-center md:text-left font-bold lg:w-2/3 w-3/4'>Manage your task and team with XTitle</h2>
                        <p className='text-center md:text-left w-[90%] mt-4 text-lg'>Are you struggling to stay organized and focused? We know how you feel. That's why we've created a task management tool that helps you stay on top of your to-do list and get more done in less time.</p>
                        <Link to='/login'>
                            <button className='bg-[#560bad] hover:bg-black mt-8 rounded-full py-3  px-10 text-white font-bold'>Get Started</button>
                        </Link>
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