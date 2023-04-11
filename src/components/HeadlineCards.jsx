import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-18 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      
      <div className='rounded-xl relative'>
        
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white mx-2'>
          <p className='font-bold text-sm sm:text-xl px-2 pt-4 '>PASSION-FUELLED CRAFT<br/>
        </p><span >Read a message feom our founder </span>
          <p className='px-2'>Through 8/26</p>

        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/1371936145/photo/young-businessman-smiling-while-texting-on-smartphone-in-the-city.jpg?s=612x612&w=0&k=20&c=lUB09QzWg-daY_cE8NIT6UBM2zb6fEIIatysOLURm08='
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>We Pick-up And Deliver To You</p>
          <p className='px-2'>We cater to tech-savy Gen Z and Millenials who value personalized
          experiences</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Learn More</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=P1HGT160p5KKWMmSlH_q4bs_5zKtRkHwjLCNgLcsRDc='
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>GET THE PERFECT FIT!</p>
          <p className='px-2'>Our In-App 3D measuring Technology eliminates the need to visit a tailor</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Start Shopping</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://netconomy.net/wp-content/uploads/2023/03/AI-in-Retail-main-image.png'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;