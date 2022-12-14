import React from 'react'
import About from './Problems'
import Blog from './Blog'
import Hero from './Hero'
import Prevention from './Prevention'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Prevention/>
      <Blog/>
    </div>
  )
}

export default Home;