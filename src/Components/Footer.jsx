import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='mt-10 m-10 flex text-white  justify-between font-bold bg-[#440303] h-[80%]'>
        <div className='left'>
        <img  className='img w-64 p-12 ' src="https://s3-alpha-sig.figma.com/img/b006/0488/b1028d892da34840b50f5a55d8fcbd97?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5Q2OVp~hVsDEhwychwKBbTt4kaqL0ccp-TciPZqp6rXGjookpAn-82JVLsxwrDBZvCxXoY7hkbLLtZNjm6zunR~WQTHCZLrPDnVSnCTi5dUoksicmSR7TSWt1cxspYdwC9McW31tgny3QDX6Hp-MMeYcHgQyagW1fPQw3X4KKgopa0kXYsw7fczlZICzG4zJZLDyowBGp50S6n~SXy4lcFg-PSKDcEjQlQ11Z51vqY9D3hkAC2OPu9rcI9tgJ2Ny7lHAzV~Krk22BWRN37uInaIkWPbetYz2X4ppUgIU~SmKJaywMm9rDMqQcdlVuhtF5AsIVJZGGC4hE-X-7XbRw__" alt="" />    
        </div>
        <div className='md:flex justify-between gap-32 mr-10 mt-9 '>
        <div className="explore">
            <h1>Explore</h1>
            <ul className='flex mt-3 flex-col gap-4'>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Features</li>
            </ul>
        </div>
        <div className='company'>
        <h1>Company</h1>
        <ul className='flex mt-3 flex-col gap-4'>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
        </ul>

        </div>
        <div className='Get in touch'>
        <h1>Get in touch</h1>
        <ul className='flex mt-3 flex-col gap-4'>
            <li>Sky@gmail.com</li>
            <li>+92317*******</li>
            <li className='flex text-3xl gap-4 mt-8'>
                <FaWhatsapp/>
                <FaInstagram/>
                <FaLinkedin/>
            </li>
        </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer