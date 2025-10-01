'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
import OportunidadesGrid from './OportunidadesGrid'
gsap.registerPlugin(ScrollTrigger);

const Oportunidades = () => {

  const container = useRef(null);

  useGSAP(() => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "top 40%",
              scrub: 3,
          },
      });
      tl.from(".title__one", {
          opacity: 0,
          y: 50,
          x: 20,
          rotate: 3,
          duration: 1,
          ease: "power4.out",
      })
      gsap.from(".grid", {
          scrollTrigger: {
            trigger: container.current,
            start: "10% 40%",
            end: "top 10%",
            scrub: 2,
          },
          opacity: 0,
          y: 5,
          ease: "power4.out",
      })
  }, {scope: container})

    return (
          <div ref={container} className='flex py-12 flex-col md:w-[1300px] w-[90vw] mx-auto'>
              <div className='flex justify-between md:px-0 px-6 pt-12 pb-4'>
                <div className='titles flex flex-col'>
                  <h1 className='title__one text-4xl'>¡Invertí sin preocupaciones!</h1>
                </div>
                <div className='bg-amber-100 w-[600px] h-[120px]'>
                  COUNTER
                </div>
              </div>
              <div className='grid'>
                <OportunidadesGrid />
              </div>
          </div>
      )
}

export default Oportunidades