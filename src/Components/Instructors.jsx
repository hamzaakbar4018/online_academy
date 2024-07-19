import React from 'react'
import CardIns from './CardIns'
const Instructors = () => {
    const inst = [
        {
            name: 'Ali',
            pic: '/t1.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.',
            post: 'Research Analyst'
        },
        {
            name: 'Fatima',
            pic: '/girl.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.',
            post: 'Research Analyst'
        },
        {
            name: 'Jhon',
            pic: '/t2.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptates quae aperiam molestiae veritatis impedit deleniti.',
            post: 'Research Analyst'
        }
    ];

    return (
        <div className=''>
            <h1 className='text-center font-bold text-[50px] text-[#F03939]'>Meet Your Instructors</h1>
            <p className='text-center text-[#F03939] pl-8 mt-2 mb-8'>Our faculty are all professionally qualified and have rich industry experience, essential for giving a practical perspective.</p>
            <div className='flex flex-wrap mr-8 justify-center gap-4'>
                {inst.map((instructor, index) => (
                    <CardIns
                        key={index}
                        name={instructor.name}
                        pic={instructor.pic}
                        details={instructor.details}
                        post={instructor.post}
                    />
                ))}
            </div>
            <h1 className='text-center pl-5 font-bold md:text-[50px] text-[20px] '>Where future edge Alumni Work</h1>
            <p className='text-center pl-8 mt-10 mb-8'>Our faculty are all professionally qualified and have rich industry experience, essential for giving a practical perspective.</p>
            <ul className='md:flex  p-4 ml-32 mb-10 mt-16 gap-8'>
                <li><img src="/one.png" alt="" /></li>
                <li><img src="/two.png" alt="" /></li>
                <li><img src="/three.png" alt="" /></li>
                <li><img src="/four.png" alt="" /></li>
                <li><img src="/five.png" alt="" /></li>
                <li><img src="/six.png" alt="" /></li>
            </ul>


            <div>

            </div>
        </div>
    )
}

export default Instructors
