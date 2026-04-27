'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import AnimatedLink from '../commons/AnimatedLink'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Proyecto } from '@/types'

type ExploraTypes = {
    desarrollos: Proyecto[];
    agotado?: boolean;
}

const Explora = ({desarrollos, agotado}:ExploraTypes) => {

  const container = useRef(null)

  const AGOTADO = "Unidades Agotadas";

  const cleanDesarrollos = desarrollos
    .filter((item) => item.imagen_banner)
    .sort((a, b) => {
      if (a.estado === AGOTADO && b.estado !== AGOTADO) return 1;
      if (a.estado !== AGOTADO && b.estado === AGOTADO) return -1;
      return 0;
    });

  console.log(cleanDesarrollos)

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
    <div ref={container} className={`${agotado ? 'md:items-start' : ''} flex flex-col items-center lg:w-[1300px] w-[90vw] mx-auto my-2`}>
        <div className='flex box'>
            <div className='w-7 h-36 bg-primary-green'/>
            <div className='flex flex-col items-center justify-center text-center md:w-[450px] md:shadow-2xl shadow-lg md:px-0 px-5'>
                <h2 className='text-3xl font-jakarta tracking-normal'>Nuestros</h2>
                <h3>Proyectos</h3>
            </div>
        </div>
        <div className='box2 bg-[#f7f7f7] lg:w-auto w-[90vw] lg:h-72 flex flex-col md:px-16 px-8 py-10 gap-6 justify-center'>
            <p className='font-semibold lg:text-2xl md:-tracking-wide text-3xl leading-7'>Explorá nuestros Desarrollos Inmobiliarios</p>
            <div className='flex flex-wrap lg:flex-nowrap items-center justify-around gap-4'>
              {
                cleanDesarrollos.map((val, index) => (
                  <AnimatedLink
                    key={index}
                    href={`/desarrollos/${val.slug}`}
                    className='relative h-36 md:w-28 w-36 group hover:bg-black/10 duration-300 rounded-lg'
                  >
                    <Image
                      src={val.logo}
                      alt={`Logo ${val.nombre}`}
                      fill
                      className='group-hover:brightness-100 duration-500 group-hover:scale-110 brightness-0 object-contain lg:p-4 p-1'
                      sizes='120px'
                     />
                    {val.estado === AGOTADO && (
                      <span className='absolute bottom-2 right-2 bg-primary-gray/30 group-hover:bg-primary-gray/70 duration-300 text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full whitespace-nowrap'>
                        Agotado
                      </span>
                    )}
                  </AnimatedLink>
                )
              )
              }
            </div>
        </div>
    </div>
  )
}

export default Explora