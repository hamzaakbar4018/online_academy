const Card = ({ title, details }) => {
    return (
        <div className='w-[280px]  md:ml-14 ml-8 mb-5 border border-gray-600 rounded-lg h-[400px] p-3'>
            <div className="title m-[-12px] bg-[#661717] rounded-t-lg h-[30%]">
                <h1 className='text-white font-bold pt-10 text-center'>{title}</h1>
            </div>
            <div className="details">
                <ol className="flex flex-col gap-3 mt-4 ml-4 ">
                    <li>{details.one}</li>
                    <li>{details.two}</li>
                    <li>{details.three}</li>
                    <li>{details.four}</li>
                </ol>
            </div>

            <div className="btn text-white flex justify-center items-center flex-col mt-4 gap-2">
                <button className="font-bold rounded-lg border border-gray-600 p-2 bg-[#407BEF]  ">Download Brochure</button>
                <button className="font-bold rounded-lg border border-gray-600 w-[50%] p-2 bg-[#FF4820] ">Buy Now</button>
            </div>
        </div>
    );
}

export default Card;