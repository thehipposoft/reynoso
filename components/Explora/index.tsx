'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Proyecto } from '@/types'


type ExploraTypes = {
    desarrollos: Proyecto[];
}

const Explora = ({desarrollos}:ExploraTypes) => {

  const container = useRef(null)

  useGSAP(() => {
        gsap.from(".box", {
          scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "top 40%",
              scrub: 3,
          },
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power4.out",
        });
        gsap.from(".box2", {
          scrollTrigger: {
              trigger: container.current,
              start: "top center",
              end: "top 20%",
              scrub: 3,
          },
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });
  })

  return (
    <div ref={container} className='flex flex-col items-center md:w-[1300px] w-[90vw] mx-auto my-2'>
        <div className='flex box'>
            <div className='w-7 h-36 bg-primary-green'/>
            <div className='flex flex-col items-center justify-center text-center md:w-[450px] shadow-2xl'>
                <h4 className='text-3xl font-jakarta'>Nuestros</h4>
                <h3>Proyectos</h3>
            </div>
        </div>
        <div className='box2 bg-black/15 md:w-[935px] w-[90vw] md:h-72 flex flex-col md:px-16 px-8 py-10 md:py-0 gap-12 justify-center'>
            <p className='font-semibold md:text-3xl md:-tracking-wide text-4xl leading-7'>Explorá nuestros Desarrollos Inmobiliarios</p>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-around gap-4'>
              {
                desarrollos.map((val, index) => (
                  <Link 
                    key={index} 
                    href={`/desarrollos/${val.slug}`}
                    className='relative h-36 w-36 hover:bg-primary-green/20 duration-300 rounded-lg'
                  >
                    <Image
                      src={val.logo}
                      alt={`Logo ${val.nombre}`}
                      fill
                      className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100 object-contain p-4'
                     />
                  </Link>
                )
              )
              }
            </div>
        </div>
    </div>
  )
}

export default Explora