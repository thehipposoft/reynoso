import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Explora = () => {
  return (
    <div className='flex flex-col items-center md:w-[1300px] w-[90vw] mx-auto my-2'>
        <div className='flex'>
            <div className='w-7 h-36 bg-primary-green'/>
            <div className='flex flex-col items-center justify-center text-center md:w-[450px] shadow-2xl'>
                <h4 className='text-3xl font-jakarta'>Nuestros</h4>
                <h3>Proyectos</h3>
            </div>
        </div>
        <div className='bg-[#f5f5f5] md:w-[935px] w-[90vw] md:h-72 flex flex-col md:px-16 px-8 py-10 md:py-0 gap-12 justify-center'>
            <p className='font-semibold md:text-xl text-4xl leading-7'>Explorá nuestros Desarrollos Inmobiliarios</p>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-4'>
              <Link href={''}><Image className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100' src={'/assets/images/logo/citadino-p.png'} alt='' width={200} height={100} /></Link>
              <Link href={''}><Image className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100' src={'/assets/images/logo/cauce-p.png'} alt='' width={200} height={100} /></Link>
              <Link href={''}><Image className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100' src={'/assets/images/logo/maruyama-p.png'} alt='' width={200} height={100} /></Link>
              <Link href={''}><Image className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100' src={'/assets/images/logo/campo-p.png'} alt='' width={200} height={100} /></Link>
              <Link href={''}><Image className='hover:grayscale-0 duration-500 hover:scale-110 grayscale-100' src={'/assets/images/logo/senderos-p.png'} alt='' width={200} height={100} /></Link>
            </div>
        </div>
    </div>
  )
}

export default Explora