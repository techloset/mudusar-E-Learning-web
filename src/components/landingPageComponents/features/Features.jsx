import React from 'react'
import section1Img from '../../../assests/landingPage/feature-section1-img.svg'
import section1Img1 from '../../../assests/landingPage/feature-section1-img1.svg'
import section1Img2 from '../../../assests/landingPage/feature-section1-img2.svg'
import section1Img3 from '../../../assests/landingPage/feature-section1-img3.svg'
import section2Img from '../../../assests/landingPage/feature-section2-girl-img.svg'
import section3Img from '../../../assests/landingPage/feature-section3-side-img.svg'
import section4Img from '../../../assests/landingPage/feature-section4-side-img.svg'
import section5Img from '../../../assests/landingPage/feature-section5-side-img.svg'


const Features = () => {
    return (
        <div className='mx-[5%] mt-28'>
            {/* section 1/////////////////////// */}
            <section>
                <h1 className='text-[36px] font-bold text-center'>Our <span className='text-[#00CBB8]'>  Features</span></h1>
                <h1 className='text-center text-[24px] mt-8 mb-14 text-[#696984]'>This very extraordinary feature, can make learning activities more efficient</h1>
                <div className='flex gap-10 items-center'>
                    <div className='w-[80%]'><img src={section1Img} alt="" /></div>
                    <div className='flex flex-col justify-around gap-10'>
                        <h1 className='text-[#2F327D] text-[40px] font-semibold'>A <span className='text-[#00CBB8]'> user</span> interface designed for the classroom</h1>
                        <div className='flex  justify-start gap-8 items-center'><div><img src={section1Img1} alt="" /></div><h1 className='text-[22px] text-[#696984]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                        </h1></div>
                        <div className='flex justify-start gap-8 items-center'><div><img src={section1Img2} alt="" /></div><h1 className='text-[22px] text-[#696984]'>TA’s and presenters can be moved to the front of the class.

                        </h1></div>
                        <div className='flex justify-start gap-8 items-center'><div><img src={section1Img3} alt="" /></div><h1 className='text-[22px] text-[#696984]'>Teachers can easily see all students and class data at one time.
                        </h1></div>
                    </div>
                </div>
            </section>
            {/* section 2///////////////////// */}
            <section className='mt-28'>
                <div className='flex justify-around gap-6 items-center'>
                    <div className='flex flex-col justify-around gap-6 w-[60%]'>
                        <h1 className='text-[#2F327D] text-[40px] font-semibold'><span className='text-[#00CBB8]'> Tools</span>  For Teachers <span><br /></span> And Learners</h1>
                        <h1 className='text-[#696984] text-[22px] w-[90%]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.</h1>
                    </div>
                    <div className=' mr-[7%]'><img src={section2Img} alt="" /></div>
                </div>
            </section>
            {/* section 3///////////////////// */}
            <section className='mt-28'>
                <div className='flex justify-around gap-6 items-center'>
                    <div className=' mr-[7%]'><img src={section3Img} alt="" /></div>
                    <div className='flex flex-col justify-around gap-6 w-[60%]'>
                        <h1 className='text-[#2F327D] text-[40px] font-semibold'>Assessments <span><br /></span> <span className='text-[#00CBB8]'> Quizzes</span>  , Tests</h1>
                        <h1 className='text-[#696984] text-[22px] w-[90%]'>Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.</h1>
                    </div>
                </div>
            </section>
            {/* section 4///////////////////// */}
            <section className='mt-28'>
                <div className='flex justify-around gap-6 items-center'>
                    <div className='flex flex-col justify-around gap-6 w-[60%]'>
                        <h1 className='text-[#2F327D] text-[40px] font-semibold'><span className='text-[#00CBB8]'> Class Management</span>   <span><br /></span> Tools for Educators</h1>
                        <h1 className='text-[#696984] text-[22px] w-[100%]'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                        </h1>
                    </div>
                    <div className=' '><img src={section4Img} alt="" /></div>
                </div>
            </section>
            {/* section 5///////////////////// */}
            <section className='mt-28'>
                <div className='flex justify-around gap-6 items-center'>
                    <div className=' '><img src={section5Img} alt="" /></div>
                    <div className='flex flex-col justify-around gap-6 w-[40%] ml-[6%]'>
                        <h1 className='text-[#2F327D] text-[40px] font-semibold'> One-on-One <br /><span className='text-[#00CBB8]'> Discussions</span> </h1>
                        <h1 className='text-[#696984] text-[22px] w-[100%]'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                        </h1>
                    </div>
                </div>
            </section>
            <div className='flex justify-center'>
            <button className='text-[24px]  text-[#49BBBD] rounded-full py-4 px-8 border border-[#49BBBD] '>See more features</button>
            </div>
        </div>
    )
}

export default Features