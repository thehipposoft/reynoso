import React from 'react'
import Image from 'next/image'
import { Proyecto } from '@/types'
import Link from 'next/link'

interface MenuDesarrollosType {
  proyectos: Proyecto[]
}

const MenuDesarrollos = ({proyectos}:MenuDesarrollosType) => {
  return (
    <div className='hidden md:block w-screen relative z-30 bg-[#062C30]'>
      <div className='w-[90vw] md:w-[1200px] flex justify-between items-center mx-auto py-4 '>
        <Link href={'/'}>
          <Image src={'/assets/images/logo/logo-white.png'} alt='Reynoso Bienes Raices Logo' width={120} height={120} className='w-auto' />
        </Link>
        <nav className='flex gap-8 pr-10'>
          {
            proyectos.map((item, index) => (
              <Link 
                href={`desarrollos/${item.slug}`} 
                key={index} 
                className='hover:underline text-white uppercase text-sm font-jakarta font-light tracking-[2px]'
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

export default MenuDesarrollos