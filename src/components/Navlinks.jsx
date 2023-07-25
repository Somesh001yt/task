import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
  const links = [
    { name: "Products",
     submenu: true,
     sublinks: [
     { name:'lorem'},
     { name:'lorem'},
     { name:'lorem'},
     { name:'lorem'},

     ]
  },
    { name: "Statics Knowledge" },
    { name: "Download" ,
    submenu: true,
    sublinks: [
    { name:'lorem'},
    { name:'lorem'},
    { name:'lorem'},
    { name:'lorem'},

    ]},
    { name: "Support",
    submenu: true,
    sublinks: [
    { name:'lorem'},
    { name:'lorem'},
    { name:'lorem'},
    { name:'lorem'},

    ] },
    { name: "About Us" },
    { name: 'Contact us' }
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          <div className='px-3 text-left md:cursor-pointer group'>
          <h1 className='py-4  text-base md:text-xs hover:text-red-300 capitalize'>{link.name}</h1>
          
          {link.submenu &&  <div>
            <div className='absolute  top-10 hidden group-hover:block hover:block '>
              <div className='py-3'>
                <div className='w-4 h-4 left-3 absolute mt-1 bg-[#f8f8f8] rotate-45'></div>
              </div>
              <div className='bg-[#f8f8f8] p-3.5'>
                {
                  link.sublinks.map(item => (
                    <div>
                      <h1 className='text-sm text-gray-600 my-2 hover:text-sm capitalize duration-75'>{item.name}</h1>
                    </div>
                  ))
                }
              </div>
            </div>
            </div>}
            </div>       

        </div>
      ))}
    </>
  );
}

export default Navlinks;
