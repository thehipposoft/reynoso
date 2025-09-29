'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const openMenuFunc = () => setOpenMenu(!openMenu);
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<any>(null);

    useGSAP(() => {
        tl.current = gsap
        .timeline()
        .to('.menu', {
            opacity: 100,
            x: '-75%',
            ease: 'power3.inOut',
            duration: .5,
        })
        .from(".menu__items > *" , {
            y: 25,
            autoAlpha: 0,
            stagger: 0.08,
            delay: 0.2,
        })
        .from(".menu__image" , {
            opacity: 0,
            y: 10,
            duration: .3,
        })

/*         .from('.links-list > *', {
            y: '-120%',
            rotate: '-12deg',
            ease: 'back.out',
            duration: .6,
            opacity: 0,
            delay: 0.1,
            stagger: .1,
        }) */

    }, {scope: container});

    useEffect(() => {
        tl.current.reversed(!openMenu);
    }, [openMenu])

  return (
    <div ref={container} className='fixed w-20 h-20 md:top-7 md:right-8 top-0 right-0 z-50'>
        <button 
            className='fixed px-1 py-1 duration-500 cursor-pointer  top-7 right-8 hover:bg-black/30 rounded-xl'
            onClick={openMenuFunc}
        >
            <svg width="35" height="35" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={`duration-700  origin-left ${openMenu ? 'rotate-45 -translate-y-[6px]' : ''}`} width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
                <rect className={`duration-700  ${openMenu ? 'opacity-0' : ''}`} y="6.125" width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
                <rect className={`duration-700  origin-left ${openMenu ? '-rotate-45 translate-y-[6px]' : ''}`} y="12.25" width="30" height="2.75" rx="1.375" fill="#D9D9D9"/>
            </svg>
        </button>
        <div className={`menu translate-x-full opacity-0 rounded-xl md:w-80 w-[90vw] h-[90vh] md:h-auto absolute md:top-12 bg-primary-green flex flex-col justify-center gap-20 md:gap-0 md:justify-between px-12 py-6 duration-500 z-40`}>
            <ul className='menu__items flex flex-col gap-6 md:gap-3'>
                <li className='border-b border-white py-1 text-center'>
                    <Link className='text-white' href={'/'}>Desarrollos</Link>
                </li>
                <li className='border-b border-white py-1 text-center'>
                    <Link className='text-white' href={'/'}>Alquileres</Link>
                </li>
                <li className='border-b border-white py-1 text-center'>
                    <Link className='text-white' href={'/'}>Ventas</Link>
                </li>
                <li className='border-b border-white py-1 text-center'>
                    <Link className='text-white' href={'/'}>Nosotros</Link>
                </li>
                <li className=' py-1 text-center'>
                    <Link className='text-white' href={'/'}>Contacto</Link>
                </li>
            </ul>
            <Image src={'/assets/images/logo/logo-white.svg'} alt='logo' width={160} height={120} className='menu__image mx-auto mt-6'/>
        </div>
    </div>
  )
}

export default Menu