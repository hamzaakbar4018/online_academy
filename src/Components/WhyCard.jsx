import React from 'react';

const WhyCard = ({ icon: Icon, title, details }) => {
    return (
        <>
            <div className='w-[200px] gap-4 ml-14 mr-10 mb-[-6] flex flex-col justify-center items-center rounded-lg h-[400px] '>
                <Icon size={50} />
                <h1 className='font-bold'>{title}</h1>
                <p className='ml-8'>{details}</p>
            </div>
        </>
    );
}

export default WhyCard;
