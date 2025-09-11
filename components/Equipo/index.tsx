import React from 'react'
import EquipoGrid from './EquipoGrid'
import Image from 'next/image'
import EquipoCarrousel from './EquipoCarrousel'

const Equipo = () => {
  return (
    <div className='relative'>
      <Image className='absolute hidden md:block right-0 -top-[10%] -z-10' src={"/assets/images/dots.png"} alt='' width={300} height={400} />
      <div className='flex relative flex-col max-w-[1300px] mx-auto mb-16'>
        <div className='flex md:flex-row flex-col-reverse items-start md:items-end justify-between px-12'>
          <div className='flex flex-col mt-12 md:mt-0'>
            <h2 className='font-inter text-4xl'>Nuestro Equipo</h2>
            <h3 className='text-primary-green text-4xl'>de profesionales</h3>
          </div>
          <div className='md:w-[665px] mx-auto md:mx-0 flex md:gap-2 gap-8 items-end'>
            <div className='bg-primary-green w-36 pb-4 h-[300px] rounded-b-full flex items-end justify-center'>
              <div className='h-[115px] relative flex justify-center items-center'>
                <div className='flex relative z-20'>
                  <h4 className='text-white text-6xl font-bold translate-x-1'>2</h4>
                  <h4 className='text-white text-6xl pt-2 font-bold -translate-x-0.5'>4</h4>
                  <span className='bg-white w-20 h-[7px] absolute top-[67.2%] left-1/2' />
                </div>
                <svg className='scale-90 absolute top-0' width="124" height="122" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.609 3.868c3.847-4.615 10.935-4.615 14.782 0a9.622 9.622 0 0 0 11.406 2.584l.36-.166c5.363-2.462 11.64.58 13.033 6.314a9.382 9.382 0 0 0 9.054 7.169l.538.004c5.845.04 10.154 5.476 8.856 11.176a9.147 9.147 0 0 0 4.989 10.289l.248.118c5.31 2.526 6.859 9.355 3.157 13.925a9.087 9.087 0 0 0 0 11.438c3.702 4.57 2.153 11.399-3.157 13.925l-.248.118a9.147 9.147 0 0 0-4.989 10.29c1.298 5.699-3.011 11.136-8.856 11.175l-.538.004a9.382 9.382 0 0 0-9.054 7.169c-1.392 5.735-7.67 8.776-13.033 6.314l-.36-.166a9.622 9.622 0 0 0-11.406 2.584c-3.847 4.615-10.935 4.615-14.782 0a9.622 9.622 0 0 0-11.406-2.584l-.36.166c-5.363 2.462-11.64-.579-13.033-6.314a9.382 9.382 0 0 0-9.054-7.169l-.538-.004c-5.845-.039-10.154-5.476-8.856-11.176a9.147 9.147 0 0 0-4.99-10.289l-.247-.118C.815 78.118-.734 71.29 2.968 66.72a9.087 9.087 0 0 0 0-11.438C-.734 50.71.815 43.882 6.125 41.356l.248-.118a9.147 9.147 0 0 0 4.989-10.29c-1.298-5.699 3.011-11.136 8.856-11.175l.538-.004a9.382 9.382 0 0 0 9.054-7.17c1.392-5.734 7.67-8.775 13.033-6.313l.36.166A9.622 9.622 0 0 0 54.61 3.868Z" fill="#383838"/></svg>
              </div>
            </div>
            <h2 className='md:text-4xl text-[26px] leading-7 md:leading-9 font-bold'>Años <br className='hidden md:block'/> transformando el <br/> Mercado Inmobiliario</h2>
          </div>
        </div>
          <EquipoGrid />
          <EquipoCarrousel />
        <Image className='absolute hidden md:block left-0 -bottom-12 -z-10' src={"/assets/images/dots.png"} alt='' width={140} height={140} />
      </div>
    </div>
  )
}

export default Equipo