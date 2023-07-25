import React from 'react';
import Ac from '../assests/ac.jpg'
import Details from './Details'; 

const ProductDetailsContainer = () => {
  const products = [
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    {
      image: Ac,
      name: 'SSD Ion Fan Bf-4T',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt esse praesentium ratione, fugiat veritatis sunt repellat doloribus eius tempora? Nisi, veritatis deserunt sint iste ratione ullam magni rerum debitis exercitationem!',
    },
    // Add more product data as needed for other instances
  ];

  return (
    <div className='ml-2 md:ml-8 mt-8'>
       <div className='flex w-full ml-8'>
        <h2 className='text-sm  md:text-xl font-semibold'>Ion Fan</h2>
        <div className='w-44  md:w-[500px] h-[2px] bg-red-800 mt-2 md:mt-4 ml-8'></div>
      </div>
      {products.map((product, index) => (
        <div key={index} >
          <Details image={product.image} name={product.name} description={product.description} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsContainer;
