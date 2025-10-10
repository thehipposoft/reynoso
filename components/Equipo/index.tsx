'use client'
import React, {useRef} from 'react'
import EquipoGrid from './EquipoGrid'
import Image from 'next/image'
import EquipoCarrousel from './EquipoCarrousel'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Equipo = () => {

  const container = useRef(null);

  useGSAP(() => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "top 15%",
              scrub: 4,
          },
      });
      tl.from(".shape", {
        yPercent: -100,
        transformOrigin: "top",
      })

      gsap.from(".title__two" ,{
          scrollTrigger: {
              trigger: container.current,
              start: "17% 60%",
          },
          opacity: 0,
          y: 70,
          x: 20,
          rotate: 5,
          duration: 1,
          ease: "sine.inOut",
      })

      gsap.from(".equipo", {
            scrollTrigger: {
              trigger: container.current,
              start: "top 15%",
          },
        opacity: 0,
        y: 10,
        duration: 1,
        delay: 0.5,
      })
  }, {scope: container})

  return (
    <div ref={container} className='relative' id='nosotros'>
      <Image 
        className='absolute hidden md:block right-0 -top-[10%] -z-10 w-auto min-w-[300px]' 
        src={"/assets/images/dots.png"} 
        alt='Nuestro Equipo imagen decorativa' 
        width={300} 
        height={400}
       />
      <div className='flex relative flex-col md:max-w-[1300px] w-[90vw] md:w-auto mx-auto mb-16'>
        <div className='flex md:flex-row flex-col-reverse items-start md:items-end justify-between'>
          <div className='flex flex-col mt-12 md:mt-0'>
            <h4 className='equipo font-poppins leading-9 -tracking-wider font-bold text-title-color text-[38px] md:pb-14'>Nuestro Equipo de Profesionales</h4>
          </div>
          <div className='md:w-[700px] w-[90vw] mx-auto md:mx-0 flex gap-2 items-end overflow-hidden'>
            <div className='shape bg-primary-green w-40 pb-4 h-[320px] rounded-b-full flex items-end justify-center'>
              <div className='h-[115px] relative flex justify-center items-center mb-4'>
                <div className='flex relative z-20'>
                  <h4 className='text-white text-6xl font-bold translate-x-1'>2</h4>
                  <h4 className='text-white text-6xl pt-2 font-bold -translate-x-0.5'>4</h4>
                  <span className='bg-white w-20 h-[7px] absolute top-[67.2%] left-1/2' />
                </div>
                <svg className='scale-90 absolute top-0' width="124" height="122" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.609 3.868c3.847-4.615 10.935-4.615 14.782 0a9.622 9.622 0 0 0 11.406 2.584l.36-.166c5.363-2.462 11.64.58 13.033 6.314a9.382 9.382 0 0 0 9.054 7.169l.538.004c5.845.04 10.154 5.476 8.856 11.176a9.147 9.147 0 0 0 4.989 10.289l.248.118c5.31 2.526 6.859 9.355 3.157 13.925a9.087 9.087 0 0 0 0 11.438c3.702 4.57 2.153 11.399-3.157 13.925l-.248.118a9.147 9.147 0 0 0-4.989 10.29c1.298 5.699-3.011 11.136-8.856 11.175l-.538.004a9.382 9.382 0 0 0-9.054 7.169c-1.392 5.735-7.67 8.776-13.033 6.314l-.36-.166a9.622 9.622 0 0 0-11.406 2.584c-3.847 4.615-10.935 4.615-14.782 0a9.622 9.622 0 0 0-11.406-2.584l-.36.166c-5.363 2.462-11.64-.579-13.033-6.314a9.382 9.382 0 0 0-9.054-7.169l-.538-.004c-5.845-.039-10.154-5.476-8.856-11.176a9.147 9.147 0 0 0-4.99-10.289l-.247-.118C.815 78.118-.734 71.29 2.968 66.72a9.087 9.087 0 0 0 0-11.438C-.734 50.71.815 43.882 6.125 41.356l.248-.118a9.147 9.147 0 0 0 4.989-10.29c-1.298-5.699 3.011-11.136 8.856-11.175l.538-.004a9.382 9.382 0 0 0 9.054-7.17c1.392-5.734 7.67-8.775 13.033-6.313l.36.166A9.622 9.622 0 0 0 54.61 3.868Z" fill="#383838"/></svg>
              </div>
            </div>
            <div className='overflow-hidden w-fit py-1'>
              <h4 className='title__two md:text-5xl text-3xl w-3/4 md:w-auto md:leading-10 leading-7 -tracking-wide font-bold font-kadwa text-title-color pb-4'>Años <br className='hidden md:block'/> transformando el <br className='hidden md:block'/> Mercado Inmobiliario</h4>
            </div>
          </div>
        </div>
        <div className='equipo'>
          <EquipoGrid />
          <EquipoCarrousel />
        </div>
        <Image 
          className='absolute hidden md:block left-0 -bottom-12 -z-10 w-auto' 
          src={"/assets/images/dots.png"}
          alt='Nuestro Equipo imagen decorativa' 
          width={140} 
          height={140}
        />
      </div>
    </div>
  )
}

export default Equipo