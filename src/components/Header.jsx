import React, { useState } from 'react';
import Logo from '../assests/logo.jpg';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import Hotel from '../assests/outdoor.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div style={{ position: 'relative' }}>
        {/* Background Image */}
        <img src={Hotel} alt="hotel" className='w-full h-52 md:h-60 z-0 overflow-hidden object-fit' />
        <div className='absolute top-1 left-1 right-4 text-white'>
          <div className='flex items-center justify-between px-4 py-2'>

            {/* Content on the Left Side */}
            <div className='flex text-sm items-center space-x-4'>
              <span className='text-[8px] md:text-xs'>ifosysy2@gmail.com</span>
              <span className='flex items-center space-x-1'>
                <ion-icon name='call-outline' className='text-gray-500 w-3 '></ion-icon>
                <span className='text-[8px] md:text-xs'>923792420</span>
              </span>
            </div>
            {/* Content on the Right Side */}
            <div className='flex items-center space-x-4 text-[8px] md:text-xs'>
              <span>
                <Link to='/login'>Login/Signup</Link>
              </span>
              <span>
                <Link to='/language'>Language</Link>
              </span>
            </div>
            <h2 className='absolute top-36 md:top-40 text-xl w-full md:text-5xl font-semibold left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
            Japanese SSD Products
          </h2>
          </div>
        </div>


        {/* Navbar */}
        <div className='absolute top-10 left-0 right-0 bg-white h-12 '>
       


          <div className='flex items-center font-semibold justify-around mt-[-8px]'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
              <img src={Logo} alt="logo" className='md:cursor-pointer h-8 mt-[-2px] ' />
              <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
              </div>
            </div>
            <div className='flex'>
              <ul className='md:flex hidden uppercase items-center gap-4 mt-[-10px]'>
                <li>
                  <Link to='/' className='py-6 px-3 ml-[-12px] inline-block text-xs hover:text-red-300 capitalize'> Home </Link>
                </li>
                <Navlinks/>
              </ul>
              {/* <ion-icon className='bg-black p-10' name='search-outline'></ion-icon> */}
            </div>
            {/* Mobile Navbar */}
            <ul className={`md:hidden bg-white absolute top-1 w-full h-full bottom-0 py-24  pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
              <li>
                <Link to='/' className='py-7 px-3 ml-[-13px] text-base inline-block md:text-lg hover:text-red-300 capitalize'/>
                Home
              </li>
              <Navlinks/>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
