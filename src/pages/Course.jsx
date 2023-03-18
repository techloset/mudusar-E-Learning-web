import React from 'react'
import Navbar from '../components/navbar/Navbar'
import logo from '../assests/logoBlack.svg'
import Footer from '../components/footer/Footer'
import Cards from '../components/coursePage/cards/Cards'
import Slider from '../components/coursePage/slider/Slider'
const Course = () => {
    return (
        <div>
            <Navbar logo={logo} />
            <Slider/>
            <Cards heading={'Get choice of your course'} />
            <Cards heading={'The course in personal development'} />
            <section className='bg-[#252641] rounded-2xl mx-[5%]'>
                <div className='flex flex-col justify-center items-center gap-8 py-20'>
                    <h1 className='text-[36px] text-center text-white font-semibold'>Online coaching lessons for remote learning.</h1>
                    <h1 className='text-[24px] w-[75%] text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
                    <button className='bg-[#49BBBD] text-[16px] py-4 px-8 rounded-2xl border text-white mt-4 hover:bg-[#23BDEE]
                        '>Start learning now</button>
                </div>
            </section>
            <div className='bg-[#EBF5FF] py-10'>

                <Cards heading={'Student are viewing'} />
            </div>
            <Footer />
        </div>
    )
}

export default Course