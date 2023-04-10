import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40
            flex flex-col justify-center'>
                <h1 className='px-4 text-2xl sm:text-4xl md:text-5xl lg:7xl font-bold'>Get the ultimate shopping <br/>
                <span>Experience</span>
                <span className='text-[#004DE6]'> from the Comfort of your home</span></h1>
                
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://dlabs.ai/wp-content/uploads/2022/03/ai-in-retail-benefits.png' alt='/'/>
        </div>
    </div>
  )
}

export default Hero