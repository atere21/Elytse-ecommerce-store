import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Talent from './components/Talent'
import Newsletter from './components/Newsletter'
import LookBook from './components/LookBook'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Talent/>
      <Newsletter/>
      
      <LookBook/>
    </div>
  )
}

export default App