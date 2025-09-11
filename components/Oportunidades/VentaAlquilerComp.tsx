import React from 'react'
import Link from 'next/link'

const VentaAlquilerComp = () => {
  return (
    <div className='bg-[#E6E6E6] relative -z-10'>
          <div className='flex py-12 flex-col md:w-[1300px] w-[90vw] mx-auto '>
              <div className='flex justify-between md:px-12 px-6'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col'>
                        <h1 className='font-inter text-4xl font-inter'>Oportunidades<br /> Inmobiliarias</h1>
                        <h3 className='text-4xl font-baileys'>A Medida</h3>
                    </div>
                    <p className='w-[430px] text-[17px]'>Ya sea que busques alquilar, comprar o vender, te ofrecemos oportunidades inmobiliarias pensadas para vos.</p>
                    <div className='flex'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-bold'>¿Buscás alquilar?</h4>
                            <p>Te ayudamos a encontrar la propiedad que se ajuste a tus necesidades, con el respaldo y la claridad que nos caracteriza</p>
                            <Link 
                                href={'/'}
                                className='group relative z-40 text-white w-fit bg-primary-green rounded-xl overflow-hidden
                                py-3 px-5  before:w-full before:h-full hover:before:translate-y-0 before:duration-300 before:ease-out before:absolute before:bg-[#333333] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                                
                                <p className='relative z-10'>Alquileres</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-50 w-[600px] h-[500px]'>

                </div>
              </div>
          </div>
    </div>

  )
}

export default VentaAlquilerComp