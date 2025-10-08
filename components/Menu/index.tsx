'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type MenuTypes = {
    hiddeOnDesktop?: boolean;
}

const Menu = ({hiddeOnDesktop}:MenuTypes) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openDesarrollos, setOpenDesarrollos] = useState<boolean>(false);

    const openMenuFunc = () => setOpenMenu(!openMenu);
    const openDesarrolloFunc = () => setOpenDesarrollos(!openDesarrollos);
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>(null);
    const { contextSafe } = useGSAP({ scope: container });


    useGSAP(() => {
        tl.current = gsap
        .timeline()
        .to('.menu', {
            opacity: 100,
            right: 0,
            ease: 'power2.inOut',
            duration: .7,
        })
 /*        .from(".menu__items > *" , {
            y: 25,
            autoAlpha: 0,
            stagger: 0.1,
            delay: -0.2,
        }) */
        .from(".menu__image" , {
            opacity: 0,
            y: 10,
            duration: .3,
        })
    }, {scope: container});

    useEffect(() => {
        if (tl.current) {
            tl.current.reversed(!openMenu);
        }
    }, [openMenu])

  return (
    <div ref={container} className={`${hiddeOnDesktop ? 'md:hidden block' : ''} fixed top-0 right-0 z-50`}>
        <button 
            className='fixed z-50 px-1 py-1 duration-500 cursor-pointer top-7 right-8 hover:bg-black/30 rounded-xl'
            onClick={openMenuFunc}
        >
            <svg width="35" height="35" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={`duration-700  origin-left ${openMenu ? 'rotate-45 -translate-y-[6px]' : ''}`} width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
                <rect className={`duration-700  ${openMenu ? 'opacity-0' : ''}`} y="6.125" width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
                <rect className={`duration-700  origin-left ${openMenu ? '-rotate-45 translate-y-[6px]' : ''}`} y="12.25" width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
            </svg>
        </button>
        <nav className={`menu top-0 opacity-0 md:rounded-xl md:w-lg w-screen h-screen absolute bg-primary-green flex flex-col justify-center gap-20 md:gap-0 md:justify-between px-12 py-6 z-40`}>
            <ul className='menu__items flex flex-col gap-6 md:gap-3'>
                <Link href={'/'} onClick={openMenuFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl text-white font-medium font-jakarta'>
                    Inicio
                </Link>
                <div className='relative overflow-hidden'>
                    <h4 onClick={openDesarrolloFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl text-white max-h-fit overflow-hidden cursor-pointer'>Desarrollos</h4>
                    <div className={`${openDesarrollos ? 'top-0 ' : '-top-full opacity-0'} relative overflow-hidden duration-500 flex flex-col `}>
                        <div className='bg-black flex justify-center'>
                            <Image src={'/assets/images/desarrollos/citadinop.png'} alt='' width={200} height={200} />
                        </div>
                        <div className='bg-black flex justify-center'>
                            <Image src={'/assets/images/desarrollos/citadinop.png'} alt='' width={200} height={200} />
                        </div>
                    </div>
                </div>
{/*                 <div className='hover:text-title-color hover:border-title-color duration-300 text-left menu_item border-b border-white py-2 uppercase text-2xl text-white max-h-fit overflow-hidden'>
                    <h4 className='cursor-pointer' onClick={openDesarrolloFunc}>Desarrollos</h4>
                    <div className={`${openDesarrollos ? '' : 'scale-50'} duration-300 flex flex-col`}>
                        <div className='bg-black flex justify-center'>
                            <Image src={'/assets/images/desarrollos/citadinop.png'} alt='' width={200} height={200} />
                        </div>
                        <div className='bg-black flex justify-center'>
                            <Image src={'/assets/images/desarrollos/citadinop.png'} alt='' width={200} height={200} />
                        </div>
                    </div>
                </div> */}
                <Link href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'} rel='noreferrer' target='_blank' onClick={openMenuFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl text-white font-medium font-jakarta'>
                    Alquileres
                </Link>
                <Link href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'} rel='noreferrer' target='_blank' onClick={openMenuFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl  text-white font-medium font-jakarta'>
                    Ventas
                </Link>
                <Link href={'/#nosotros'} onClick={openMenuFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl  text-white font-medium font-jakarta'>
                    Nosotros
                </Link> 
                <Link href={'/#contacto'} onClick={openMenuFunc} className='hover:text-title-color hover:border-title-color duration-500 text-left menu_item border-b border-white py-2 uppercase text-2xl  text-white font-medium font-jakarta'>
                    Contacto
                </Link> 
            </ul>
            <Image src={'/assets/images/logo/logo-white.svg'} alt='logo' width={160} height={120} className='menu__image mx-auto mt-6'/>
        </nav>
    </div>
  )
}

export default Menu