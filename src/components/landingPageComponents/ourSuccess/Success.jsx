import React from 'react'
import img1 from '../../../assests/landingPage/15K+.svg'
import img2 from '../../../assests/landingPage/any.svg'
import img3 from '../../../assests/landingPage/35.svg'
import img4 from '../../../assests/landingPage/26.svg'
import img5 from '../../../assests/landingPage/16.svg'
import cardImg1 from '../../../assests/landingPage/cardImg1.svg'
import cardImg2 from '../../../assests/landingPage/cardImg2.svg'
import cardImg3 from '../../../assests/landingPage/cardImg3.svg'
const Success = () => {
    return (
        <div className='mx-[5%]'>
            <h1 className='font-bold text-[48px] text-center'>Our Success</h1>
            <h1 className='text-[18px] text-center w-[60%] mx-auto'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
                nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </h1>
            <div className='text-[32px] flex justify-around my-20'>
                <div> <img src={img1} className='mx-auto' alt="" /> <h1>Students</h1></div>
                <div> <img src={img2} className='mx-auto' alt="" /> <h1>Total success</h1></div>
                <div> <img src={img3} className='mx-auto' alt="" /> <h1>Main questions</h1></div>
                <div> <img src={img4} className='mx-auto' alt="" /> <h1>Chief experts</h1></div>
                <div> <img src={img5} className='mx-auto' alt="" /> <h1>Years of experience</h1></div>

            </div>
            <div>
                <h1 className='font-bold text-[36px] text-center'>All-In-One <span className='text-[#00CBB8]'>  Cloud Software.</span></h1>
                <h1 className='text-center w-[50%] mx-auto'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
                </h1>

            </div>
            <div className='flex justify-center mt-40 flex-wrap gap-10'>
                <div className='shadow-xl rounded-3xl w-[30%] relative max-xl:w-[48%] max-md:w-[70%] px-10 py-5'>
                    <img className='mx-auto mt-[-30%]' src={cardImg1} alt="" />
                    <h1 className='text-3xl font-[500] text-[#2F327D]  text-center py-4'>Online Billing, Invoicing, & Contracts
                    </h1>
                    <h1 className='text-xl max-sm:text-base  text-center text-[#696984]'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</h1>
                </div>
                <div className=' shadow-xl rounded-3xl relative w-[30%] max-xl:w-[48%] max-md:w-[70%] px-10 py-5'>
                    <img className='mx-auto mt-[-30%]' src={cardImg2} alt="" />
                    <h1 className='text-center font-[500]   text-[#2F327D] text-3xl py-4'>Easy Scheduling & Attendance Tracking</h1>
                    <h1 className='text-xl max-sm:text-base text-center text-[#696984] '>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</h1>
                </div> <div className='shadow-xl rounded-3xl relative w-[30%] max-xl:w-[48%] max-md:w-[70%] px-10 py-5'>
                    <img className='mx-auto mt-[-30%]' src={cardImg3} alt="" />
                    <h1 className='font-[500] text-center  text-[#2F327D] text-3xl xl:mt-8 py-4'>Customer Tracking</h1>
                    <h1 className='text-xl max-sm:text-base text-center text-[#696984]'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </h1>
                </div>
            </div>
        </div>
    )
}

export default Success