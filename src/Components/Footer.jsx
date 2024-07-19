import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='mt-10 md:mx-10 text-white font-bold bg-[#440303] py-10'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex justify-center mb-8 md:mb-0'>
          <img
            className='w-64 md:ml-6 p-4'
            src="https://s3-alpha-sig.figma.com/img/b006/0488/b1028d892da34840b50f5a55d8fcbd97?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5Q2OVp~hVsDEhwychwKBbTt4kaqL0ccp-TciPZqp6rXGjookpAn-82JVLsxwrDBZvCxXoY7hkbLLtZNjm6zunR~WQTHCZLrPDnVSnCTi5dUoksicmSR7TSWt1cxspYdwC9McW31tgny3QDX6Hp-MMeYcHgQyagW1fPQw3X4KKgopa0kXYsw7fczlZICzG4zJZLDyowBGp50S6n~SXy4lcFg-PSKDcEjQlQ11Z51vqY9D3hkAC2OPu9rcI9tgJ2Ny7lHAzV~Krk22BWRN37uInaIkWPbetYz2X4ppUgIU~SmKJaywMm9rDMqQcdlVuhtF5AsIVJZGGC4hE-X-7XbRw__"
            alt=""
          />
        </div>
        <div className='flex md:mr-10 flex-col md:flex-row justify-between w-full md:w-auto gap-8 md:gap-32'>
          <div className='explore text-center md:text-left'>
            <h1 className='text-xl mb-4'>Explore</h1>
            <ul className='flex flex-col gap-4'>
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Features</li>
            </ul>
          </div>
          <div className='company text-center md:text-left'>
            <h1 className='text-xl mb-4'>Company</h1>
            <ul className='flex flex-col gap-4'>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='get-in-touch text-center md:text-left'>
            <h1 className='text-xl mb-4'>Get in touch</h1>
            <ul className='flex flex-col gap-4'>
              <li>Sky@gmail.com</li>
              <li>+923175516322</li>
              <li className='flex justify-center md:justify-start text-3xl gap-4 mt-8'>
                <FaWhatsapp />
                <FaInstagram />
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
