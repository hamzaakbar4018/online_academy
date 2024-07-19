import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex  md:flex-row justify-between items-center font-bold m-4 md:m-8 text-[#D20202]'>
      <div className='logo p-2'>
        <h2>Future Edge</h2>
      </div>
      <nav className={`items p-2 mt-4 md:mt-0 ${isOpen ? 'active' : ''}`}> {/* Conditional class for responsiveness */}
        <ul id='diff' className={`flex flex-wrap justify-center md:justify-end gap-4 md:gap-10 ${isOpen ? 'flex' : 'hidden md:flex'} `}> {/* Conditional rendering for mobile */}
          <li>Courses</li>
          <li>Testimonials</li>
          <li>WhyFutureEdge</li>
          <li>Mentors</li>
          <li>Alumni</li>
        </ul>
      </nav>
      <div className='logs flex gap-4 md:gap-6 mr-4 md:mt-0'>
        <button className='h-10'>Sign up</button>
        <button className='text-white bg-[#D20202] p-2 h-10 rounded-lg'>Login</button>
      </div>
      <button className='md:hidden toggle-button' onClick={toggleMenu}> {/* Menu toggle for mobile */}
        {isOpen ? <FaTimes /> : <FaBars />} {/* Display appropriate icon */}
      </button>
    </div>
  );
};

export default NavBar;
