'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BannerCarrousel = ({proyectos}:any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleSlug = (nombre:string) => {
    return nombre.toLowerCase().replace(/\s+/g, '-');
  }

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      {proyectos.map((val:any, index:any) => (
        <div
          key={index}
          className={`absolute inset-0 h-screen w-screen transition-opacity duration-[1500ms] ease-in-out`}
          style={{
            zIndex: index === currentSlideIndex ? 30 : 10,
            opacity: index === currentSlideIndex ? 1 : 0,
          }}
        >
          <Image
            src={val.imagen_banner}
            alt={`Imagen de fondo ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}

      <div className="relative z-40 w-full h-full flex flex-col gap-8 justify-center items-center bg-[#33847d80]  hover:backdrop-blur-none backdrop-blur-xs  duration-500">
        {proyectos.map((val:any, index:any) => (
          <div
            key={index}
            className={`absolute flex flex-col justify-center items-center gap-6 transition-opacity duration-500`}
            style={{
              opacity: currentSlideIndex === index ? 1 : 0,
              zIndex: currentSlideIndex === index ? 50 : 20,
            }}
          >
            <Image src={val.logo} alt="logo" width={260} height={160} />
            <p className="uppercase tracking-[3px] text-center text-white text-xs font-extralight">
              {val.texto}
            </p>
                <Link href={`desarrollos/${handleSlug(val.nombre)}`} className='group flex justify-center items-center mt-6 gap-8 '>
                    <div className='border relative border-white rounded-full h-13 w-13 overflow-hidden flex justify-center items-center group-hover:scale-125 duration-700'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m21.1058 12.1776-17.99984.0678M15.1284 18.2002l5.9774-6.0226-6.0226-5.97732" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className='group-hover:scale-105 duration-500 group-hover:underline  uppercase tracking-[3px] text-center text-white text-xs font-extralight'>descubrí nuestras desarrollos</p>
                </Link>
          </div>
        ))}

        <div className="flex absolute bottom-20 space-x-3 z-50">
          {proyectos.map((_:any, index:any) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentSlideIndex
                  ? 'bg-white'
                  : 'bg-gray-400 opacity-60'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarrousel;
