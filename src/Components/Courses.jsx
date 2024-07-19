import React from 'react';
import Card from './Card';

const Courses = () => {
  const courses = [
    {
      title: 'Financial Modeling',
      details: {
        one: '27 hands-on courses',
        two: 'NSE certification',
        three: 'Skills financial Statement Analysis',
        four: 'Pricing Rs 23,000'
      }
    },
    {
      title: 'Investment Banking',
      details: {
        one: '27 hands-on courses',
        two: 'NSE certification',
        three: 'Skills financial Statement Analysis',
        four: 'Pricing Rs 23,000'
      }
    },
    {
      title: 'International Business',
      details: {
        one: '27 hands-on courses',
        two: 'NSE certification',
        three: 'Skills financial Statement Analysis',
        four: 'Pricing Rs 23,000'
      }
    }
  ];

  return (
    <div>
      <h1 className='text-center font-bold text-[50px] text-[#F03939]'>Our Courses</h1>
      <p className='text-center mr-3 mt-2 mb-8'>All the courses can be pursued after passing 12th exams along with graduation</p>
      <div className='flex mr-5 flex-wrap justify-center gap-4'>
        {courses.map((course, index) => (
          <Card key={index} title={course.title} details={course.details} />
        ))}
      </div>



      <div className="ultimate md:ml-32 mr:20 mt-16 md:flex">
                <div className="left flex  flex-col justify-center ml-7 md:w-1/2">
                    <h1 className='text-[#F03939] ml:20 font-bold text-[30px] md:text-[50px]'>Our Ultimate Courses</h1>
                    <p className='mb-16 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum voluptate possimus error, omnis minima praesentium, nobis debitis aspernatur iste officiis necessitatibus quod facere facilis ullam. Quaerat aspernatur quo recusandae?</p>
                </div>
                <div className="right ml-8 md:w-1/2 ">
                    <Card  title={courses[0].title} details={courses[0].details}/>
                </div>
            </div>
    </div>
  );
}

export default Courses;
