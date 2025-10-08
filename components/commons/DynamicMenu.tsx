'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Proyecto } from '@/types'
import Link from 'next/link'

interface DynamicMenuTypes {
  proyectos: Proyecto[]
}

const DynamicMenu = ({proyectos}:DynamicMenuTypes) => {

  const pathname = usePathname();

  const CuratedArrFunc = (arr: Proyecto[]): Proyecto[] => {
    // Filtramos el array. Incluimos solo los proyectos donde su slug NO está
    // contenido en el pathname actual.
    return arr.filter(proyecto => !pathname.includes(proyecto.slug));
  }
  
  // Obtenemos el array filtrado.
  const proyectosFiltrados = CuratedArrFunc(proyectos);

  return (
    <div className='w-screen md:block hidden absolute z-30'>
      <div className='w-[90vw] md:w-[1300px] mx-auto flex justify-between py-2'>
        <Link href={'/'}>
          <Image src={'/assets/images/logo/logo-white.png'} alt='Reynoso Bienes Raices Logo' width={120} height={120} />
        </Link>
        <nav className='flex items-center gap-8 pr-10'>
          {
            proyectosFiltrados.map((item, index) => (
              <Link 
                href={item.slug} 
                key={index} 
                className='hover:underline text-white text-xs uppercase font-jakarta tracking-[3px]'
              >
                {item.nombre}
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

export default DynamicMenu