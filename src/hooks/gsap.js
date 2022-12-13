import { useEffect } from "react"
import gsap,{Expo} from "gsap";

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
        delay:0.3
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
        delay:0.8
      }
      )
  },[])
}