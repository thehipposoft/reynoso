import React from 'react'
import OportunidadesGrid from './OportunidadesGrid'

const Oportunidades = () => {
    return (
          <div className='flex py-12 flex-col md:w-[1300px] w-[90vw] mx-auto'>
              <div className='flex justify-between md:px-12 px-6'>
                <div className='flex flex-col'>
                  <h1 className='font-inter text-4xl font-inter'>Oportunidades<br /> Inmobiliarias</h1>
                  <h3 className='text-4xl font-baileys'>A Medida</h3>
                </div>
                <div className='bg-slate-50 w-[600px]'>
                  COUNTER
                </div>
              </div>
              <OportunidadesGrid />
          </div>
      )
}

export default Oportunidades