'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES_DATA = [
    {
        title: 'Alquileres',
        image: '/assets/images/banner/banner-1.png',
        logo: '/assets/images/banner/logo-1.png',
        href: "",
    },
    {
        title: 'Ventas',
        image: '/assets/images/banner/banner-2.webp',
        logo: '/assets/images/banner/logo-2.png',
        href: "",
    },
    {
        title: 'Proyectos',
        image: '/assets/images/banner/banner-3.webp',
        logo: '/assets/images/banner/logo-3.png',
        href: "",
    },
    {
        title: 'Servicios',
        image: '/assets/images/banner/banner-4.webp',
        logo:  '/assets/images/banner/logo-4.png',
        href: "",
    },
];

const Banner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect para el cambio automático de imágenes
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
    }, 7000); // Cambia cada 5 segundos

    // Limpia el temporizador al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  // Función para manejar la navegación manual
  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Carrusel de imágenes */}
      {SLIDES_DATA.map((val, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={val.image}
            alt={`Imagen de fondo ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0} // Carga prioritaria para la primera imagen
          />
        </div>
      ))}
      {
        SLIDES_DATA.map((val, index) => {
            return(
                <div className={`relative h-screen w-screen grid grid-cols-3 ${currentSlideIndex === index ? "" : "hidden"}`} key={index}>
                    <div className='h-screen group relative flex flex-col justify-end items-center'>
                        <h2 className='uppercase p-4'>alquileres</h2>
                        <div className='absolute w-full h-full flex justify-center items-center border border-[#EDEDED] bg-[#373737b4] opacity-0 duration-500 group-hover:opacity-100 shadow-lg shadow-white'>
                            <h2 className='text-white text-4xl uppercase tracking-widest'>alquileres</h2>
                        </div>
                    </div>
                    <div className='h-screen group relative flex flex-col justify-end items-center'>
                        <h2 className='uppercase p-4'>alquileres</h2>
                        <div className='absolute w-full h-full flex flex-col justify-center items-center bg-[#373737b4] duration-500'>
                            <Image src={val.logo} alt='logo' width={220} height={160} />
                            <h2 className='text-white text-4xl uppercase tracking-widest'>alquileres</h2>
                            <Link href={val.href} className='group flex justify-center gap-2 items-center mt-6'>
                                <div className='border relative border-white rounded-full  h-13 w-13 overflow-hidden flex justify-center items-center'>
                                    <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m21.1058 12.1776-17.99984.0678M15.1284 18.2002l5.9774-6.0226-6.0226-5.97732" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <svg className='absolute left-12 group-hover:left-0 duration-300' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m21.1058 12.1776-17.99984.0678M15.1284 18.2002l5.9774-6.0226-6.0226-5.97732" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <p className='uppercase tracking-widest text-white'>descubrir</p>
                            </Link>
                        </div>
                    </div>
                    <div className='h-screen group relative flex flex-col justify-end items-center'>
                        <h2 className='uppercase p-4'>alquileres</h2>
                        <div className='absolute w-full h-full flex justify-center items-center bg-[#373737b4] opacity-0 duration-500 group-hover:opacity-100'>
                            <h2 className='text-white text-4xl uppercase tracking-widest'>ventas</h2>
                        </div>
                    </div>
                </div>
            )
        })
      }

      {/* Controles de navegación */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {SLIDES_DATA.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlideIndex ? 'bg-white' : 'bg-gray-400 opacity-60'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;



/* 'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const Banner = () => {
  return (
    <div className='relative h-screen w-screen grid grid-cols-3 bg-white' >
        <Image src="/assets/images/banner1.png" alt='' fill className='object-cover' />
        <div className='h-screen group relative flex flex-col justify-end items-center'>
            <h2 className='uppercase p-4'>alquileres</h2>
            <div className='absolute w-full h-full flex justify-center items-center border border-[#EDEDED] bg-[#373737b4] opacity-0 duration-500 group-hover:opacity-100 shadow-lg shadow-white'>
                <h2 className='text-white text-4xl uppercase tracking-widest'>alquileres</h2>
            </div>
        </div>
        <div className='h-screen group relative flex flex-col justify-end items-center'>
            <h2 className='uppercase p-4'>alquileres</h2>
            <div className='absolute w-full h-full flex flex-col justify-center items-center bg-[#373737b4] duration-500'>
                <Image src={"/assets/images/logo-1.png"} alt='logo' width={220} height={160} />
                <h2 className='text-white text-4xl uppercase tracking-widest'>alquileres</h2>
            </div>
        </div>
        <div className='h-screen group relative flex flex-col justify-end items-center'>
            <h2 className='uppercase p-4'>alquileres</h2>
            <div className='absolute w-full h-full flex justify-center items-center bg-[#373737b4] opacity-0 duration-500 group-hover:opacity-100'>
                <h2 className='text-white text-4xl uppercase tracking-widest'>ventas</h2>
            </div>
        </div>
    </div>
  )
}

export default Banner */