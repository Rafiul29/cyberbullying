import React, { useRef } from "react";
import {useGsapProblemContent,useGsapProblemFirstImageUnveil,useGsapProblemSceondImageUnveil} from "../hooks/gsap"


const Problem = () => {
  const problemHeaderRef=useRef(null)
  const problemFirstImageShutterRef=useRef(null)
  const problemFirstTitleRef=useRef(null)
  const problemSceondImageShutterRef=useRef(null)
  const problemSceondTitleRef=useRef(null)
  const problemRef=useRef(null)

  useGsapProblemContent(problemHeaderRef)
  useGsapProblemContent(problemFirstTitleRef,"100vW",0)
  useGsapProblemContent(problemSceondTitleRef)
  useGsapProblemFirstImageUnveil(problemFirstImageShutterRef,problemRef)
  useGsapProblemSceondImageUnveil(problemSceondImageShutterRef,problemRef)
  
  return (
    <section className="wrapper problem" ref={problemRef}>
      <h2 className="problem-header" ref={problemHeaderRef}>Problems</h2>
      <div className="problem-first" >
        <div className="problem-first-l">
          <img
            src="https://images.thedailystar.net/sites/default/files/feature/images/2021/04/08/women.jpg"
            alt="problem-first-image"
          />
          <span className="problem-first-image-shutter" ref={problemFirstImageShutterRef}></span>
        </div>
        <div className="problem-first-r">
          <h3 className="problem-title" ref={problemFirstTitleRef}>Women faces what prblems?</h3>
          <p>
          Women may create a screen name that is very similar to another women’s name.pt1 The name may have an additional "i" or one less "e". They may use this name to say inappropriate things to other users while impersonating as another user.
          </p>
          <p>
          A picture or video of women in a bathroom or dressing room may be taken and posted online or sent to others on cell phones.
          </p>
          <p>Criminals may send hateful or threatening messages to women, without realizing pt5that while not said in real life, unkind or threatening messages are hurtful and very serious.</p>
        </div>
      </div>

      <div className="problem-second">
        <div className="problem-second-l">
          <h3 className="problem-title" ref={problemSceondTitleRef}>Business cyberbullying?</h3>
          <p>"Business cyberbullying can cause lost revenue, a decrease in employee morale and a downtick in a company's persona and prestige," says Greg Williams, a negotiating and body language expert and author of Negotiating With a Bully.</p>
          <p>Ashley Black agrees. She's the inventor of the FasciaBlaster®, a self-treatment tool designed to lessen the look of cellulite and reduce pain.</p>
          <p>"Business cyberbullying attacks can be professional and very sophisticated," she says. "Cyber 'trolls'</p>
        </div>
        <div className="problem-second-r">
          <img  
            src="https://thumbs.dreamstime.com/z/business-man-computer-stress-concept-hand-accusing-finger-pointing-him-crisis-39044443.jpg"
            alt="problem second image"
          />
            <span className="problem-second-image-shutter" ref={problemSceondImageShutterRef} ></span>
        </div>
      </div>
    </section>
  );
};

export default Problem;
