'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import LightboxModal from '../LightBox';

type ImageType = {
    url: string,
    alt: string
}

type GallerySliderProps = {
    images: ImageType[];
}

export default function SwiperGallery({images}:GallerySliderProps) {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1020: {
            slidesPerView: 3,
          },
        }}
        navigation={{
            prevEl: '.custom-prev-button', // Selector for the previous button
            nextEl: '.custom-next-button', // Selector for the next button
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper relative overflow-visible"
      >
        {
            images.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className='flex relative md:w-[400px] w-[95vw] h-[400px] overflow-hidden group cursor-pointer'
                        onClick={() => {
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                        }}
                    >
                        <div className='absolute left-0 top-0 w-full h-full bg-black/10 group-hover:opacity-0 duration-500 z-10' />
                        <Image 
                            src={slide.url} 
                            alt={slide.alt} 
                            fill
                            sizes='(max-width: 600) 90vw, 400px'
                            className='group-hover:scale-110 duration-500 object-cover'

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
