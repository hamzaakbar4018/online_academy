import React from 'react'

const Main = () => {
  return (
    <div className=' m-10 flex'>
        <div className='left w-1/2 '>
            <h1 className='text-[#F03939] font-bold md:text-[50px]'>Unlock Your Potential in Finance & Banking</h1>
            <h2 className='text-[#F03939] mt-3 mb-6 text-2xl'>
                Transform Your Dreams into Careers
            </h2>
            <p className='md:w-[80%] w-[180%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ab adipisci fuga, aut eaque earum incidunt veniam eos, itaque velit optio hic quibusdam? Nemo, laboriosam alias blanditiis quaerat amet veritatis.</p>
            <button className='bg-[#FF4820] w-[180px]  h-[72px] font-bold text-white mt-6 rounded-r-lg p-2'>Get Started</button>
        </div>
        <div className='right w-1/2'>
            <img className='md:w-[400px] w-[150px] md:ml-20 ml-3 rounded' src="/image.png" alt="" />
        </div>
    </div>
  )
}

export default Main