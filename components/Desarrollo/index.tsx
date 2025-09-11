import React from 'react'

const Desarrollo = () => {
  return (
    <div className='flex pt-12 flex-col w-[90vw] md:w-[1300px] mx-auto'>
        <div className='flex flex-col md:px-12 px-6'>
            <h1 className='font-inter text-4xl'>Una nueva forma<br /> de vivir cada</h1>
            <h3 className='text-4xl'>Desarrollo</h3>
        </div>
        <div className='bg-black/70 mt-8 md:mt-0 w-full h-[600px] flex flex-col gap-16 justify-center items-center md:translate-y-16'>
            <h5 className='text-white'>explore me</h5>
            <h4 className='text-white text-center font-semibold text-3xl'>Conocé nuestros desarrollos como si estuvieras ahí.</h4>
            <button 
                className='cursor-pointer uppercase group relative tracking-[3px] text-xs text-white font-thin rounded-4xl overflow-hidden border
                py-5 px-10 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#f5f5f53a] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                
                <p className='relative z-10 '>ver video</p>
            </button>
        </div>
        <div className='bg-[#F3F6FC] w-11/12 hidden md:grid grid-cols-3 h-32 mx-auto relative z-10'>
            <div className='flex justify-center items-center'>
                <h5 className='text-center tracking-[4px]'>disposición<br/> de lótes</h5>
            </div>
            <div className='flex justify-center items-center'>
                <h5 className='text-center tracking-[4px]'>estados<br/> actualizados</h5>
            </div>
            <div className='flex justify-center items-center'>
                <h5 className='text-center tracking-[4px]'>detalles de<br/> cada unidad</h5>
            </div>
        </div>
  </div>
  )
}

export default Desarrollo