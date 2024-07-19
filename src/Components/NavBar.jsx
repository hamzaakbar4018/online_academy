import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between font-bold m-8 text-[#D20202]'>
        <div className='logo p-2'>
            <h2>Future Edge</h2>
        </div>
        <div className='items p-2'>
            <ul id='diff' className='flex flex-wrap gap-10'>
                <li>Courses</li>
                <li>Testimonials</li>
                <li>WhyFutureEdge</li>
                <li>Mentors</li>
                <li>Alumni</li>
            </ul>
        </div>
        <div className='logs flex gap-6'>
            <button className='h-10'>Sign up</button>
            <button className='text-white bg-[#D20202] p-2 h-10 rounded-lg'>Login</button>
        </div>
    </div>
  )
}

export default NavBar