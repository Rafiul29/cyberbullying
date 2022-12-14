import React, { useRef } from "react";
import {useGsapAboutContent,useGsapAboutFirstImageUnveil,useGsapAboutSceondImageUnveil} from "../hooks/gsap"


const About = () => {
  const aboutHeaderRef=useRef(null)
  const aboutFirstImageShutterRef=useRef(null)
  const aboutFirstTitleRef=useRef(null)
  const aboutSceondImageShutterRef=useRef(null)
  const aboutSceondTitleRef=useRef(null)
  const aboutRef=useRef(null)

  useGsapAboutContent(aboutHeaderRef)
  useGsapAboutContent(aboutFirstTitleRef,"100vW",0)
  useGsapAboutContent(aboutSceondTitleRef)
  useGsapAboutFirstImageUnveil(aboutFirstImageShutterRef,aboutRef)
  useGsapAboutSceondImageUnveil(aboutSceondImageShutterRef,aboutRef)
  
  return (
    <section className="wrapper about" ref={aboutRef}>
      <h2 className="about-header" ref={aboutHeaderRef}>Problems</h2>
      <div className="about-first" >
        <div className="about-first-l">
          <img
            src="https://images.thedailystar.net/sites/default/files/feature/images/2021/04/08/women.jpg"
            alt="about-first-image"
          />
          <span className="about-first-image-shutter" ref={aboutFirstImageShutterRef}></span>
        </div>
        <div className="about-first-r">
          <h3 className="about-title" ref={aboutFirstTitleRef}>Women faces what prblems?</h3>
          <p>
          Women may create a screen name that is very similar to another women’s name.pt1 The name may have an additional "i" or one less "e". They may use this name to say inappropriate things to other users while impersonating as another user.
          </p>
          <p>
          A picture or video of women in a bathroom or dressing room may be taken and posted online or sent to others on cell phones.
          </p>
          <p>Criminals may send hateful or threatening messages to women, without realizing pt5that while not said in real life, unkind or threatening messages are hurtful and very serious.</p>
        </div>
      </div>

      <div className="about-second">
        <div className="about-second-l">
          <h3 className="about-title" ref={aboutSceondTitleRef}>Business cyberbullying?</h3>
          <p>"Business cyberbullying can cause lost revenue, a decrease in employee morale and a downtick in a company's persona and prestige," says Greg Williams, a negotiating and body language expert and author of Negotiating With a Bully.</p>
          <p>Ashley Black agrees. She's the inventor of the FasciaBlaster®, a self-treatment tool designed to lessen the look of cellulite and reduce pain.</p>
          <p>"Business cyberbullying attacks can be professional and very sophisticated," she says. "Cyber 'trolls'</p>
        </div>
        <div className="about-second-r">
          <img  
            src="https://thumbs.dreamstime.com/z/business-man-computer-stress-concept-hand-accusing-finger-pointing-him-crisis-39044443.jpg"
            alt="about second image"
          />
            <span className="about-second-image-shutter" ref={aboutSceondImageShutterRef} ></span>
        </div>
      </div>
    </section>
  );
};

export default About;
