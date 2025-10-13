import React from 'react'
import Image from 'next/image'
import ProyectosList from '@/components/Proyecto/ProyectosList'
import getAllProjects from '@/api/getAllProjects'
import MenuDesarrollos from '@/components/MenuDesarrollos'
import Menu from '@/components/Menu'

export default async function DesarrollosPage() {

    const proyectos = await getAllProjects();

  return (
    <div>
        <header>
            <MenuDesarrollos proyectos={proyectos} />
            <Menu desarrollos={proyectos} hiddeOnDesktop />
        </header>
        <main>
            <div className='flex flex-col'>
                <div className='bg-[#E9EAE9]'>
                    <div className='flex flex-col w-[90vw] lg:w-[1200px] mx-auto'>
                        <div className='flex md:justify-between justify-center items-center'>
                            <div className='flex flex-col md:px-12 px-6 py-12 md:py-0'>
                                <h4 className=' font-jakarta text-3xl text-center'>Nuestros</h4>
                                <h3 className=' text-4xl'>Proyectos</h3>
                            </div>
                            <Image className='hidden md:block w-auto max-w-[250px]' src={'/assets/images/logo-reynoso.png'} alt='Logo Reynoso Bienes Raices' width={260} height={200}  />
                        </div>
                    </div>
                </div>
                <div className='flex py-12 flex-col  bg-[#93959206]'>
                    <ProyectosList proyectos={proyectos} />
                </div>
            </div>
        </main>
    </div>
  )
}
