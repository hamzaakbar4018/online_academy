import React from 'react';
import { SiAbstract } from "react-icons/si";
import WhyCard from './WhyCard';
import { ImAmazon } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";
import { ImBlogger } from "react-icons/im";
const Why = () => {
    const data = [
        {
            icon: ImAmazon,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        },
        {
            icon: ImAppleinc,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        },
        {
            icon: SiAbstract,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        },
        {
            icon: ImBlogger,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        }
        ,
        {
            icon: SiAbstract,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        }
        ,
        {
            icon: ImAmazon,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        }
        ,
        {
            icon: SiAbstract,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        }
        ,
        {
            icon: ImAppleinc,
            title: 'Certifications',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.'
        }
        
    ];
    
    return (
        <div>
            <h1 className='text-center font-bold text-[50px] text-[#F03939]'>Why Choose Future Edge</h1>
            <div className='md:flex ml:6 flex justify-center p-4 flex-wrap '>
            {data.map((item, index) => (
                <WhyCard key={index} icon={item.icon} title={item.title} details={item.details} />
            ))}
            </div>




            <div className='p-[15%] flex '>
                <div className="left w-1/2">
                <h1 className='text-[#F03939] font-bold text-[30px] md:text-[45px]'>Exclusive Placement Assistance of 3+ Years</h1>
                <button className='bg-[#F03939] font-bold p-2 mt-3 text-white rounded-lg'>Get Started</button>
                </div>
                <div className="right w-1/2">
                    <img className='ml-8' src="/image.png" alt="" />
                    
                </div>
            </div>
        </div>
    );
}

export default Why;
