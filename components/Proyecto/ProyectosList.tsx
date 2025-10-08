import { Proyecto } from '@/types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProyectosListProps {
    proyectos: Proyecto[]
}

const ProyectosList = ({proyectos}:ProyectosListProps) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-[90vw] md:w-[1200px] mx-auto'>
        {
            proyectos.map((proyecto, index) => (
                <div className='flex md:h-[310px] h-[250px] shadow-2xl rounded-tr-xl rounded-br-xl' key={index}>
                    <div className='w-1/2 bg-white flex flex-col justify-around items-center'>
                        <p className='font-inter uppercase tracking-[2px] text-sm font-light w-4/5 text-center'><strong>{proyecto.nombre}</strong>, {proyecto.titulo}</p>
                        <div className='flex flex-col items-center gap-2'>
                            <h6 className='tracking-[2px] text-xs md:text-sm text-title-color font-inter font-semibold uppercase'>Lotes disponibles</h6>
                            <Link 
                                href={`/desarrollos/${proyecto.slug}`}
                                className='cursor-pointer uppercase group relative bg-primary-green tracking-[2px] w-fit text-xs text-white rounded-4xl overflow-hidden 
                                py-4 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-title-color before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                
                                <p className='relative z-10 '>ver más</p>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2 relative'>
                        <Image sizes='400px' src={proyecto.imagen_banner} fill className='object-cover rounded-tr-xl rounded-br-xl' alt={`Imagen de Proyecto: ${proyecto.nombre}`} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProyectosList