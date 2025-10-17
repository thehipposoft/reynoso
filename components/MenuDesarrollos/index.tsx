import React from 'react'
import Image from 'next/image'
import { Proyecto } from '@/types'
import AnimatedLink from '../commons/AnimatedLink'

interface MenuDesarrollosType {
  proyectos: Proyecto[]
}

const MenuDesarrollos = ({proyectos}:MenuDesarrollosType) => {
  return (
    <div className='hidden lg:block w-screen relative z-30 bg-[#062C30]'>
      <div className='w-[90vw] md:w-[1200px] flex justify-between items-center mx-auto py-4 '>
        <AnimatedLink href={'/'}>
          <Image src={'/assets/images/logo/logo-white.png'} alt='Reynoso Bienes Raices Logo' width={120} height={120} className='w-auto' />
        </AnimatedLink>
        <nav className='flex gap-8 pr-10'>
          {
            proyectos.map((item, index) => (
              <AnimatedLink 
                href={`desarrollos/${item.slug}`} 
                key={index} 
                className='hover:underline text-white uppercase text-sm font-jakarta font-light tracking-[2px]'
              >
                {item.nombre}
              </AnimatedLink>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

export default MenuDesarrollos