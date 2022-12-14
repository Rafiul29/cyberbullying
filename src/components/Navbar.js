import { Link } from "react-router-dom";
import React, { useRef } from 'react'
import {useGsapNavDownStagger} from "../hooks/gsap"
const Navbar = () => {
  const li1=useRef(null);
  const li2=useRef(null);
 

  const logoRef=useRef(null);
  const blogRef=useRef(null);


  const liArr=[li1,li2]
  const logoArr=[logoRef]
  const blogArr=[blogRef]

  // style={{marginLeft:"4rem"}} 

  useGsapNavDownStagger(liArr,0.8);
  useGsapNavDownStagger(logoArr,1.1);
  useGsapNavDownStagger(blogArr,1.6);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
          <li ref={li1}>
            <Link to='/about'>Problems</Link>
          </li>
          <li ref={li2}>
            <Link to='/prevention'>Prevention</Link>
          </li>
        </ul>

        <div className="logo" ref={logoRef}>
          <Link to="/">
          <h2>CyberBullying</h2>
          </Link>
        </div>

        <div className="blog" ref={blogRef}>
            <Link to='/blog'>Blog</Link>
        </div>
    </nav>
  );
};

export default Navbar;
