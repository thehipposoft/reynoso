'use client';
import Image from 'next/image';
import React, {useState, useEffect, useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Proyecto } from '@/types';
import AnimatedLink from '../commons/AnimatedLink';
import Link from 'next/link';

type MenuTypes = {
    hiddeOnDesktop?: boolean;
    desarrollos: Proyecto[];
}

const Menu = ({hiddeOnDesktop, desarrollos}:MenuTypes) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openDesarrollos, setOpenDesarrollos] = useState<boolean>(false);

    const openMenuFunc = () => setOpenMenu(!openMenu);
    const openDesarrolloFunc = () => setOpenDesarrollos(!openDesarrollos);
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(() => {
        tl.current = gsap
        .timeline()
        .to('.menu', {
            opacity: 100,
            right: 0,
            ease: 'power2.inOut',
            duration: .6,
        })
        .from(".menu__items > *" , {
            y: 35,
            autoAlpha: 0,
            stagger: 0.07,
            delay: -0.2,
        })
        .from(".menu__image" , {
            opacity: 0,
            y: 10,
            duration: .3,
            delay: -0.2,
        })
    }, {scope: container});

    useEffect(() => {
        if (tl.current) {
            tl.current.reversed(!openMenu);
        }
    }, [openMenu])

  return (
    <div ref={container} className={`${hiddeOnDesktop ? 'lg:hidden block' : ''} fixed top-0 right-0 z-40`}>
        <button 
            className='fixed z-50 px-1 py-1 duration-500 cursor-pointer top-7 right-8 hover:bg-black/30 bg-green-blur backdrop-blur-md rounded-xl'
            onClick={openMenuFunc}
        >
            <svg width="35" height="35" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={`duration-700 origin-left ${openMenu ? 'rotate-45 -translate-y-[6px]' : ''}`} width="30" height="2.75" rx="1.375" fill="#FFFFFF"/>
                <rect className={`duration-700 ${openMenu ? 'opacity-0' : ''}`} y="6.125" width="30" height="2.75" rx="1.375" fill="#FFFFFF"/>
                <rect className={`duration-700 origin-left ${openMenu ? '-rotate-45 translate-y-[6px]' : ''}`} y="12.25" width="30" height="2.75" rx="1.375" fill="#FFFFFF"/>
            </svg>
        </button>
        <nav className={`menu top-0 opacity-0 md:rounded-l-xl md:w-lg w-screen min-h-screen absolute bg-primary-green flex flex-col justify-center md:justify-between px-12 py-16 z-40`}>
            <ul className='menu__items flex flex-col gap-6 md:gap-4'>
                <div onClick={openMenuFunc} className='group relative overflow-hidden border-b border-white hover:border-title-color pb-2 w-full cursor-pointer '>
                    <AnimatedLink href={'/'} className='group-hover:text-title-color hover:border-title-color duration-500 w-full flex text-left menu_item uppercase text-[26px] text-white font-medium font-jakarta'>
                        Inicio
                    </AnimatedLink> 
                </div>
                <div className={'relative overflow-hidden '}>
                    <h4 onClick={openDesarrolloFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white pb-2 uppercase text-[26px] text-white max-h-fit overflow-hidden cursor-pointer'>Desarrollos</h4>
                    <div className={`${openDesarrollos ? 'top-0 max-h-72' : '-top-full  max-h-0'} relative overflow-hidden duration-700 flex flex-col `}>
                        <AnimatedLink href={'/desarrollos'} className='uppercase tracking-wider text-white text-center
                         bg-verde-oscuro py-1 hover:underline font-semibold'>
                            ver todos
                        </AnimatedLink>
                        {
                            desarrollos.map((desarrollo, index) => (
                                <AnimatedLink 
                                    href={`/desarrollos/${desarrollo.slug}`}
                                    key={index} 
                                    style={{backgroundColor: `${desarrollo.color_primario}`}} 
                                    className='flex justify-center overflow-hidden group'
                                >
                                    <Image 
                                    src={desarrollo.logo} 
                                    alt={`Logo ${desarrollo.nombre}`} 
                                    width={200} 
                                    height={200} 
                                    className='w-24 min-h-9 max-h-10 object-contain group-hover:scale-125 duration-500 brightness-0 invert-100' />
                                </AnimatedLink>
                            ))
                        }
                    </div>
                </div>
                <div className='group relative overflow-hidden border-b border-white hover:border-title-color pb-2 w-full cursor-pointer '>
                    <Link href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'} rel='noreferrer' target='_blank'  className='group-hover:text-title-color hover:border-title-color duration-500 w-full flex text-left menu_item uppercase text-[26px] text-white font-medium font-jakarta'>
                        Alquileres
                    </Link> 
                </div>
                <div className='group relative overflow-hidden border-b border-white hover:border-title-color pb-2 w-full cursor-pointer '>
                    <Link href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'} rel='noreferrer' target='_blank' className='group-hover:text-title-color hover:border-title-color duration-500 w-full flex text-left menu_item uppercase text-[26px] text-white font-medium font-jakarta'>
                        Ventas
                    </Link> 
                </div>
                <div onClick={openMenuFunc} className='group relative overflow-hidden border-b border-white hover:border-title-color pb-2 w-full cursor-pointer '>
                    <AnimatedLink href={'/#nosotros'} className='group-hover:text-title-color hover:border-title-color duration-500 w-full flex text-left menu_item uppercase text-[26px] text-white font-medium font-jakarta'>
                        Nosotros
                    </AnimatedLink> 
                </div>
                <div onClick={openMenuFunc} className='group relative overflow-hidden border-b border-white hover:border-title-color pb-2 w-full cursor-pointer '>
                    <AnimatedLink href={'/#contacto'} className='group-hover:text-title-color hover:border-title-color duration-500 w-full flex text-left menu_item uppercase text-[26px] text-white font-medium font-jakarta'>
                        Contacto
                    </AnimatedLink> 
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Menu