import React from 'react'
import About from './About'
import Blog from './Blog'
import Footer from './Footer'
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

export default Home