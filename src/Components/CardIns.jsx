import React from 'react'

const CardIns = ({ name, pic, details, post }) => {
    return (
        <div className='w-[280px] ml-14 mb-8 flex flex-col justify-center items-center  rounded-lg h-[400px] p-3'>
            <h1 className='font-bold text-xl mb-2'>{name}</h1>
            <img src={pic} alt={name} className='w-[60%] mt-3 object-cover rounded-full mb-3' />
            <p className='text-justify w-[80%] mb-3'>{details}</p>
            <h2 className=' font-semibold'>{post}</h2>
        </div>
    )
}

export default CardIns
