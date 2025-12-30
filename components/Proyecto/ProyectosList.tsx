import { Proyecto } from '@/types'
import Image from 'next/image'
import AnimatedLink from '../commons/AnimatedLink'

interface ProyectosListProps {
    proyectos: Proyecto[]
}


const ProyectosList = ({proyectos}:ProyectosListProps) => {

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-[90vw] lg:w-[1200px] mx-auto'>
        {
            proyectos.map((proyecto, index) => (
                <div className='flex md:h-[310px] h-[250px] shadow-2xl rounded-tr-xl rounded-br-xl' key={index}>
                        {
                            proyecto.estado === "Unidades Agotadas" ?
                                <div className='w-1/2 bg-white flex flex-col justify-end md:gap-16 gap-6 md:pb-12 pb-8 items-center relative'>
                                    <div className='bg-[#BB1313] rounded-b-xl absolute top-0 left-8 px-4 py-6'>
                                        <h6 className='tracking-[2px] text-xs md:text-sm text-white font-inter font-medium uppercase text-center'>unidades <br /> agotadas</h6>
                                    </div>
                                    <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.nombre}</strong>, {proyecto.titulo}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <AnimatedLink 
                                            href={`/desarrollos/${proyecto.slug}`}
                                            className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                            py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                            
                                            <p className='relative z-10 '>ver más</p>
                                        </AnimatedLink>
                                    </div>
                                </div>
                                :
                                proyecto.estado === "Ultimos lotes disponibles" ?
                                <div className='w-1/2 bg-white flex flex-col justify-around items-center relative'>
                                    <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.nombre}</strong>, {proyecto.titulo}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className='tracking-[2px] text-xs md:text-sm  text-green-light w-3/4 text-center font-inter font-semibold uppercase'>Ultimos lotes disponibles</h6>
                                        <AnimatedLink 
                                            href={`/desarrollos/${proyecto.slug}`}
                                            className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                            py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                            
                                            <p className='relative z-10 '>ver más</p>
                                        </AnimatedLink>
                                    </div>
                                </div>
                                :
                                proyecto.estado === "Fecha de entrega" ?
                                <div className='w-1/2 bg-white flex flex-col justify-around items-center relative'>
                                    <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.nombre}</strong>, {proyecto.titulo}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className='tracking-[2px] text-xs md:text-sm  text-title-color text-center font-inter font-semibold uppercase'>entrega {proyecto.fecha_de_entrega}</h6>
                                        <AnimatedLink 
                                            href={`/desarrollos/${proyecto.slug}`}
                                            className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                            py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                            
                                            <p className='relative z-10 '>ver más</p>
                                        </AnimatedLink>
                                    </div>
                                </div>
                                :
                                proyecto.clasificacion === "Desarrollo ALIANZA" ?
                                <div className='w-1/2 bg-white flex flex-col justify-around items-center relative'>
                                    <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.desarrollo_alianza?.nombre}</strong><br/>{proyecto.desarrollo_alianza?.tipo_de_proyecto}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className='tracking-[2px] text-xs md:text-sm text-title-color text-center font-inter font-semibold uppercase'>entrega {proyecto.desarrollo_alianza?.fecha_de_entrega}</h6>
                                        <AnimatedLink 
                                            href={`/desarrollos/${proyecto.slug}`}
                                            className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                            py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                            
                                            <p className='relative z-10 '>ver más</p>
                                        </AnimatedLink>
                                    </div>
                                </div>
                                :
                                <div className='w-1/2 bg-white flex flex-col justify-around items-center relative'>
                                    <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.nombre}</strong>, {proyecto.titulo}</p>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className='tracking-[2px] text-xs md:text-sm text-title-color font-inter font-semibold uppercase'>Lotes disponibles</h6>
                                        <AnimatedLink 
                                            href={`/desarrollos/${proyecto.slug}`}
                                            className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                            py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                            
                                            <p className='relative z-10 '>ver más</p>
                                        </AnimatedLink>
                                    </div>
                                </div>
                        }
                    <div className='w-1/2 relative'>
                        <Image sizes='400px' src={`${proyecto.clasificacion === "Desarrollo ALIANZA" ? proyecto.desarrollo_alianza?.portada.url : proyecto.imagen_banner}`} fill className='object-cover rounded-tr-xl rounded-br-xl' alt={`Imagen de Proyecto: ${proyecto.nombre}`} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProyectosList