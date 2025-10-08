'use client'
import Image from 'next/image'
import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type ImageType = {
    url: string,
    alt: string
}

type GallerySliderProps = {
    images: ImageType[];
}

const GallerySlider = ({images}:GallerySliderProps) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const slideRefs = useRef<any>([])

 /*    useGSAP(() => {
        gsap.set('.image-1', {left: 75})
        gsap.set('.image-2', {right: 75})

        gsap.to('.selected', {
            scale: 1.2,
            ease: 'power2.inOut',
        })
    }, [currentIndex]) */

    console.log('current index',currentIndex)

  return (
    <div className='flex justify-center items-center gap-2 relative min-h-[500px] max-w-[1300px] mx-auto'>
        {
            images.map((val, index) => (
                    <Image
                        onClick={() => setCurrentIndex(index)}
                        ref={(el) => { slideRefs.current[index] = el; }}
                        key={index}
                        src={val.url} 
                        alt={val.alt} 
                        width={1200}
                        height={800} 
                        className={`${currentIndex === index ? 'selected z-10' : 'scale-90'}
                         image-${index} object-cover rounded-md h-[375px] w-[375px] cursor-pointer absolute`}
                     />
            ))
        }
    </div>
  )
}

export default GallerySlider