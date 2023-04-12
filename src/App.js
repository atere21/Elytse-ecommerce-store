import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Talent from './components/Talent'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Talent/>
    </div>
  )
}

export default App