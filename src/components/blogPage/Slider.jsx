import React, { Component } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerImg from '../../assests/blogPage/blogPage-header-main-img.webp'
import profilePic from '../../assests/profilePic.svg'
import blogimg1 from '../../assests/blogPage/blog-slider-img1.webp'
import blogimg2 from '../../assests/blogPage/blog-slider-img2.webp'
import nextImg from '../../assests/blogPage/blog-slider-next-icon.svg'
import prevImg from '../../assests/blogPage/blog-slider-prev-icon.svg'
import { Link } from "react-router-dom";
export default () => {
    const slider = React.useRef(null);
    const settings = {
        prevArrow: null,
        nextArrow: null,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
                    <h1 className="font-medium text-[30px] ">Related Blog </h1>
                    <Link className="text-[#49BBBD] text-[20px] ">See all</Link>
                </div>
                <Slider ref={slider} {...settings}>
                    <div>

                        <div className="card p-10 bg-white rounded-lg mx-10 ">
                            <img src={blogimg1} alt="Card top" />
                            <div className="card-body">
                                <h5 className="card-title text-[#252641] text-[26px] font-medium">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
                                <div className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </div>
                                <p className="card-text text-[20px] text-[#696984]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                <div className="flex justify-between mt-8">

                                    <a href="#" className="learn-more-link border-b-2 text-[#696984] text-[20px]">Learn more</a>
                                    <span className="number">251,232</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="card p-10 bg-white rounded-lg mx-10">
                            <img src={blogimg2} alt="Card top" />
                            <div className="card-body">
                                <h5 className="card-title text-[#252641] text-[26px] font-medium">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
                                <div className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </div>
                                <p className="card-text text-[20px] text-[#696984]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                <div className="flex justify-between mt-8">

                                    <a href="#" className="learn-more-link border-b-2 text-[#696984] text-[20px]">Learn more</a>
                                    <span className="number">251,232</span>
                                </div>
                            </div>
                        </div>
                    </div> <div>

                        <div className="card p-10 bg-white rounded-lg mx-10">
                            <img src={blogimg1} alt="Card top" />
                            <div className="card-body">
                                <h5 className="card-title text-[#252641] text-[26px] font-medium">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
                                <div className="profile flex gap-4 items-center my-4">
                                    <img src={profilePic} alt="Profile Pic" />
                                    <p className="name text-[18px] font-medium">Lina</p>
                                </div>
                                <p className="card-text text-[20px] text-[#696984]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                <div className="flex justify-between mt-8">

                                    <a href="#" className="learn-more-link border-b-2 text-[#696984] text-[20px]">Learn more</a>
                                    <span className="number">251,232</span>
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