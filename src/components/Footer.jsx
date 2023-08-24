import React from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter
} from 'react-icons/bi';

const Footer = () => {

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#F86F03] hover:text-white'>Art Gallery</h1>
        <p className='py-4'>We connect with an audience sensitive to the changes taking place in the art world and in the world in general.</p>
        <div className='flex justify-between md:w-[50%] my-6'>
            <BiLogoFacebookCircle size={30} />
            <BiLogoInstagram size={30} />
            <BiLogoTwitter size={30} />
            <BiLogoGithub size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 '>
    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-white'>About</li>
            <li className='py-2 text-sm  hover:text-white'>Blog</li>
            <li className='py-2 text-sm  hover:text-white'>The Gallery</li>
        </ul>

    </div>
    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-white'>Art Fairs</li>
            <li className='py-2 text-sm  hover:text-white'>Documentation</li>
            <li className='py-2 text-sm  hover:text-white'>Artists Worldwife</li>
  
        </ul>
    </div>

    <div>
        <ul>
            <li className='py-2 text-sm  hover:text-white'>Artists</li>
            <li className='py-2 text-sm  hover:text-white'>Policy</li>
            <li className='py-2 text-sm  hover:text-white'>Terms</li>
            <li className='py-2 text-sm  hover:text-white'>Works</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
