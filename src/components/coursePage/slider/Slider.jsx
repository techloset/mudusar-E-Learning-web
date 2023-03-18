import React, { Component } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerImg from '../../../assests/blogPage/blogPage-header-main-img.webp'
import profilePic from '../../../assests/profilePic.svg'
import blogimg1 from '../../../assests/blogPage/blog-slider-img1.webp'
import blogimg2 from '../../../assests/blogPage/blog-slider-img2.webp'
import nextImg from '../../../assests/blogPage/blog-slider-next-icon.svg'
import prevImg from '../../../assests/blogPage/blog-slider-prev-icon.svg'
import clockIcon from '../../../assests/blogPage/clock.svg'
import square from '../../../assests/blogPage/4square.svg'
import sliderImg1 from '../../../assests/blogPage/sliderImg1.webp'
// import sliderImg2 from '../../../assests/blogPage/sliderImg2.webp'
import sliderImg3 from '../../../assests/blogPage/sliderImg3.webp'
// import sliderImg4 from '../../../assests/blogPage/sliderImg4.webp'
// import profilePic from '../../../assests/profilePic.svg'
import { Link } from "react-router-dom";
export default () => {
    const slider = React.useRef(null);
    const settings = {
        prevArrow: null,
        nextArrow: null,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            //  {
            //     breakpoint: 700,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // }
        ],

    }
    return (
        <div id='blog' className="bg-[#EBF5FF] py-28"  >
            <div className="mx-[3%] relative">
                <div className="flex justify-between mx-8 mb-8">
                    <h1 className="font-medium text-[30px] ">Recommended for you </h1>
                    <Link className="text-[#49BBBD] text-[20px] ">See all</Link>
                </div>
                <Slider ref={slider} {...settings}>
                    {/* <div className='flex justify-between gap-10  my-10 '> */}


                    <div className="card p-3 bg-white rounded-2xl w-[25%] shadow-xl ">
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
                    <div className="card p-3 bg-white rounded-2xl w-[25%] shadow-xl">
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
                    <div className="card p-3 bg-white rounded-2xl w-[25%] shadow-xl">
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
                    {/* ///////////////// */}
                    <div className="card p-3 bg-white rounded-2xl w-[25%] shadow-xl">
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
                    <div className="card p-3 bg-white rounded-2xl w-[25%] shadow-xl">
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
                </Slider>

                <button className="absolute right-10 bottom-[-10%]" onClick={() => slider?.current?.slickNext()} ><img src={nextImg} alt="" /></button>
                <button className="absolute right-28 bottom-[-10%]" onClick={() => slider?.current?.slickPrev()} ><img src={prevImg} alt="" /></button>

            </div>

        </div>
    );

}