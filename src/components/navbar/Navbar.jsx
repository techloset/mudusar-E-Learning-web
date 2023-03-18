import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div className={`bg-[#${props.bg}]`} >
      <nav className={`flex justify-between items-center py-5 mx-[5%] text-${props.text} `}>
        <img src={props.logo} alt="" />
        <ul className='flex gap-10 text-[22px] font-normal items-center'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link to='/'>Careers</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/login'> <button className='rounded-3xl text-[22px] font-[500] bg-white px-8 py-2  text-black '>Login</button></Link></li>
          <li><Link to='register'> <button className='rounded-3xl text-[22px] font-[500] hover:bg-white px-8 py-2 border hover:text-black text-white bg-[#82d4d5]'> Sign Up</button></Link> </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar