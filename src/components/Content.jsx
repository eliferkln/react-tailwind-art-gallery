import React from 'react';

const Content = () => {
    const url = "https://res.cloudinary.com/duotxzytv/image/upload/v1692908315/Art/pexels-pok-rie-1255372_q87ckf.jpg";
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-6'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 hover:text-blue-400'>
          Current exhibitions
          </h1>
          <p>Uniting Nations through the Power of Art</p>
          <button className='bg-[#F86F03] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-3 py-3 mt-12 hover:text-white'>
          More details
            </button>
        </div>
        <div className='my-4'>
        <img className='w-100 h-30 mx-auto mt-[-3rem] bg-white' src={url} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Content;
