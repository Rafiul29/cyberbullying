import React from 'react'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import Prevention from './Prevention'

const Home = () => {

  // https://www.istockphoto.com/search/2/image?phrase=cyberbullying&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcyberbullying&utm_term=cyberbullying%3A%3A%3A

  return (
    <div>
      <Hero/>
      <About/>
      <Prevention/>
      <Footer/>
    </div>
  )
}

export default Home