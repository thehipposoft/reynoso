'use client'
import React, {useState} from 'react'
import BannerCarrousel from './BannerCarrousel'
import Image from 'next/image'
import Link from 'next/link'
import { Proyecto } from '@/types'

type Props = {
  proyectos: Proyecto[];
}


const Banner = ({
  proyectos = []
}:Props) => {

  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);

  function handleFirstMouseEnter() {
    setIsFirstHovered(true);
    setIsSecondHovered(false);
  }
  function handleFirstMouseLeave() {
    setIsFirstHovered(false);
  }
  
  function handleSecondMouseEnter() {
    setIsSecondHovered(true);
    setIsFirstHovered(false);
  }
  function handleSecondMouseLeave() {
    setIsSecondHovered(false);
  }

  return (
    <div className='flex md:flex-row flex-col h-screen bg-black/60'>
        <Image src={'/assets/images/banner/banner.jpg'} alt='Descubri oportunidades inmobiliarias imagen' fill className={`${isSecondHovered ? 'opacity-100 z-10' : '-z-10'} duration-700 object-cover z-10 opacity-0`} />
        <div onMouseEnter={handleFirstMouseEnter} onMouseLeave={handleFirstMouseLeave} className={`${isSecondHovered ? 'opacity-0 z-10' : 'opacity-100 -z-10'} h-[50vh] md:h-auto md:w-1/2 flex justify-center items-center relative z-10 duration-700`}>
          <BannerCarrousel proyectos={proyectos} />
        </div>
        <div onMouseEnter={handleSecondMouseEnter} onMouseLeave={handleSecondMouseLeave} className={`${isFirstHovered ? '-z-10 opacity-0' : 'z-10 '} ${isSecondHovered ? 'bg-[#33847d80] ' : 'bg-title-color/70'} h-[50vh] md:h-auto hover:backdrop-blur-none duration-700 md:w-1/2 flex flex-col justify-center items-center backdrop-blur-xs relative z-10`}>
            <div className='w-full h-full flex flex-col gap-8 justify-center items-center  duration-500'>
                <Image src={'/assets/images/logo/logo-white.svg'} alt='logo' width={260} height={160} />
                <Link href={'https://propiedades.reynosobienesraices.com.ar/'} rel='noreferrer' target='_blank' className='group flex justify-center hover:animate-pulse items-center mt-6 md:gap-8 gap-2'>
                    <div className='border relative border-white rounded-full md:h-13 md:w-13 p-1 md:p-0 overflow-hidden flex justify-center items-center group-hover:scale-125 duration-700'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m21.1058 12.1776-17.99984.0678M15.1284 18.2002l5.9774-6.0226-6.0226-5.97732" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className='group-hover:scale-105 duration-700 group-hover:underline  uppercase tracking-[3px] text-center text-white text-xs font-extralight'>descubrí nuestras oportunidades <br/> inmobiliarias</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner