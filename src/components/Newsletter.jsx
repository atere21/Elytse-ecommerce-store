import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 bg-black text-[#C9A800]'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
           <div className='lg:cols-span-2 '>
            <h1 className='md:text-4xl sm:text-3xl
            text-xl'>JOIN THE TREND, Find More STYLE!</h1>
              <p className='my-2' >Subscribe to get latest deals and get 10% off your first order
              </p>
           </div>
           <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
               <input className='p-3 flex w-[300px] rounded-md text-black md:w-full ' type='email' placeholder='Enter Email'/>
               <button className='bg-white hover:text-orange-500 border-none font-medium w-[200px] ml-4 my-6 px-6  rounded-md'>Subscribe</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Newsletter