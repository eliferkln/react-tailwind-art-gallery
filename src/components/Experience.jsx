import React from 'react';


const Experience = () => {
  const url = "https://res.cloudinary.com/duotxzytv/image/upload/v1692904349/Art/pexels-tiana-2956376_ojlvy4.jpg";
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={url} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#F86F03] font-bold '>Living the art experience</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We connect with an audience sensitive to the changes taking place in the art world and in the world in general.</h1>
          <p>
          Our goal has always been to promote contemporary art within a line that goes from modern figuration to the purest abstract art.
          </p>
          <button className='bg-black text-[#F86F03] w-[240px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:text-white'>Latest Art News & Stories</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
