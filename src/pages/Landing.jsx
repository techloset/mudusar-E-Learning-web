import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/landingPageComponents/header/Header'
import Success from '../components/landingPageComponents/ourSuccess/Success'
import Features from '../components/landingPageComponents/features/Features'
import Footer from '../components/footer/Footer'
import totcImg1 from '../../src/assests/landingPage/landing-totc-img1.svg'
import totcImg2 from '../../src/assests/landingPage/landing-totc-img2.svg'
import totcSideImg from '../assests/landingPage/totc-side-img.svg'
import greenCircleLg from '../assests/landingPage/green-circle-lg.svg'
import greenCircleSm from '../assests/landingPage/green-circle-sm.svg'
import courseIcon1 from '../assests/landingPage/course-section-icon1.svg'
import courseIcon2 from '../assests/landingPage/course-section-icon2.svg'
import courseIcon3 from '../assests/landingPage/course-section-icon3.svg'
import forwardIcon from '../assests/landingPage/forward-icon.svg'
import forwardArrow from '../assests/landingPage/forwardArrow.svg'
import book1 from '../assests/landingPage/course-section-book1.svg'
import book2 from '../assests/landingPage/course-section-book2.svg'
import book3 from '../assests/landingPage/course-section-book3.svg'
import book4 from '../assests/landingPage/course-section-book4.svg'
import book5 from '../assests/landingPage/course-section-book5.svg'
import book6 from '../assests/landingPage/course-section-book6.svg'
import book7 from '../assests/landingPage/course-section-book7.svg'
import section1Img from '../assests/landingPage/course-section1-img.svg'
import section2Img from '../assests/landingPage/course-section2-img.svg'
import section3Img from '../assests/landingPage/course-section3-img.svg'
import rectangle from '../assests/landingPage/course-section-rectangle.svg'
import lastSectionImg1 from '../assests/landingPage/lastSection-img1.svg'
import lastSectionSideImg1 from '../assests/landingPage/lastSection-side-img1.svg'
import lastSectionSideImg2 from '../assests/landingPage/lastSection-side-img2.svg'
import lastSectionSideImg3 from '../assests/landingPage/lastSection-side-img3.svg'
import Slider from '../components/landingPageComponents/Slider'
import Navbar from '../components/navbar/Navbar'
import logo from "../assests/logo.svg"

const Landing = () => {
    return (
        <div>
            <Navbar logo={logo} text={"white"} bg={"49BBBD"} />
            <Header />
            <Success />
            <section className='mt-20 mx-[5%]'>
                <div>
                    <h1 className='text-[#2F327D] text-center text-[44px] font-semibold'>
                        What is  <span className='text-[#00CBB8]'>  TOTC?</span>
                    </h1>
                    <h1 className='w-[70%] text-center mx-auto text-[24px] font-normal text-[#696984] py-4'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</h1>
                </div>
                <div className='w-[80%] flex justify-center mx-auto gap-10'>
                    <div className='landingPageTotcDiv1'>
                        <div className=' my-20 mx-24'>
                            <h1 className='text-white font-semibold text-[32px]'>FOR INSTRUCTORS</h1>
                            <button className='bg-transparent py-4 px-8 rounded-full border text-white mt-4 hover:bg-[#23BDEE]
                        '>Start a class today</button>
                        </div>
                    </div>
                    <div className='landingPageTotcDiv2 rounded-2xl' >

                        <div className='my-20 mx-24'>
                            <h1 className='text-white font-semibold text-[32px] '>FOR STUDENT  </h1>
                            <button className='bg-transparent py-4 px-8 rounded-full border mx-auto text-white mt-4 text-center hover:bg-[#23BDEE]
                            '>Enter access code</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 mt-28'>
                    <div className='w-[60%]'><h1 className='text-[#2F327D] text-[36px] font-medium relative'> <img src={greenCircleLg} className='absolute z-[-1] top-[-10px] left-[-20px]' alt="" />Everything you can do in a physical classroom,<span className='text-[#00CBB8]'>  you can do with TOTC</span></h1>
                        <h1 className='text-[#696984] text-[24px] py-5 relative'> TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual <img src={greenCircleSm} className='absolute z-[-1] right-10 bottom-16 ' alt="" /> classrooms all in one secure cloud-based system.</h1>
                        <Link className='text-[#696984] text-[22px] border-b-2 '>Learn more</Link>
                    </div>
                    <div><img src={totcSideImg} alt="" /></div>
                </div>
            </section>
            <Features />
            {/* explore course section///////////////////////////// */}
            <section className=' course-section mt-10'>
                <div className='ml-[5%] pt-36 pb-10'>


                    <h1 className='text-[40px] font-bold'>Explore Course</h1>
                    <h1 className='text-[24px] font-medium'>Ut sed eros finibus, placerat orci id, dapibus.</h1>
                    <section className='mt-20'>
                        <div className='flex justify-between mr-8 '>
                            <div className='flex gap-4 items-center'> <span> <img src={courseIcon1} alt="" /></span><span className='text-[28px]  font-bold'>Lorem Ipsum</span></div>
                            <div className='flex gap-4 items-center'><h1 className='text-[24px] font-medium text-[#00BCD4]'>See all</h1> <span>  <img src={forwardIcon} alt="" /></span></div>
                        </div>
                        <div className='flex box-border mt-6  '>
                            <h1>  <img src={book1} className='' alt="" /> </h1>
                            <h1>  <img src={book2} alt="" /></h1>
                            <h1>  <img src={book3} alt="" /></h1>
                            <h1>  <img src={book4} alt="" /></h1>
                            <h1>  <img src={book5} alt="" /></h1>
                            <h1>  <img src={book6} alt="" /></h1>
                            <h1>  <img src={book7} alt="" /></h1>
                            <h1>  <img src={section1Img} alt="" /></h1>
                        </div>
                        <img src={rectangle} className='mt-[-4%]' alt="" />
                    </section>
                    {/* /////////////////////child 2//////////////////////////// */}
                    <section className='mt-20'>
                        <div className='flex justify-between mr-8 '>
                            <div className='flex gap-4 items-center'> <span> <img src={courseIcon2} alt="" /></span><span className='text-[28px]  font-bold'>Quisque a Consequat</span></div>
                            <div className='flex gap-4 items-center'><h1 className='text-[24px] font-medium text-[#00BCD4]'>See all</h1> <span>  <img src={forwardIcon} alt="" /></span></div>
                        </div>
                        <div className='flex box-border  mt-6 '>
                            <h1>  <img src={book1} className='' alt="" /> </h1>
                            <h1>  <img src={book2} alt="" /></h1>
                            <h1>  <img src={book3} alt="" /></h1>
                            <h1>  <img src={book4} alt="" /></h1>
                            <h1>  <img src={section2Img} alt="" /></h1>
                            <h1>  <img src={book5} alt="" /></h1>
                            <h1>  <img src={book6} alt="" /></h1>
                            <h1>  <img src={book7} alt="" /></h1>
                        </div>
                        <img src={rectangle} className='mt-[-4%]' alt="" />

                    </section>
                    {/* ////////////////////child 3/////////////////////// */}
                    <section className='mt-20'>
                        <div className='flex justify-between mr-8 '>
                            <div className='flex gap-4 items-center'> <span> <img src={courseIcon3} alt="" /></span><span className='text-[28px]  font-bold'>Aenean Facilisis</span></div>
                            <div className='flex gap-4 items-center'><h1 className='text-[24px] font-medium text-[#00BCD4]'>See all</h1> <span>  <img src={forwardIcon} alt="" /></span></div>
                        </div>
                        <div className='flex box-border  mt-6 '>
                            <h1>  <img src={book1} className='' alt="" /> </h1>
                            <h1>  <img src={section3Img} alt="" /></h1>
                            <h1>  <img src={book2} alt="" /></h1>
                            <h1>  <img src={book3} alt="" /></h1>
                            <h1>  <img src={book4} alt="" /></h1>
                            <h1>  <img src={book5} alt="" /></h1>
                            <h1>  <img src={book6} alt="" /></h1>
                            <h1>  <img src={book7} alt="" /></h1>
                        </div>
                        <img src={rectangle} className='mt-[-4%]' alt="" />

                    </section>
                </div>
            </section>
            {/* //////////////////////////2nd last Section///////////////////////// */}
            <section className='mx-[5%] my-20 flex items-start  justify-around'>
                <div className='w-[50%] '>
                    <h1 className='text-[#525596] flex gap-5 items-center font-sans tracking-widest text-[20px] '><div className='w-20 border-b-2  '></div> TESTIMONIAL</h1>
                    <h1 className='text-[60px] text-[#2F327D] my-6 font-bold'>What They Say?</h1>
                    <h1 className='text-[26px] text-[#696984] '>TOTC has got more than 100k positive ratings from our users around the world. </h1>
                    <h1 className='text-[26px] text-[#696984] my-8 '>Some of the students and teachers were greatly helped by the Skilline.</h1>
                    <h1 className='text-[26px] text-[#696984] '>Are you too? Please give your assessment</h1>
                    <button className='rounded-full text-[22px] font-[500] my-10 hover:bg-white pl-10  border border-[#49BBBD] hover:text-black text-[#49BBBD] bg-transparent flex justify-center items-center'> Write your assessment <span className='ml-5 py-7 px-6 border-[#49BBBD]  rounded-full border'> <img src={forwardArrow} alt="" /></span></button>
                </div>
                <div className='w-[50%]  '>
                    <div className=''>
                        <Slider />
                    </div>
                </div>
            </section>
            {/* ///////////////////////////last section//////////////////// */}
            <section className='mx-[5%] mt-52'>
                <h1 className='text-[#2F327D] text-center text-[36px] font-bold'>Lastest News and Resources</h1>
                <h1 className='text-[#696984] text-[24px] mt-10 mb-20 text-center'>See the developments that have occurred to TOTC in the world</h1>
                <div className='flex justify-around gap-20'>
                    <div className='w-[40%]'>

                        <span><img src={lastSectionImg1} alt="" /></span>
                        <button className='rounded-3xl text-[22px] font-[500] my-10 hover:bg-white px-10 py-2 border hover:text-black text-white bg-[#49BBBD]'> NEWS</button>

                        <h1 className='text-[26px] text-[#252641] font-medium'>Class adds $30 million to its balance sheet for  a Zoom-friendly edtech solution</h1>
                        <h1 className='text-[#696984] text-[20px] my-8'>Class, launched less than a year ago by Blackboard  co-founder Michael Chasen, integrates exclusively...</h1>
                        <Link className='text-[#696984] text-[22px] border-b-2 '>Read more</Link>

                    </div>
                    <div className='w-[60%]'>
                        <div className='flex gap-8'>
                            <span className='relative w-[40%]'><img src={lastSectionSideImg1} alt="" />
                                <button className='absolute bottom-[13%] right-[5%]  rounded-3xl text-[18px] font-[400]  hover:bg-white px-5 py-2 border hover:text-black text-white bg-[#49BBBD]'> PRESS RELEASE</button>
                            </span>
                            <span className='w-[70%]' >
                                <h1 className='text-[22px] font-medium text-[#252641]'>Class Technologies Inc. Closes $30 Million  Series A Financing to Meet High Demand</h1>
                                <h1 className='text-[20px] mt-5 text-[#696984]'>Class Technologies Inc., the company that  created Class,...</h1>
                            </span>
                        </div>
                        <div className='flex gap-8 mt-12'>
                            <span className=' w-[40%] relative' ><img src={lastSectionSideImg2} alt="" />
                                <button className='absolute bottom-[13%] right-[5%]  rounded-3xl text-[18px] font-[400]  hover:bg-white px-5 py-2 border hover:text-black text-white bg-[#49BBBD]'> NEWS</button>
                            </span>
                            <span className='w-[70%]' >
                                <h1 className='text-[22px] font-medium text-[#252641]'>Zoom’s earliest investors are betting  millions on a better Zoom for schools</h1>
                                <h1 className='text-[20px] mt-5 text-[#696984]'>Class Technologies Inc., the company that  created Class,...</h1>
                            </span>
                        </div>
                        <div className='flex gap-8 mt-12'>
                            <span className=' w-[40%] relative'><img src={lastSectionSideImg3} alt="" />
                                <button className='absolute bottom-[13%] right-[5%]  rounded-3xl text-[18px] font-[400]  hover:bg-white px-5 py-2 border hover:text-black text-white bg-[#49BBBD]'> NEWS</button>

                            </span>
                            <span className='w-[70%]' >
                                <h1 className='text-[22px] font-medium text-[#252641]'>Former Blackboard CEO Raises $16M to  Bring LMS Features to Zoom Classrooms</h1>
                                <h1 className='text-[20px] mt-5 text-[#696984]'>Class Technologies Inc., the company that  created Class,...</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Landing