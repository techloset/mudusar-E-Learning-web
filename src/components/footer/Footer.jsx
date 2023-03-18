import React from 'react'
import logo from '../../assests/logo.svg'
const Footer = () => {
    return (

        <footer className='bg-[#252641] flex justify-center pt-16 pb-8 ' >
            <div>
                <div className='flex items-center justify-center gap-10'>
                    <span><img src={logo} alt="" /></span>
                    <h1 className='text-[22px] text-white border-l-2 pl-6 border-[#626381]'>Virtual Class <br /> for Zoom</h1>
                </div>
                <h1 className='text-[26px] text-[#B2B3CF] text-center font-medium mt-20 mb-6'>Subscribe to get our Newsletter</h1>
                <div  >
                    <input type="text" placeholder='Your Email' className='rounded-full border mr-6 w-96 px-6 py-3 text-xl   border-[#626381] bg-transparent' />
                    <button className='rounded-3xl text-[22px] font-[500] hover:bg-white px-6 py-2 border hover:text-black text-white bg-[#49BBBD]'> Subscribe</button>
                </div>
                <div className='text-[22px] text-[#B2B3CF] mt-20 mb-4'>
                    <ul className='flex justify-center items-center gap-5'><li>Careers</li>
                        <li className=' px-5 border-[#626381] border-x-2'>Privacy Policy</li>
                        <li>Terms & Conditions</li></ul>
                </div>
                <h1 className='text-[22px] text-[#B2B3CF] text-center'>© 2021 Class Technologies Inc</h1>
            </div>
        </footer>

    )
}

export default Footer