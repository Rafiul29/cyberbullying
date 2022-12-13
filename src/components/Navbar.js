import { Link } from "react-router-dom";
import React, { useRef } from 'react'
import {useGsapNavDownStagger} from "../hooks/gsap"
const Navbar = () => {
  const li1=useRef(null);
  const li2=useRef(null);
  const li3=useRef(null);

  const logoRef=useRef(null);
  const searchRef=useRef(null);


  const liArr=[li1,li2,li3]
  const logoArr=[logoRef]
  const searchArr=[searchRef]

  

  useGsapNavDownStagger(liArr,0.8);
  useGsapNavDownStagger(logoArr,1.1);
  useGsapNavDownStagger(searchArr,1.6);

  return (
    <nav className="navbar wrapper">

      <ul className="links">
          <li ref={li1} >
            <Link to='/causes'>Causes</Link>
          </li>
          <li style={{marginLeft:"2rem"}} ref={li2}>
            <Link to='/effect'>Effect</Link>
          </li>
          <li style={{marginLeft:"4rem"}} ref={li3}>
            <Link to='/help'>Get Help Now</Link>
          </li>
      
        </ul>
        <div className="logo" ref={logoRef}>
          <Link to="/">
          <h2>CyberBullying</h2>
          </Link>
        </div>

        <ul className="links">
          <li ref={searchRef}>
            <Link to='/causes'>Causes</Link>
          </li>
        </ul>

    </nav>
  );
};

export default Navbar;
