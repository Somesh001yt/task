import React, { useState } from 'react';

const DifferenceFinder = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState(null);

  const computeDifferences = () => {
    const itemsA = listA.split('\n').map(item => item.trim());
    const itemsB = listB.split('\n').map(item => item.trim());

    const uniqueA = itemsA.filter(item => !itemsB.includes(item));
    const uniqueB = itemsB.filter(item => !itemsA.includes(item));
    const common = itemsA.filter(item => itemsB.includes(item));
    const combined = [...uniqueA, ...uniqueB];

    const differences = {
      uniqueA,
      uniqueB,
      common,
      combined
    };

    setResult(differences);
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-8">
  <div>
    <h2 className="ml-4 font-semibold text-md md:text-xl mb-5">Enter List A</h2>
    <textarea
      className=" w-[92vw] md:w-96 h-60 rounded-2xl text-black border p-2 border-black"
      value={listA}
      onChange={(e) => setListA(e.target.value)}
      rows="5"
    />
  </div>

  <div>
    <h2 className="ml-4 font-semibold text-md md:text-xl mb-5">Enter List B</h2>
    <textarea
      className="w-[92vw] md:w-96 h-60 rounded-2xl text-black border p-2 border-black"
      value={listB}
      onChange={(e) => setListB(e.target.value)}
      rows="5"
    />
  </div>
</div>

<button className="w-28 h-10 mt-8 ml-6 bg-[#337ab7] rounded-lg text-white mx-auto md:ml-[45%] md:mr-auto" onClick={computeDifferences}>
  Compute
</button>

{result && (
  <div>
    <h2 className="text-xl font-semibold mb-10 ml-6 md:ml-20  mt-6">Results</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className='w-[90%]  md:w-72  mx-auto md:ml-20 border rounded-lg'>
        <div  className="bg-[#d9edf7] p-4 rounded h-14">
        <h3 className="text-lg font-medium mb-2 text-[#62708f]">A only</h3>

        </div>
        <ul>
          {result.uniqueA.map((item, index) => (
            <li className='p-2 text-xs' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div  className='w-[90%]  md:w-72 mx-auto  md:ml-10 border rounded-lg'>
        <div   className="bg-[#f2dede] p-4 rounded h-14">
        <h3 className="text-lg font-medium mb-2 text-[#a9444c]">B Only</h3>

        </div>
        <ul>
          {result.uniqueB.map((item, index) => (
            <li className='p-2 text-xs' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div  className='w-[90%]  md:w-72 mx-auto  border rounded-lg '>
        <div   className="bg-[#d9edf7] p-4 rounded h-14">
        <h3 className="text-lg font-medium mb-2 text-[#62708f]">A and B</h3>

        </div>
        <ul>
          {result.common.map((item, index) => (
            <li className='p-2 text-xs' key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div  className='w-[90%]  md:w-72 mx-auto  md:ml-20 mt-10 flex-wrap mb-5 border rounded-lg'>
        <div   className="bg-[#dff0d8] p-4 rounded h-14">
        <h3 className="text-lg font-medium mb-2 text-[#8b853d]">A or B Unique</h3>

        </div> <ul>
          {result.combined.map((item, index) => (
            <li className='p-2 text-xs' key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default DifferenceFinder;
