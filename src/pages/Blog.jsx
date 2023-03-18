import React from 'react'
import { useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/blogPage/Slider';
import Footer from '../components/footer/Footer';
import logo from '../assests/logoBlack.svg'
import headerImg from '../assests/blogPage/blogPage-header-main-img.webp'
import readingImg1 from '../assests/blogPage/readingImg1.webp'
import readingImg2 from '../assests/blogPage/readingImg2.webp'
import readingImg3 from '../assests/blogPage/readingImg3.webp'
import readingImg4 from '../assests/blogPage/readingImg4.webp'
import profilePic from '../assests/profilePic.svg'
import sliderImg1 from '../assests/blogPage/sliderImg1.webp'
import sliderImg2 from '../assests/blogPage/sliderImg2.webp'
import sliderImg3 from '../assests/blogPage/sliderImg3.webp'
import sliderImg4 from '../assests/blogPage/sliderImg4.webp'
import clockIcon from '../assests/blogPage/clock.svg'
import square from '../assests/blogPage/4square.svg'

const Blog = () => {
    return (
        <div>
            <Navbar logo={logo} />
            <header className='bg-[#EBF5FF] '>
                <div className="flex flex-row justify-between items-center mx-[5%] py-20">
                    <div className="w-[47%] p-4">
                        <h1 className='text-[24px] '>By Themadbrains in <span className='text-[#49BBBD]'> inspiration</span></h1>
                        <h1 className="text-[44px] text-[#2F327D] font-semibold mb-2">Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                        <p className="text-[24px] text-[#696984] mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                        <button className="bg-[#49BBBD]  text-white text-[16px] font-bold py-4 px-8 rounded-xl">
                            Start learning now
                        </button>
                    </div>
                    <div className="w-[50%]">
                        <img
                            className="object-cover w-full h-full"
                            src={headerImg}
                            alt="Placeholder"
                        />
                    </div>
                </div>


            </header>
            {/* //////////////////reading section ////////////////////////// */}
            <section className='mx-[5%] my-10'>
                <div>
                    <h1 className='text-[30px] font-bold mb-4'>Reading blog list</h1>
                    <div className='flex justify-between gap-4'>
                        <span>
                            <img src={readingImg1} alt="" />
                        </span>
                        <span>
                            <img src={readingImg2} alt="" />
                        </span> <span>
                            <img src={readingImg3} alt="" />
                        </span> <span>
                            <img src={readingImg4} alt="" />
                        </span>
                    </div>
                </div>
            </section>
            <div>
                <Slider />
            </div>
            {/* /////////////////////last section///////////////////////// */}
            <section className='mx-[5%] mt-20' >
                <div className='flex justify-between'>
                    <h1 className='text-[30px] font-medium'>Marketing Articles</h1>
                    <h1 className='text-[20px] font-bold text-[#49BBBD]'>See all</h1>
                </div>
                <div className='flex justify-between gap-7  mt-10 mb-36'>

                
                <div className="card p-6 bg-white rounded-2xl w-[25%] shadow-xl ">
                    <div >
                        <img src={sliderImg1} alt="Card top" />
                        <div className="profile flex justify-between gap-4 items-center my-1">
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={clockIcon} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">Design</p>
                            </span>
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={square} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">3 Month</p>
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-[#252641] text-[24px] font-medium">AWS Certified solutions Architect</h5>
                            <p className="card-text text-[18px] text-[#696984]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="profile flex justify-between gap-4 items-center my-4">
                                <span className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </span>
                                <span className="profile flex gap-4 items-center my-4">
                                    <h1><del>$100</del></h1>
                                    <h1 className='text-[#49BBBD] text-[24px] font-bold'>$80</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ///////////// */}
                <div className="card p-10 bg-white rounded-2xl w-[25%] shadow-xl">
                    <div >
                        <img src={sliderImg2} alt="Card top" />
                        <div className="profile flex justify-between gap-4 items-center my-1">
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={clockIcon} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">Design</p>
                            </span>
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={square} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">3 Month</p>
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-[#252641] text-[24px] font-medium">AWS Certified solutions Architect</h5>
                            <p className="card-text text-[18px] text-[#696984]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="profile flex justify-between gap-4 items-center my-4">
                                <span className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </span>
                                <span className="profile flex gap-4 items-center my-4">
                                    <h1><del>$100</del></h1>
                                    <h1 className='text-[#49BBBD] text-[24px] font-bold'>$80</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ///////////////// */}
                <div className="card p-10 bg-white rounded-2xl w-[25%] shadow-xl">
                    <div >
                        <img src={sliderImg3} alt="Card top" />
                        <div className="profile flex justify-between gap-4 items-center my-1">
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={clockIcon} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">Design</p>
                            </span>
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={square} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">3 Month</p>
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-[#252641] text-[24px] font-medium">AWS Certified solutions Architect</h5>
                            <p className="card-text text-[18px] text-[#696984]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="profile flex justify-between gap-4 items-center my-4">
                                <span className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </span>
                                <span className="profile flex gap-4 items-center my-4">
                                    <h1><del>$100</del></h1>
                                    <h1 className='text-[#49BBBD] text-[24px] font-bold'>$80</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ///////////////// */}
                <div className="card p-10 bg-white rounded-2xl w-[25%] shadow-xl">
                    <div >
                        <img src={sliderImg4} alt="Card top" />
                        <div className="profile flex justify-between gap-4 items-center my-1">
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={clockIcon} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">Design</p>
                            </span>
                            <span className="profile flex gap-4 items-center my-4">
                                <img src={square} alt="Profile Pic" />
                                <p className="name text-[14px] text-[#696984] font-medium">3 Month</p>
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-[#252641] text-[24px] font-medium">AWS Certified solutions Architect</h5>
                            <p className="card-text text-[18px] text-[#696984]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="profile flex justify-between gap-4 items-center my-4">
                                <span className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </span>
                                <span className="profile flex gap-4 items-center my-4">
                                    <h1><del>$100</del></h1>
                                    <h1 className='text-[#49BBBD] text-[24px] font-bold'>$80</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )

};

export default Blog;
