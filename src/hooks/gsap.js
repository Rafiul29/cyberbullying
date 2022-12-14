
import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const  useGsapNavDownStagger=(arr,delay)=>{
  useEffect(()=>{
    const el= arr.map(item=>item.current)
    gsap.fromTo(el,{
      y:"-100%",
      opacity:0
    },{
      y:0,
      opacity:1,
      duration:1.5,
      stagger:0.15,
      case:Expo.easeIn,
      delay:delay
    })
    })
}

export const  useGsapHeroContentStagger=(arr)=>{
  useEffect(()=>{
    const el =arr.map(item=>item.current)

    gsap.fromTo(el,
      {
          y:"-40%",
          opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.2,
        duration:2.2,
        ease:Expo.easeInOut,
        delay:1.8
      }
      )
  },[])
}

export const useGsapHeroImageUnveil=(item,fromX=0,toX=0,opacityFrom=0,opacitTo=0,duration=0,delay=0)=>{
  useEffect(()=>{
    const el =item.current;

    gsap.fromTo(el,
      {
          x:fromX,
          opacity:opacityFrom
      },
      {
        x:toX,
        opacity:opacitTo,
        duration:duration,
        ease:Expo.easeInOut,
        delay:delay
      }
      )
  },[])
}

export const useGsapAboutContent=(item,Xfrom="-100vw",Xto=0)=>{
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: Xfrom,
      },
      {
        x: Xto,
        duration: 1.5,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, []);
}

export const useGsapAboutFirstImageUnveil=(item,trig)=>{
  // useEffect(()=>{
  //   const el=item.current;
  //   gsap.fromTo(
  //     el,
  //     {
  //       height:"100vw",
    
  //     },
  //     {
  //      height:0,
  //      duration:1.3,
  //      ease:Expo.easeInOut,
  //      scrollTrigger:{
  //       trigger:trig.current,
  //       start:"top cemter",
  //       end:"bottom center",
  //       toggleActions:"play reverse play reverse"
  //      }
  //     }
  //   )
  // },[])
}
 export const useGsapAboutSceondImageUnveil=(item,trig)=>{
  useEffect(()=>{
    const el=item.current;
    gsap.fromTo(
      el,
      {
        width:"100%",
    
      },
      {
       width:0,
       duration:1.3,
       ease:Expo.easeInOut,
       scrollTrigger:{
        trigger:trig.current,
        start:"top cemter",
        end:"bottom center",
        toggleActions:"play reverse play reverse"
       }
      }
    )
  },[])
 }