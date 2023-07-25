import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { scaleOutline, chevronForwardOutline } from 'ionicons/icons';

const ProductCategory = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);

  const categories = [
    { icon: scaleOutline, name: 'Ion Fam' },
    { icon: scaleOutline, name: 'Ion Bar' },
    { icon: scaleOutline, name: 'Nozzile & Spray Gun' },
    { icon: scaleOutline, name: 'High Voltage Power Supply' },
    { icon: scaleOutline, name: 'Measuring Equipment' },
    { icon: scaleOutline, name: 'x-ray' },
    { icon: scaleOutline, name: 'Explosing-Proof Static Eliminator' },
    { icon: scaleOutline, name: 'Static Electricity Generating Equipment' },

  ];

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
  };

  return (
    <div className="ml-10 w-64 mt-4 rounded-lg bg-[#f8f8f8]">
      <div>
        <h2 className="ml-4 mt-6 pt-4  text-base font-semibold  border-b pb-4   ">Product Categories</h2>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex justify-between rounded-lg p-2 w-full border-b cursor-pointer ${
              selectedHeading === index ? 'bg-red-800 text-white' : ''
            }`}
            onClick={() => handleHeadingClick(index)}
          >
            <div className="flex items-center">
                <div className='w-8 h-8 bg-white rounded-sm ml-2'>
                <IonIcon icon={category.icon} className="text-blue-500 mt-1.5 ml-1.5 bg-white text-xl" />
                </div>

              <h4 className="ml-2">{category.name}</h4>
            </div>
            <IonIcon icon={chevronForwardOutline} className="text-blue-500 text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;