'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const VentaAlquilerComp = () => {

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
            y: 50,
            x: 20,
            rotate: 5,
            duration: 1,
            ease: "power4.out",
        })
        .from(".title__two", {
            opacity: 0,
            y: 5,
        })
        gsap.from(".content", {
            scrollTrigger: {
                trigger: container.current,
                start: "15% 40%",
                end: "top 10%",
                scrub: 3,
            },
            opacity: 0,
            y: 5,
            ease: "power4.out",
            duration: 1,
        })
        gsap.to(".logo__", {
            y: 5,
            scale: 0.98,
            duration: 1.5, 
            ease: "sine.inOut", 
            repeat: -1, 
            yoyo: true 
        });
    }, {scope: container})

  return (
    <div className='bg-[#E6E6E6] relative' ref={container}>
        <Image src={'/assets/images/vectors/lines.png'} alt='' width={197} height={240} className='absolute -left-28' />
          <div className='flex py-20 flex-col lg:w-[1300px] w-[90vw] mx-auto'>
              <div className='flex lg:flex-row flex-col justify-between lg:px-12 px-6'>
                <div className='flex flex-col gap-8 pt-8'>
                    <div className='flex flex-col'>
                        <h2 className='title__one font-inter text-4xl font-inter'>Oportunidades<br /> Inmobiliarias</h2>
                        <h3 className='title__two text-4xl font-baileys'>A Medida</h3>
                    </div>
                    <p className='content lg:w-[410px] text-[17px]'>Ya sea que busques alquilar, comprar o vender, te ofrecemos oportunidades inmobiliarias pensadas para vos.</p>
                    <div className='content flex lg:flex-row flex-col lg:gap-16 gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-bold text-xl'>¿Buscás alquilar?</h4>
                            <p className='lg:w-52 font-light text-justify'>Te ayudamos a encontrar la propiedad que se ajuste a tus necesidades, con el respaldo y la claridad que nos caracteriza</p>
                            <Link 
                                href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'}
                                rel='noreferrer' target='_blank'
                                className='group cursor-pointer relative z-40 text-white w-fit bg-primary-green rounded-xl overflow-hidden
                                py-2 px-7 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-xl before:translate-y-full'>
                                
                                <p className='relative z-10 font-light'>Alquileres</p>
                            </Link>
                        </div>
                        <div className='h-full w-[1px] bg-[#333333]' />
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-bold text-xl'>Venta de propiedades</h4>
                            <p className='lg:w-52 font-light'>Sabemos que la venta de propiedades no es tarea sencilla.<br />Tasamos tu propiedad y la vendemos al mejor precio del mercado.</p>
                            <Link 
                                href={'https://propiedades.reynosobienesraices.com.ar/listado-de-propiedades/'}
                                rel='noreferrer' target='_blank'
                                className='group cursor-pointer relative z-40 text-white w-fit bg-primary-green rounded-xl overflow-hidden
                                py-2 px-7 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-xl before:translate-y-full'>
                                
                                <p className='relative z-10 font-light'>Venta</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='content bg-slate-50 md:w-[496px] md:h-[600px] relative hidden lg:block'>
                    <Image 
                        src={'/assets/images/banner/banner.jpg'} 
                        alt='Oportunidades alquileres fondo de familia' 
                        sizes='500px'
                        fill 
                        className='object-cover object-left'
                     />
                    <div className='logo__ md:w-[165px] md:h-[130px] flex justify-center items-center bg-primary-gray absolute z-10 -bottom-10 -left-24 rounded-xl'>
                        <Image src={'/assets/images/logo/logo-notext.svg'} alt='Reynoso Logo' width={110} height={80} className='w-auto max-w-[120px]'  />
                    </div>
                    <div className='md:w-[105px] md:h-[115px] flex overflow-hidden flex-col justify-around items-center bg-[#046658] absolute z-10 top-0 right-0 rounded-b-xl'>
                        <div className='h-[60px] relative flex justify-center items-center'>
                            <div className='flex relative z-20'>
                            <h4 className='text-[#046658] text-4xl font-bold translate-x-1'>2</h4>
                            <h4 className='text-[#046658] text-4xl pt-2 font-bold -translate-x-0.5'>4</h4>
                            <span className='bg-white w-12 h-[5px] absolute top-[67.2%] -right-[50px]' />
                            </div>
                            <svg className='scale-50 absolute ' width="124" height="122" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.609 3.868c3.847-4.615 10.935-4.615 14.782 0a9.622 9.622 0 0 0 11.406 2.584l.36-.166c5.363-2.462 11.64.58 13.033 6.314a9.382 9.382 0 0 0 9.054 7.169l.538.004c5.845.04 10.154 5.476 8.856 11.176a9.147 9.147 0 0 0 4.989 10.289l.248.118c5.31 2.526 6.859 9.355 3.157 13.925a9.087 9.087 0 0 0 0 11.438c3.702 4.57 2.153 11.399-3.157 13.925l-.248.118a9.147 9.147 0 0 0-4.989 10.29c1.298 5.699-3.011 11.136-8.856 11.175l-.538.004a9.382 9.382 0 0 0-9.054 7.169c-1.392 5.735-7.67 8.776-13.033 6.314l-.36-.166a9.622 9.622 0 0 0-11.406 2.584c-3.847 4.615-10.935 4.615-14.782 0a9.622 9.622 0 0 0-11.406-2.584l-.36.166c-5.363 2.462-11.64-.579-13.033-6.314a9.382 9.382 0 0 0-9.054-7.169l-.538-.004c-5.845-.039-10.154-5.476-8.856-11.176a9.147 9.147 0 0 0-4.99-10.289l-.247-.118C.815 78.118-.734 71.29 2.968 66.72a9.087 9.087 0 0 0 0-11.438C-.734 50.71.815 43.882 6.125 41.356l.248-.118a9.147 9.147 0 0 0 4.989-10.29c-1.298-5.699 3.011-11.136 8.856-11.175l.538-.004a9.382 9.382 0 0 0 9.054-7.17c1.392-5.734 7.67-8.775 13.033-6.313l.36.166A9.622 9.622 0 0 0 54.61 3.868Z" fill="#FFFFFF"/></svg>
                        </div>
                        <p className='text-white text-sm leading-4'>Años de<br /> trayectoria</p>
                    </div>
                </div>
              </div>
          </div>
    </div>

  )
}

export default VentaAlquilerComp