import Image from 'next/image'
import ProyectosList from '@/components/Proyecto/ProyectosList'
import getAllProjects from '@/api/getAllProjects'
import MenuDesarrollos from '@/components/MenuDesarrollos'
import Menu from '@/components/Menu'
import Footer from '@/components/commons/Footer'
import { Proyecto } from '@/types'

export default async function DesarrollosPage() {

    const proyectos = await getAllProjects();

    const proyectosPropios = proyectos.filter((item: Proyecto) => item?.imagen_banner);

    const proyectosAlianza = proyectos.filter((item: Proyecto) => 
    item?.desarrollo_alianza?.nombre
    );

    console.log(proyectosAlianza)

  return (
    <div>
        <header>
            <MenuDesarrollos proyectos={proyectos} />
            <Menu hiddeOnDesktop />
        </header>
        <main>
            <div className='flex flex-col'>
                <div className='bg-[#E9EAE9]'>
                    <div className='flex flex-col w-[90vw] lg:w-[1200px] mx-auto'>
                        <div className='flex md:justify-between justify-center items-center'>
                            <div className='flex flex-col md:px-12 px-6 py-12 md:py-0'>
                                <h4 className='font-jakarta text-3xl text-center'>Nuestros</h4>
                                <h3 className='text-4xl'>Proyectos</h3>
                            </div>
                            <Image className='hidden md:block w-auto max-w-[250px]' src={'/assets/images/logo-reynoso.png'} alt='Logo Reynoso Bienes Raices' width={260} height={200}  />
                        </div>
                    </div>
                </div>
                <div className='flex py-12 flex-col bg-[#93959206]'>
                    <ProyectosList proyectos={proyectosPropios} />
                </div>
                {
                    proyectosAlianza.length === 0 ?
                    <></>
                    :
                    <div className='flex md:py-12 pb-12 flex-col md:gap-8 gap-2 bg-[#93959206]'>
                        <div className='flex flex-col w-[90vw] lg:w-[1200px] mx-auto'>
                            <div className='flex flex-col md:py-0 py-4'>
                                <h4 className='font-jakarta text-5xl text-left'>Alianzas</h4>
                            </div>
                        </div>
                        <ProyectosList proyectos={proyectosAlianza} />
                    </div>
                }

            </div>
        </main>
        <footer>
            <Footer proyectos={proyectos} />
        </footer>
    </div>
  )
}
