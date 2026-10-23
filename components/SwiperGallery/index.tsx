'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import LightboxModal from '../LightBox';
import { useRevealedSwiperSlides } from './useRevealedSwiperSlides';

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
    const { revealed, swiperHandlers } = useRevealedSwiperSlides(images.length);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {
        images.length >= 3 ? (
          <Swiper
            {...swiperHandlers}
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
                            className='flex relative lg:w-[400px] md:w-[45vw] w-[95vw] h-[400px] overflow-hidden group cursor-pointer'
                            onClick={() => openLightbox(index)}
                        >
                            <div className='absolute left-0 top-0 w-full h-full bg-black/10 group-hover:opacity-0 duration-500 z-10' />
                            {revealed.has(index) && (
                                <Image
                                    src={slide.url}
                                    alt={slide.alt}
                                    fill
                                    sizes='(min-width: 1024px) 400px, (min-width: 768px) 45vw, 95vw'
                                    className='group-hover:scale-110 duration-500 object-cover'
                                />
                            )}
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
        ) : (
          // Menos de 3 imágenes: no alcanza para armar el carrusel de 3 columnas,
          // así que ocupan todo el ancho disponible entre ellas en vez de dejar huecos.
          <div className={`grid grid-cols-1 gap-5 w-[95vw] md:w-full md:max-w-[1200px] mx-auto ${images.length === 2 ? 'md:grid-cols-2' : ''}`}>
            {
                images.map((slide, index) => (
                    <div
                        key={index}
                        className='relative w-full h-[400px] overflow-hidden group cursor-pointer'
                        onClick={() => openLightbox(index)}
                    >
                        <div className='absolute left-0 top-0 w-full h-full bg-black/10 group-hover:opacity-0 duration-500 z-10' />
                        <Image
                            src={slide.url}
                            alt={slide.alt}
                            fill
                            sizes={images.length === 2 ? '(min-width: 768px) 50vw, 95vw' : '95vw'}
                            className='group-hover:scale-110 duration-500 object-cover'
                        />
                    </div>
                ))
            }
          </div>
        )
      }
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
