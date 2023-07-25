import React from 'react'
import Logo from '../assests/logo.jpg'

const Footer = () => {
  return (
    <div className='flex  justify-evenly bg-gray-600 text-white h-72 w-full'>
        <div className='flex flex-col mr-4'>
        <img className='w-8 h-8 md:w-16 md:h-16 object-contain mt-6' src={Logo} alt="logo" />

        <div>

            
        </div>

        <div>
            <h4 className='text-red-500 text-xs md:text-base mt-8 '>Follow us On</h4>
            <div className='flex justify-evenly  mt-1 ml-[-5px]'>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-google"></ion-icon>
            </div>
           

        </div>
        </div>
    {/* 2nd col */}
        <div className=''>
         <h4 className='mt-4 text-red-600 text-xs md:text-lg font-semibold'>Quick Links</h4>
         <ul className='mt-4 font-semibold text-[8px] md:text-sm '>
            <li className='mb-2'>Home</li>
            <li  className='mb-2'>Our Products</li>
            <li  className='mb-2'>Static Knowledge</li>
            <li  className='mb-2'>Download</li>
            <li  className='mb-2'>Support</li>
            <li  className='mb-2'>About Us</li>
            <li  className='mb-2'>Contact Us</li>
         </ul>
        </div>

        {/* 3rd col */}

        <div>
         <h4 className='mt-4 text-red-600 text-xs md:text-lg font-semibold'>Support</h4>
         <ul className='mt-4 font-semibold text-[8px] md:text-sm'>
            <li  className='mb-2'>Frequently Asked Question</li>
            <li  className='mb-2'>Cookie Statement</li>
            <li  className='mb-2'>Legal Notice</li>
            <li  className='mb-2'>Privacy policy</li>
         </ul>
        </div>


{/* 4th col */}

        <div>
       <h4 className='mt-4 text-red-600 font-semibold text-xs md:text-lg'>Contact Details</h4>
        <h6 className='mt-3 font-bold text-[8px] md:text-sm '>Tailwan Head Office</h6>
        <div className='flex flex-col'>
        <div className='flex mt-2'>
                <ion-icon name='call-outline' className='text-gray-500 w-3'></ion-icon>
                <span className='text-[8px] md:text-xs ml-1 md:ml-2'>923792420</span>
              </div>
              <div className='flex mt-4'>
                <ion-icon name='mail-outline' className='text-gray-500 w-3 '></ion-icon>
                <span className='text-[8px] md:text-xs ml-1 md:ml-2'>wincker123@gmail.com</span>
              </div>
              <div className='flex mt-4'>
                <ion-icon name='location-outline' className='text-gray-500 w-3 '></ion-icon>
                <span className='text-[8px] md:text-xs ml-1 md:ml-2'>1st Floor, No, 304 Yanshou street, <br />Taipy City, 10034</span>
              </div>

        </div>

        </div>
    </div>
  )
}

export default Footer