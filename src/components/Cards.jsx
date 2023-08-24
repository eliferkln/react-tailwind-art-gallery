import React from 'react';

const Cards = () => {
    const urls = [
        {
            url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905827/Art/pexels-curioso-photography-288100_sezlvs.jpg',
          },
        {
          url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905835/Art/pexels-anni-roenkae-4175054_rkylc4.jpg',
        },
        {
          url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905842/Art/pexels-alexander-ant-7031674_a3epp4.jpg',
        },
        {
            url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906676/Art/pexels-anni-roenkae-2983141_grtusf.jpg',
          },
        {
          url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906679/Art/pexels-lisa-fotios-2099528_d5gmhy.jpg',
        },
        {
          url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906687/Art/pexels-steve-johnson-1812960_vg30ma.jpg',
        },
      ];
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[0].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Alexander Ant </h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$642</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12 mx-auto px-6 py-3  hover:text-black text-white'>Start Auction</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[1].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Angela Roma</h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$580</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12 mx-auto px-6 py-3  hover:text-black text-white'>Start Auction</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[2].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Tatiana Syrikova</h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$600</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12  mx-auto px-6 py-3  hover:text-black text-white'>Start Auction</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[3].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Steve Johnson</h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$682</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12  mx-auto px-6 py-3  hover:text-black text-white'>Start Auction</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[4].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Monstera Acvor</h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$556</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12  mx-auto px-6 py-3  hover:text-black text-white'>Start Auction</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 h-40 mx-auto mt-[-3rem] bg-white' src={urls[5].url} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Felix Icco</h2>
              <p className='text-center text-2xl font-bold hover:text-blue-400'>$400</p>
              <button className='bg-[#F86F03] w-[200px] rounded-md font-medium my-12  mx-auto px-6 py-3 hover:text-black text-white'>Start Auction</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
