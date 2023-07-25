import React from 'react';

const Details = ({ image, name, description }) => {
  return (
    <div >
    

      <div className='flex w-full md:w-[90%] h-40 mt-8 border-b mb-8'>
        <img className='w-16 h-16 md:w-52 md:h-52 mt-2 md:mt-[-20px] rounded-lg object-contain' src={image} alt='' />
        <div>
          <h4 className='mt-1 md:mt-4 ml-4 text-sm md:text-lg font-semibold'>{name}</h4>
          <p className='text-[10px] md:text-xs ml-4 w-60 md:w-[90%] '>{description}</p>
          <p className='bg-red-500 text-white text-[8px] md:text-xs w-20 md:w-32 mt-4 md:mt-8 h-6 md:h-8 rounded-lg p-1 md:p-2 ml-36 md:ml-80 '>View Product Detail</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
