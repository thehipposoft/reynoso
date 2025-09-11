'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const GRID_DATA = [
    {
        image: '/assets/images/oportunidades/oportunidades-1.webp',
        alt: 'Familia caminando',
        title: 'Familia',
        texto: 'Acompañamos tu decisión más importante',
        description: 'Estamos comprometidos en que la experiencia de acceder a tu hogar sea simple, transparente y llena de confianza, para que disfrutes el proceso de crear el espacio donde crecerá tu familia.',
    },
    {
        image: '/assets/images/oportunidades/oportunidades-3.webp',
        alt: 'Pareja recibiendo departamento',
        title: 'Starters',
        texto: 'Te ayudamos a dar el primer paso',
        description: 'Invertir por primera vez no tiene que ser complicado: te ofrecemos el acompañamiento y la experiencia necesarios para transformar esa decisión en una oportunidad real de crecimiento',
    },
    {
        image: '/assets/images/oportunidades/oportunidades-2.webp',
        alt: 'Reunion Ejecutiva',
        title: 'Inversores',
        texto: 'Invertí con tranquilidad',
        description: 'Cada desarrollo que ofrecemos está pensado para generar valor en el presente y confianza a futuro, combinando ubicación estratégica, diseño y seguridad en la inversión',
    },
]

const OportunidadesGrid = () => {

    const [currentItem, setCurrentItem] = useState<number | null>(0);

  return (
    <div className='md:grid flex flex-col md:grid-cols-3 md:grid-rows-10 md:h-[615px] my-12'>
        <div className='flex relative min-h-60 md:row-span-10'>
            <Image className='object-cover object-top md:object-center' src={'/assets/images/oportunidades/oportunidades-1.webp'} fill alt='Familia caminando' />
            <div className='absolute h-full w-full left-0 top-0 bg-black/30 z-10' />
            <h4 className='text-white text-2xl font-bold relative z-10 pt-16 pl-8'>Acompañamos tu<br/> decisión más importante</h4>
        </div>
        <div className='bg-grey-bg flex justify-center items-center row-span-4 px-8 pt-8 md:pt-0'>
            <p className='text-[#6E7488]'>Estamos comprometidos en que la experiencia de <strong>acceder a tu hogar sea simple, transparente y llena de confianza,</strong> para que disfrutes el proceso de crear el espacio donde crecerá tu familia.</p>
        </div>
        <div className='bg-grey-bg row-span-4 flex justify-center items-center py-8 md:py-0'>
            <Link 
                href={'/#contacto'}
                className='uppercase group relative tracking-[3px] text-xs text-white font-thin bg-primary-green rounded-4xl overflow-hidden
                py-5 px-10  before:w-full before:h-full hover:before:translate-y-0 before:duration-300 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                
                <p className='relative z-10 '>contactanos</p>
            </Link>
        </div>
        <div className='min-h-48 relative md:row-span-6 flex justify-center items-center'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/35 z-10'/>
            <h4 className='text-white text-2xl relative z-10 font-bold'>Inversores</h4>
            <Image className='object-cover' src={'/assets/images/oportunidades/oportunidades-3.webp'} fill alt='Pareja recibiendo departamento' />
        </div>
        <div className='min-h-48 mt-8 md:mt-0 relative row-span-6 flex justify-center items-center'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/35 z-10 '/>
            <h4 className='text-white text-2xl relative z-10 font-bold'>Starters</h4>
            <Image className='object-cover' src={'/assets/images/oportunidades/oportunidades-2.webp'} fill alt='Reunion Ejecutiva' />
        </div>
    </div>
  )
}

export default OportunidadesGrid