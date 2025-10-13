'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GRID_DATA = [
    {
        image: '/assets/images/oportunidades/oportunidades-1.webp',
        alt: 'Familia caminando',
        title: 'Familia',
        texto: 'Acompañamos tu decisión más importante',
        description: 'Estamos comprometidos en que la experiencia de acceder a tu hogar sea simple, transparente y llena de confianza, para que disfrutes el proceso de crear el espacio donde crecerá tu familia.',
    },
    {
        image: '/assets/images/oportunidades/oportunidades-3.webp',
        alt: 'Reunion Ejecutiva',
        title: 'Inversores',
        texto: 'Invertí con tranquilidad',
        description: 'Cada desarrollo que ofrecemos está pensado para generar valor en el presente y confianza a futuro, combinando ubicación estratégica, diseño y seguridad en la inversión',
    },
    {
        image: '/assets/images/oportunidades/oportunidades-2.webp',
        alt: 'Pareja recibiendo departamento',
        title: 'Starters',
        texto: 'Te ayudamos a dar el primer paso',
        description: 'Invertir por primera vez no tiene que ser complicado: te ofrecemos el acompañamiento y la experiencia necesarios para transformar esa decisión en una oportunidad real de crecimiento',
    },
]

const OportunidadesGrid = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useGSAP(() => {
        if (currentIndex === 1) {
            gsap.to(".main__item", {
                xPercent: -100,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".description", {
                yPercent: -100,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__one", {
                yPercent: 0,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__two", {
                yPercent: -200,
                duration: 1,
                ease: "power2.inOut"
            });

        } else if (currentIndex === 2) {
            gsap.to(".main__item", {
                xPercent: -200,
                ease: "power2.inOut",
                duration: 1,
            });
            gsap.to(".description", {
                yPercent: -200,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__one", {
                yPercent: -100,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__two", {
                yPercent: 0,
                duration: 1,
                ease: "power2.inOut"
            });
        } else {
            gsap.to(".main__item", {
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".description", {
                yPercent: 0,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__one", {
                yPercent: -200,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".item__two", {
                yPercent: -100,
                duration: 1,
                ease: "power2.inOut"
            });
        }
    }, [currentIndex])

  return (
    <div>
        <div className='lg:grid hidden flex-col md:grid-cols-3 md:grid-rows-10 md:h-[615px] my-12'>
            <div className={`flex flex-col flex-wrap relative min-h-60 md:row-span-10 overflow-hidden`}>
                {
                    GRID_DATA.map((item, index) => {
                        return(
                            <div className='h-[615px] w-full relative main__item' key={index}>
                                <Image 
                                    className='object-cover object-top md:object-center' 
                                    src={item.image} 
                                    fill 
                                    alt={item.alt}
                                    sizes='430px'
                                 />
                                <div className='absolute h-full w-full left-0 top-0 bg-overlay-bg opacity-30 z-10' />
                                <h4 className='text-white text-2xl font-bold relative z-10 pt-16 pl-8'>{item.texto}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <div className='bg-[#F5F5F5] flex flex-wrap row-span-4 px-8 pt-8 md:pt-0 overflow-hidden'>
                {
                    GRID_DATA.map((item, index) => {   
                        return(
                            <div key={index} className='description w-full h-full flex justify-center items-center '>
                                <p  className='text-[#6E7488]'>{item.description}</p>
                            </div>
                        )
                     })
                }
            </div>
            <div className='bg-[#F5F5F5] row-span-4 flex justify-center items-center py-8 md:py-0 relative'>
                <Link 
                    href={'/#contacto'}
                    className=' group relative text-white bg-primary-green rounded-lg overflow-hidden
                    py-3 px-8 before:w-full before:h-full hover:before:translate-y-0 before:duration-300 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-lg before:translate-y-full'>
                    
                    <p className='relative z-10 font-jakarta'>Contactanos</p>
                </Link>
                <div className='absolute w-14 h-full -right-14'>
                    <Image src={'/assets/images/vectors/greenvg.svg'} alt='Green shape' fill className='object-cover' />
                </div>
            </div>
            <div className='flex flex-col min-h-48 row-span-6 overflow-hidden flex-nowrap'>
                {
                    GRID_DATA.map((item, index) => 
                        (
                            <div key={index} onClick={() => setCurrentIndex(index)} className='item__one cursor-pointer group min-h-[369px] h-full relative  flex justify-center items-center overflow-hidden'>
                                <div className='absolute top-0 left-0 h-full w-full bg-overlay-bg opacity-60 group-hover:opacity-20 duration-700 z-10' />
                                <h4 className='text-white text-2xl relative z-10 font-bold'>{item.title}</h4>
                                <Image 
                                    className='object-cover group-hover:scale-105 duration-500' 
                                    src={item.image} 
                                    fill 
                                    alt={item.alt}
                                    sizes='430px'
                                 />
                            </div>
                        ))
                }
            </div>
            <div className='flex flex-col min-h-48 row-span-6 overflow-hidden flex-nowrap'>
                {
                    GRID_DATA.map((item, index) => 
                        (
                            <div key={index} onClick={() => setCurrentIndex(index)} className='item__two cursor-pointer group min-h-[369px] h-full relative  flex justify-center items-center overflow-hidden'>
                                <div className='absolute top-0 left-0 h-full w-full bg-overlay-bg opacity-60 group-hover:opacity-20 duration-700 z-10' />
                                <h4 className='text-white text-2xl relative z-10 font-bold'>{item.title}</h4>
                                <Image 
                                    className='object-cover group-hover:scale-105 duration-500' 
                                    src={item.image} 
                                    fill 
                                    alt={item.alt}
                                    sizes='430px'
                                 />
                            </div>
                        ))
                }
            </div>
        </div>
    </div>

  )
}

export default OportunidadesGrid

/*     <div className='md:grid flex flex-col md:grid-cols-3 md:grid-rows-10 md:h-[615px] my-12'>
        <div className='flex relative min-h-60 md:row-span-10'>
            <Image className='object-cover object-top md:object-center' src={GRID_DATA[getIndex(0)].image} fill alt={GRID_DATA[getIndex(0)].alt} />
            <div className='absolute h-full w-full left-0 top-0 bg-overlay-bg opacity-30 z-10' />
            <h4 className='text-white text-2xl font-bold relative z-10 pt-16 pl-8'>{GRID_DATA[getIndex(0)].texto}</h4>
        </div>
        <div className='bg-grey-bg flex justify-center items-center row-span-4 px-8 pt-8 md:pt-0'>
            <p className='text-[#6E7488]'>{GRID_DATA[getIndex(0)].description}</p>
        </div>
        <div className='bg-grey-bg row-span-4 flex justify-center items-center py-8 md:py-0'>
            <Link 
                href={'/#contacto'}
                className='uppercase group relative tracking-[3px] text-xs text-white font-thin bg-primary-green rounded-4xl overflow-hidden
                py-5 px-10  before:w-full before:h-full hover:before:translate-y-0 before:duration-300 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                
                <p className='relative z-10 '>contactanos</p>
            </Link>
        </div>
        <div onClick={() => setCurrentIndex(getIndex(1))} className='group min-h-48 relative md:row-span-6 flex justify-center items-center overflow-hidden'>
            <div className='absolute top-0 left-0 h-full w-full bg-overlay-bg opacity-60 group-hover:opacity-40 duration-700 z-10'/>
            <h4 className='text-white text-2xl relative z-10 font-bold'>{GRID_DATA[getIndex(1)].title}</h4>
            <Image className='object-cover group-hover:scale-105 duration-500' src={GRID_DATA[getIndex(1)].image} fill alt={GRID_DATA[getIndex(1)].image} />
        </div>
        <div onClick={() => setCurrentIndex(getIndex(2))} className='group min-h-48 mt-8 md:mt-0 relative row-span-6 flex justify-center items-center overflow-hidden'>
            <div className='absolute top-0 left-0 h-full w-full bg-overlay-bg opacity-60 hover:opacity-40 duration-700 z-10 '/>
            <h4 className='text-white text-2xl relative z-10 font-bold'>{GRID_DATA[getIndex(2)].title}</h4>
            <Image className='object-cover group-hover:scale-105 duration-500' src={GRID_DATA[getIndex(2)].image} fill alt={GRID_DATA[getIndex(2)].image} />
        </div>
    </div> */