import React, { Component } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assests/landingPage/sliderImg.webp'
import nextImg from '../../assests/landingPage/sliderNextArrow.svg'
import ratingStar from '../../assests/landingPage/ratingStar.svg'
export default () => {
    const slider = React.useRef(null);

    const settings = {
        prevArrow: null,
        nextArrow: null,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     }, {
        //         breakpoint: 700,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     }],

    }
    return (
        <div id='blog' className=""  >
            <div className="w-[100%] relative">
                <Slider ref={slider} {...settings}>
                    <div className="ml-4">
                        <h3 className="pr-10 "><img src={img} className=' ' alt="slider wali img" /></h3>

                    </div>
                    <div className="ml-4">
                        <h3 className="pr-10"><img src={img} className=' ' alt="slider wali img" /></h3>

                    </div>
                </Slider>

                <button className="absolute left-[60%] top-[40%]" onClick={() => slider?.current?.slickNext()} ><img src={nextImg} alt="" /></button>
                <div className="absolute left-[15%] bottom-[-10%] bg-slate-50  rounded-2xl shadow-lg w-[80%] p-10 text-[#5F5F7E] text-[22px]">
                    <h1>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</h1>
                    <span className="flex justify-between items-center mt-8"><h1 className="text-[24px] font-semibold">Gloria Rose</h1> <span><img src={ratingStar} alt="" /> <h1 className="text-[18px]">12 reviews at Yelp</h1></span></span>
                </div>
            </div>

        </div>
    );

}