import React from 'react'
import clockIcon from '../../../assests/blogPage/clock.svg'
import square from '../../../assests/blogPage/4square.svg'
import sliderImg1 from '../../../assests/blogPage/sliderImg1.webp'
import sliderImg2 from '../../../assests/blogPage/sliderImg2.webp'
import sliderImg3 from '../../../assests/blogPage/sliderImg3.webp'
import sliderImg4 from '../../../assests/blogPage/sliderImg4.webp'
import profilePic from '../../../assests/profilePic.svg'

const Cards = (props) => {
  return (
    <div>
         <section className='mx-[5%] mt-20' >
                <div className='flex justify-between'>
                    <h1 className='text-[30px] font-medium'>{props.heading}</h1>
                    <h1 className='text-[20px] font-bold text-[#49BBBD]'>See all</h1>
                </div>
                <div className='flex justify-between gap-10  my-10 '>

                
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
                </div>
            </section>
    </div>
  )
}

export default Cards