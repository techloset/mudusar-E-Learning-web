import React from 'react'
import siderImg from '../../../assests/landingPage/header-side-img.svg'
import videoPlayBtn from '../../../assests/landingPage/video-play-btn.svg'
const Header = () => {
    return (
        <div className='landing-header xl:bg-cover max-xl:bg-contain '>
            <header className='flex justify-between items-center mx-[5%] ' >
                <div>
                    <h1 className='font-bold text-[54px] text-white'> <span className='text-[#F48C06]'>  Studying</span> Online is now <br /> much easier</h1>
                    <h1 className='text-white w-[80%] font-normal text-[24px] mt-7'>TOTC is an interesting platform that will teach  you in more an interactive way</h1>
                    <div className='flex items-center'>
                        <div>
                            <button className='rounded-[40px] text-[22px] font-[500]  hover:bg-white px-8 py-3 border hover:text-black text-white bg-[#82d4d5]'>Join for free</button>
                        </div>
                        <div className='pt-6 '>
                            <img src={videoPlayBtn} height={80} width=
                                {140} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[20px]'>Watch how it works</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={siderImg} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header