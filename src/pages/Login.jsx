import React from 'react'
import { useState } from "react";
import sideImg from '../assests/loginFormSideImg.webp'
import { Link } from 'react-router-dom';
const Login = () => {
    const [showImage, setShowImage] = useState(true);

    return (
        <div className="flex flex-col md:flex-row m-[3%]">
            <div className='w-[55%] max-md:hidden' >
                <img
                    src={sideImg}
                    alt="Your image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="md:w-[45%] text-[16px] bg-white rounded-xl  p-8 gap-3 flex flex-col justify-center items-center">

                <h2 className="text-[16px] font-normal text-gray-900 mb-6">Welcome to lorem..!</h2>
                <div className="mb-4 rounded-full bg-[#92D6D6] p-2">
                   <Link to='/login'>
                    <button
                        className="bg-[#49BBBD] hover:bg-[#92D6D6] text-white py-2 px-8 rounded-full text-sm font-medium mr-4"
                        
                        >
                        Login
                    </button>
                        </Link>
                        <Link to='/register'>
                    <button className="bg-[#92D6D6] hover:bg-[#49BBBD] text-white py-2 px-8 rounded-full text-sm font-medium">
                        Register
                    </button>
                        </Link>
                </div>
                <div className='w-[70%] text-[#5B5B5B] my-8'>
                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                </div>
                <div className="mb-4 w-[70%]">
                    <label className="block text-sm font-medium text-black mb-2">
                        Username
                    </label>
                    <input
                        type="text" placeholder='Enter your User Name'
                        className="w-full border border-solid border-[#49BBBD] rounded-full py-3 px-3 text-gray-900 placeholder-gray-500 text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4 w-[70%]">
                    <label className="block text-sm font-medium text-black mb-2">
                        Password
                    </label>
                    <input
                        type="password" placeholder='Enter your Password'
                        className="w-full border border-solid border-[#49BBBD] rounded-full py-3 px-3 text-gray-900 placeholder-gray-500 text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between mb-4 w-[70%]">
                    <span> <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                        <span className="text-sm font-medium text-gray-700">
                            Remember me
                        </span></span>
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-700 hover:text-blue-500"
                    >
                        Forgot password?
                    </a>
                </div>
                <span className='w-[70%] flex justify-end mt-7'>

                    <button
                        className="bg-[#92D6D6] hover:bg-[#49BBBD] text-white py-3 px-16 rounded-full text-sm font-medium "

                    >
                        Login
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Login;
