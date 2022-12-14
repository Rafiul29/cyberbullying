import React, { useRef } from 'react'
import {useGsapFooterHeadLine} from "../hooks/gsap"
const Footer = () => {

  const footerRef =useRef(null)
  const footerHeadLineRef=useRef(null);
useGsapFooterHeadLine(footerHeadLineRef,footerRef)

  return <section className="footer" ref={footerRef}>
    <h1 ref={footerHeadLineRef}>Say No To Cyber Bullying!</h1>
    <p> &copy;{new Date().getFullYear()} Website Builder - React.js tool  </p>
  </section>
}

export default Footer
