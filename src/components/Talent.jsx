import React, { useState } from 'react';
import { data } from '../data/data.js';
// import Typed from 'react-typed';

const Talent = () => {
  //   console.log(data);
  const [tailor, setTailor] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setTailor(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterLocation = (location) => {
    setTailor(
      data.filter((item) => {
        return item.location === location;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-[#C9A800] font-bold text-4xl text-center'>
        Meet Talent In Our Network
      </h1>
      <p className='text-[#C9A800] font-sm text-xl text-center pb-8'>
        Access a strong community of over 5,000 vetted fashion designers</p>
      
      {/* Filter Row */}
      {/* <Typed strings={[]}/> */}
      <div className='flex flex-col lg:flex-row justify-between'>
       
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setTailor(data)}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-black hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('fabric merchant')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-black hover:text-white'
            >
              Fabric Merchant
            </button>
            <button
              onClick={() => filterType('fashion designer')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-black hover:text-white'
            >
              Fashion Designer
            </button>
            <button
              onClick={() => filterType('shoe cobbler')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-black hover:text-white'
            >
              Shoe Cobbler
            </button>
            {/* <button
              onClick={() => filterType('Social Wear')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-orange-600 hover:text-white'
            >
              
            </button> */}

            <button
              onClick={() => filterType('gold smith')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-orange-600 hover:text-white'
            >
              Gold Smith
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Location</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterLocation('Island')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-orange-600 hover:text-white'
            >
              Island
            </button>
            <button
              onClick={() => filterLocation('Mainland')}
              className='m-1 border-[#004DE6] text-[#C9A800] hover:bg-orange-600 hover:text-white'
            >
               Mainland
            </button>
            <button
              onClick={() => filterLocation('Ajah')}
              className='m-1  border-[#004DE6] text-[#C9A800] hover:bg-orange-600 hover:text-white'
            >
              Ajah
            </button>
            
          </div>
        </div>
      </div>

      {/* Display tailor */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {tailor.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
           
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-[#004DE6] text-white p-1 text-xs rounded-full'>
                  {item.location}
                </span>
              </p>
            </div>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default Talent;