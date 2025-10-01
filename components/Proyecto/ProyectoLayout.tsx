import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Proyecto, ServiciosType } from '@/types'

type ProyectoLayoutProps = {
  proyecto: Proyecto
}


const ProyectoLayout = ({proyecto}:ProyectoLayoutProps) => {

  return (
    <div>
        <div className='h-screen w-screen flex relative'>
            <Image src={proyecto.imagen_banner} alt={`Imagen principal proyecto: ${proyecto.nombre}`} fill className='duration-700 object-cover z-10' />
            <div className='flex max-w-[1450px] 2xl:min-w-[1450px]'>
                <div className='flex flex-col justify-between md:bg-black/40 bg-black/20 md:min-w-[40vw] min-w-screen h-full relative z-20  '>
                    <div className='flex flex-col items-center justify-between pb-10 md:pt-[30vh]'>
                        <Image src={proyecto.logo} alt={`Logo proyecto: ${proyecto.nombre}`} width={280} height={200} className='z-20 relative ' />
                        <h5 className='text-lg tracking-[4px] text-white'>{proyecto.titulo}</h5>
                    </div>
                    <div className='bg-white flex'>
                        <div style={{backgroundColor: `${proyecto.color_secundario}`}} className='p-2 w-24 h-40 flex justify-center items-center text-xs tracking-[3px]'>
                            <h5 className='-rotate-90'>descubrir</h5>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <h5 className='tracking-[3px] text-xs'>{proyecto.nombre}, {proyecto.titulo}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex md:max-w-[1450px] mx-auto'>
            <div className='w-24 h-16 md:flex hidden justify-center items-center bg-[#F3F6FC]'>
                <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m-8-8v16" stroke="#080A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{backgroundColor: `${proyecto.color_primario}`}} className='md:px-24 px-6 md:h-56 flex flex-col gap-2'>
                <div className='flex pl-12 pt-4'>
                    <p className='text-white font-semibold'>Servicios</p>
                </div>
                <div className='h-[1px] bg-[#E2E7F1] md:w-1/2 w-3/4 mx-auto' />
                <div className='flex gap-2 flex-wrap justify-between md:w-[1000px] mx-auto relative md:py-4 py-8'>
                    {
                        proyecto.servicios.map((item:ServiciosType, index:number) => (
                            <div className='flex flex-col justify-center items-center gap-2' key={index}>
                                <Image src={item.icono_servicio.url} alt={`Servicios Icono: ${item.nombre_servicio}`} width={80} height={50} className='z-20 relative max-h-16' />
                                <p className='text-sm text-white'>{item.nombre_servicio}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='max-w-[1450px] relative mx-auto flex flex-col my-8 overflow-hidden'>
            <Image src={proyecto.imagen_deco} alt='Imagen Deco' width={490} height={220} className='absolute -right-40' />
            <div className='flex flex-col justify-between relative md:w-[1250px] pt-12 mx-auto'>
                <h4 className='font-jakarta text-5xl -tracking-wider font-bold' style={{color: `${proyecto.color_primario}`}}>{proyecto.subtitulo_bicolor_primera}</h4>
                <h4 className='font-jakarta text-5xl -tracking-wider font-bold pl-12' style={{color: `${proyecto.color_secundario}`}}>{proyecto.subtitulo_bicolor_segunda}</h4>
                <Image src={proyecto.subtitulo} alt='Subtitulo' width={450} height={220} className='object-contain hidden' />
            </div>
            <div className='h-[500px] flex justify-center items-center'>
                <h2>Galeria</h2>
            </div>
        </div>
        <div className='h-screen bg-black/30 flex justify-center items-center '>
            <h2>Video</h2>
        </div>
        <div className='flex flex-col md:flex justify-between md:w-[1300px] w-[90vw] py-8 mx-auto'>
            <Image src={proyecto.mapa_imagen} alt='Mapa del desarrollo' width={600} height={800} />
            <div className='md:w-[550px] flex flex-col justify-between'>
                <Image src={`${proyecto.imagen_decorativa_dos ? proyecto.imagen_decorativa_dos : proyecto.imagen_deco}`} alt='Imagen Decorativa' width={455} height={350} className='hidden md:block' />
                <div className='flex flex-col md:gap-8 gap-6 pt-8 md:pt-0 px-4 md:px-0'>
                    <Link
                        href={proyecto.mapa_url}
                        rel='noreferrer'
                        target='_blank'
                        className='cursor-pointer w-fit uppercase group relative bg-dark-blue tracking-[3px] text-xs text-white font-thin rounded-4xl overflow-hidden border
                        py-4 px-8 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#f5f5f53a] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                        
                        <p className='relative z-10'>ver en mapa</p>
                    </Link>
                    <div className='flex flex-col'>
                        <h2>Estratégicamente</h2>
                        <h3 style={{color: `${proyecto.color_secundario}`}}>Ubicado</h3>
                    </div>
                    <h4 className='font-light text-xl w-1/3'>{proyecto.ubicacion}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProyectoLayout