import React, { useRef } from "react";
import {useGsapPreventionPhotoLevitate,useGsapPreventionTextStagger,useGsapPreventionHeader} from "../hooks/gsap"
const Prevention = () => {

  const preventionRef =useRef(null)
  const preventionImageRef=useRef(null)
  const imageArr=[preventionImageRef];

  const headerRef=useRef(null)

  const pretextHeader=useRef(null)
  const li1=useRef(null);
  const li2=useRef(null);
  const li3=useRef(null);
  const li4=useRef(null)

  const prevTextArr=[pretextHeader,li1,li2,li3,li4]

  useGsapPreventionHeader(headerRef,preventionRef)
  useGsapPreventionPhotoLevitate(imageArr,preventionRef)
  useGsapPreventionTextStagger(prevTextArr,preventionRef)

  

  return (
    <section className="preventation wrapper" ref={preventionRef}>
      <h2  ref={headerRef}className="prevention-heading">Prevention</h2>
      <div className="prevention-item">
      <div className="prev-l">
        <img ref={preventionImageRef}
          src="https://edubirdie.com/wp-content/themes/essay/assets/dist/images/join-us-bg.661f5ed4.svg"
          alt=""
        />
      </div>
      <div className="prev-r">
        <h3 ref={pretextHeader}>What can I do now?</h3>
        <ol>
          <li ref={li1}>
          Think before you post on social media
          </li>
          <li ref={li2}>Don't post bikini or nude pictures of yourself or other</li>
          <li ref={li3}>Don;t publish your business idea on socials media</li>
          <li ref={li4}>After all call police station to get the best help from them</li>
        </ol>
      </div>
      </div>
    </section>
  );
};

export default Prevention;
