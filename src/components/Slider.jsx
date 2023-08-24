import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
      },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
    },

    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902651/Art/pexels-steve-johnson-1585323_buftdm.jpg',
    },
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692903659/Art/pexels-steve-johnson-1266808_mrbyat.jpg',
      },
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902684/Art/pexels-steve-johnson-2007088_ue2huj.jpg',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='text-white'>
    <div className='max-w-[1400px] mt-[-96px] w-full h-screen mx-auto py-28 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BiLeftArrowAlt onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BiRightArrowAlt onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;