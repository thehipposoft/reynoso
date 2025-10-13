import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Proyecto, ServiciosType } from '@/types'
import SwiperGallery from '../SwiperGallery'
import Galeria from '../SwiperGallery/Galeria'

type ProyectoLayoutProps = {
  proyecto: Proyecto
}


const ProyectoLayout = ({proyecto}:ProyectoLayoutProps) => {
  return (
    <div>
        <div className='h-screen w-screen flex lg:flex-row flex-col-reverse justify-between lg:items-center items-end relative'>
            <Image src={proyecto.imagen_banner} alt={`Imagen principal proyecto: ${proyecto.nombre}`} fill sizes='100vw' className='duration-700 object-cover z-10' />
            <div className='absolute left-0 top-0 w-full h-full bg-black/30 z-20' />
            <div className='flex max-w-[1450px] h-screen'>
                <div className='flex flex-col justify-between lg:min-w-[40vw] min-w-screen h-full relative z-20  '>
                    <div className='flex flex-col items-center justify-between pb-10 md:pt-[30vh] pt-[25vh]'>
                        <Image 
                            src={proyecto.logo} 
                            alt={`Logo proyecto: ${proyecto.nombre}`} 
                            width={280} 
                            height={200}
                            priority
                            className='z-20 relative brightness-0 invert-100 w-auto max-w-[260px]' 
                        />
                        <h5 className='text-lg tracking-[4px] text-white'>{proyecto.titulo}</h5>
                    </div>
                    <div className='bg-white flex w-screen lg:w-auto'>
                        <div style={{backgroundColor: `${proyecto.color_secundario}`}} className='p-2 w-24 h-40 flex justify-center items-center text-xs tracking-[3px]'>
                            <h5 style={{color: `${proyecto.texto_blanco.length === 0 ? '#383838' : '#FFFFFF'}`}} className='-rotate-90'>descubrir</h5>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <h5 className='tracking-[3px] text-xs text-center px-2'>{proyecto.nombre}, {proyecto.titulo}</h5>
                        </div>
                    </div>
                </div>
            </div>
            {
                proyecto.agotado.length === 0 ?
                 <></> : 
                <div className='flex justify-center top-40 lg:top-0 items-center bg-green-blur backdrop-blur-xs relative z-30 h-fit rounded-tl-2xl rounded-bl-2xl'>
                    <h4 className='font-extrabold text-white font-jakarta text-2xl md:text-5xl 2xl:text-6xl uppercase md:py-12 py-6 md:px-20 px-12'>unidades agotadas</h4>
                </div>
            }
        </div>
        <div className='flex md:max-w-[1450px] mx-auto'>
            <div className='w-24 h-16 md:flex hidden justify-center items-center bg-[#F3F6FC]'>
                <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m-8-8v16" stroke="#080A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{backgroundColor: `${proyecto.color_primario}`}} className='md:px-24 px-6 flex flex-col gap-2 md:gap-4'>
                <div className='flex pl-12 pt-4'>
                    <p className='text-white font-semibold text-xl font-jakarta'>Servicios</p>
                </div>
                <div className='h-[1px] bg-[#E2E7F1] w-3/4 mx-auto' />
                <div className='flex gap-6 md:gap-16 flex-wrap justify-center lg:justify-start mx-auto relative py-8'>
                    {
                        proyecto.servicios.map((item:ServiciosType, index:number) => (
                            <div className='flex flex-col justify-center items-center gap-2' key={index}>
                                <Image 
                                    src={item.icono_servicio.url} 
                                    alt={`Servicios Icono: ${item.nombre_servicio}`} 
                                    width={80} 
                                    height={50} 
                                    className='z-20 relative w-auto h-20 max-h-24' 
                                />
                                <p className='text-sm text-white font-jakarta'>{item.nombre_servicio}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='max-w-[1450px] relative mx-auto flex flex-col my-8 overflow-hidden gap-8'>
            {proyecto.imagen_deco ? <Image src={proyecto.imagen_deco} alt='Imagen Deco' width={490} height={220} className='absolute -right-40 w-auto max-w-[490px]' /> : <></>}
            <div className='flex flex-col justify-between relative w-[90vw] lg:w-[1250px] pt-12 mx-auto'>
                <h4 className='font-jakarta text-4xl md:text-5xl -tracking-wider font-bold' style={{color: `${proyecto.color_primario}`}}>{proyecto.subtitulo_bicolor_primera}</h4>
                <h4 className='font-jakarta text-4xl md:text-5xl -tracking-wider font-bold pl-12' style={{color: `${proyecto.color_secundario}`}}>{proyecto.subtitulo_bicolor_segunda}</h4>
            </div>
            {
                proyecto.agotado.length > 0 && proyecto.galeria.length > 0 ?
                <div className=''>
                    <Galeria images={proyecto.galeria} />
                </div>
                :
                <></>
            }
            {
                proyecto.agotado.length === 0 && proyecto.galeria.length > 0 ?
                <div className='max-h-[500px]'>
                    <SwiperGallery images={proyecto.galeria}/>
                </div>
                :
                <></>
            }
            {
                proyecto.brochure &&
                <div className='flex justify-center items-center mt-4'>
                    <Link
                        rel='noreferrer'
                        target='_blank'
                        href={proyecto.brochure} 
                        style={{
                            backgroundColor: `${proyecto.color_secundario}`,
                            color: `${proyecto.texto_blanco.length === 0 ? '#000000' : '#FFFFFF'}`,
                            borderColor: `${proyecto.color_secundario}`,
                        }} 
                        className='cursor-pointer uppercase group flex relative tracking-[3px] text-sm text-white font-medium gap-6 rounded-4xl overflow-hidden border
                        py-4 px-12 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#f5f5f53a] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                        
                        ver brochure
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{fill: `${proyecto.texto_blanco.length === 0 ? '#000000' : '#FFFFFF'}`}}  d="M18 11.7949h-2.55l-2 2.0513H18v4.1025H2v-4.1025h4.55l-2-2.0513H2c-.53043 0-1.039141.2161-1.414214.6008C.210714 12.7804 0 13.3021 0 13.8462v4.1025c0 .5441.210714 1.0658.585786 1.4505C.960859 19.7839 1.46957 20 2 20h16c.5304 0 1.0391-.2161 1.4142-.6008.3751-.3847.5858-.9064.5858-1.4505v-4.1025c0-.5441-.2107-1.0658-.5858-1.4505-.3751-.3847-.8838-.6008-1.4142-.6008Z" fill="#090B19"/><path style={{fill: `${proyecto.texto_blanco.length === 0 ? '#000000' : '#FFFFFF'}`}} d="M9.292 13.0318c.09289.0955.20324.1713.32473.223.12149.0517.25174.0783.38327.0783.1315 0 .2618-.0266.3833-.0783.1215-.0517.2318-.1275.3247-.223l4-4.10257c.1822-.19344.283-.45252.2807-.72144-.0023-.26892-.1075-.52616-.2929-.71632s-.4362-.29803-.6984-.30037c-.2622-.00233-.5148.10105-.7034.28787L11 9.8318V1.02564c0-.272016-.1054-.532892-.2929-.725237S10.2652 0 10 0c-.26522 0-.51957.108058-.70711.300403C9.10536.492748 9 .753624 9 1.02564V9.8318L6.707 7.48c-.09225-.09796-.20259-.17609-.3246-.22985-.122-.05375-.25322-.08204-.386-.08323-.13278-.00118-.26446.02477-.38735.07634-.1229.05157-.23455.12773-.32845.22403-.09389.0963-.16814.21081-.21842.33686-.05028.12605-.07558.2611-.07443.39729.00115.13618.02874.27077.08115.3959.05241.12513.12859.2383.2241.33292l3.999 4.10154ZM15 16.9231c.5523 0 1-.4592 1-1.0257 0-.5664-.4477-1.0256-1-1.0256s-1 .4592-1 1.0256c0 .5665.4477 1.0257 1 1.0257Z" fill="#090B19"/></svg>
                    </Link>
                </div>
            }
        </div>
        <div className='h-screen hidden bg-black/30  justify-center items-center '>
            <h2>Video</h2>
        </div>
        <div className='flex lg:flex-row flex-col justify-center lg:gap-40 md:gap-12 lg:items-end md:items-center md:max-w-[1250px] w-[90vw] py-8 mx-auto md:min-h-screen'>
            <Image 
                src={proyecto.mapa_imagen} 
                alt='Mapa del desarrollo' 
                width={525} 
                height={800}
                className='max-h-[650px] lg:min-h-[500px] object-cover my-auto w-auto md:min-w-[525px]'
             />
            <div className='md:w-[450px] flex flex-col justify-between gap-20'>
                <Image 
                    src={`${proyecto.imagen_decorativa_dos ? proyecto.imagen_decorativa_dos : proyecto.imagen_deco}`} 
                    alt='Imagen Decorativa' 
                    width={455} 
                    height={350} 
                    className='hidden w-[400px] h-auto lg:block' 
                />
                <div className='flex flex-col md:gap-8 gap-6 pt-8 md:pt-0 px-4 md:px-0'>
                    <Link
                        href={proyecto.mapa_url}
                        rel='noreferrer'
                        target='_blank'
                        className='cursor-pointer w-fit uppercase group relative bg-dark-blue tracking-[3px] text-xs text-white font-thin rounded-4xl overflow-hidden border
                        py-5 px-8 before:w-full before:h-full hover:before:translate-y-0 before:duration-500 before:ease-out before:absolute before:bg-[#f5f5f53a] before:left-0 before:top-0 before:rounded-4xl before:translate-y-full'>
                        
                        <p className='relative z-10'>ver en mapa</p>
                    </Link>
                    <div className='flex flex-col'>
                        <h2>Estratégicamente</h2>
                        <h3 style={{color: `${proyecto.color_secundario}`}}>Ubicado</h3>
                    </div>
                    <h4 className='font-light text-xl w-3/5'>{proyecto.ubicacion}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProyectoLayout