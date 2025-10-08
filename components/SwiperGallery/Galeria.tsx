'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import LightboxModal from '../LightBox';
import Image from 'next/image';

type ImageType = {
    url: string,
    alt: string
}

type GaleriaTypes = {
    images: ImageType[];
}

export default function Galeria({images}:GaleriaTypes) {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={30}
        speed={500}
        loop={true}
        navigation={{
            prevEl: '.custom-prev-button', // Selector for the previous button
            nextEl: '.custom-next-button', // Selector for the next button
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="SwiperBanner"
      >
        {
            images.map((item, index) => (
                <SwiperSlide>
                    <div 
                        className='relative md:w-[1200px] md:h-[600px] overflow-hidden group cursor-pointer'
                        onClick={() => {
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                        }}
                    >
                        <div className='absolute left-0 top-0 w-full h-full bg-black/10 z-10 group-hover:bg-black/5 duration-300' />
                        <Image 
                            key={index} 
                            src={item.url} 
                            alt={item.alt} 
                            fill
                            className='object-cover object-center group-hover:scale-105 duration-500'
                        />
                    </div>
                </SwiperSlide>
            ))
        }
        <div className='flex justify-between mt-4'>
            <button
            className="custom-prev-button z-60 text-white text-2xl flex justify-center items-center hover:bg-black/30 duration-300 pb-1 bg-black/50 w-10 h-10 rounded-full cursor-pointer"
            aria-label="Anterior"
            >
            ‹
            </button>
            <button
            className="custom-next-button z-60 text-white text-2xl flex justify-center items-center hover:bg-black/30 duration-300 pb-1 bg-black/50 w-10 h-10 rounded-full cursor-pointer"
            aria-label="Siguiente"
            >
            ›
            </button>
        </div>
      </Swiper>
        {lightboxOpen && (
            <LightboxModal
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            setIndex={(i) => setLightboxIndex(i)}
            />
        )}
    </>
  );
}
