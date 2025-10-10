'use client'
import React, {useRef, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import VideoModal from './VideoModal'

const Desarrollo = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 3,
            },
        });
        tl.from(".title__one", {
            opacity: 0,
            y: 70,
            x: 20,
            rotate: 5,
            duration: 1,
            ease: "power4.out",
        })
        .from(".title__two", {
            opacity: 0,
            y: 5,
        })
    }, {scope: container});

    const [openModal, setOpenModal] = useState<boolean>(false)

    const toggleModal = () => setOpenModal(!openModal)

  return (
    <div className='relative' id='explora'>
        <div ref={container} className='flex pt-12 flex-col w-[90vw] md:w-[1300px] mx-auto '>
            <div className='flex flex-col md:px-12 px-6'>
                <h2 className='title__one font-inter text-4xl'>Una nueva forma<br /> de vivir cada</h2>
                <h3 className='title__two text-4xl'>Desarrollo</h3>
            </div>
            <div className='relative z-10 mt-8 md:mt-0 w-full md:h-[95vh] h-[60vh] overflow-hidden flex flex-col gap-16 justify-center items-center md:translate-y-16'>
                <h5 className='text-white hidden'>explore me</h5>
                <h4 className='text-white text-center font-jakarta font-semibold text-3xl'>Conocé nuestros desarrollos como si estuvieras ahí.</h4>
                <button 
                    onClick={toggleModal}
                    className='cursor-pointer uppercase group relative tracking-[3px] text-xs text-white font-thin rounded-4xl overflow-hidden border
                    py-5 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#f5f5f53a] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                    
                    <p className='relative z-10 '>ver video</p>
                </button>
                <div className='absolute left-0 top-0 w-full h-full bg-black/30 -z-10' />
                <video 
                    src="https://res.cloudinary.com/hipposoft/video/upload/v1759981849/Reynoso/HD_ELCAUCE_pmlcnj.mp4"
                    className='absolute -z-20 object-cover md:h-auto h-[60vh]'
                    autoPlay={true}
                    muted
                    loop
                />
            </div>
            <div className='bg-[#F3F6FC] w-11/12 hidden md:grid grid-cols-3 h-32 mx-auto relative z-10'>
                <div className='flex justify-center items-center'>
                    <h6 className='text-center tracking-[4px]  uppercase'>disposición<br/> de lótes</h6>
                </div>
                <div className='flex justify-center items-center'>
                    <h6 className='text-center tracking-[4px] uppercase'>estados<br/> actualizados</h6>
                </div>
                <div className='flex justify-center items-center'>
                    <h6 className='text-center tracking-[4px] uppercase'>detalles de<br/> cada unidad</h6>
                </div>
            </div>
        </div>
        <VideoModal openModal={openModal} toggleModal={toggleModal} />
  </div>
  )
}

export default Desarrollo