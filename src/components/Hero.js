import React, { useRef } from 'react'
import {useGsapHeroContentStagger,useGsapHeroImageUnveil} from "../hooks/gsap"
const Hero = () => {

  const heroheaderRef=useRef(null)
  const herotextRef=useRef(null)
  const heroBtnRef=useRef(null)
  const heroImgRef=useRef(null)
 const imageShutterRef=useRef(null)
  const heroContentArr=[heroheaderRef,herotextRef,heroBtnRef]

  useGsapHeroContentStagger(heroContentArr)
  useGsapHeroImageUnveil(heroImgRef,"100%",0,0,1,2,2)
  useGsapHeroImageUnveil(imageShutterRef,0,"120%",1,0,4,2.5)

  return <section className="wrapper hero">
    <div className="hero-l">
      <h2 className="hero-heading" ref={heroheaderRef}>
      Cyberbullying – What is it?
      </h2>
      <p ref={herotextRef}>The uses of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.</p>
      <button className='hero-btn' ref={heroBtnRef}>what to do ?</button>
    </div>
    <div className="hero-r" >
    <img src="https://savvycyberkids.org/wp-content/uploads/2021/03/blog-what-is-cyberbullying.jpg" alt="" ref={heroImgRef}/>
    <span ref={imageShutterRef}></span>
    </div>
   
  </section>
}

export default Hero