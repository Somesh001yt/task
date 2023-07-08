import React from 'react';
import DifferenceFinder from './components/DifferenceFinder'; 
import './index.css'

const App = () => {
  return (
    <>
    <div className='bg-[#f8f8f8] w-full h-12 mb-10'>
    <h1 className=' text-[#8c7777] ml-6 md:ml-20 pt-2 p-0'>List Difference Finder</h1>
    </div>

      <DifferenceFinder /> 

    </>
  );
};

export default App;
