import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Talent from './components/Talent'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Talent/>
      <Newsletter/>
    </div>
  )
}

export default App