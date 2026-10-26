import Image from 'next/image'
import AnimatedLink from '../commons/AnimatedLink'
import { Empleados } from '@/types'
import { IDS_CON_TARJETA_EN_HOME } from '@/lib/contact'

const EquipoGrid = ({ empleados }: Empleados) => {
  return (
    <div className='hidden lg:grid md:grid-cols-3 grid-cols-1 grid-rows-2 mt-8 w-[90vw] md:w-full mx-auto md:mx-0 gap-2'>
      {empleados.map((empleado, index) => {
        const conTarjeta = IDS_CON_TARJETA_EN_HOME.includes(empleado.id)

        return (
            <div
                key={empleado.nombre}
                className={`
                    md:min-w-[430px] group overflow-hidden h-[430px] bg-black/30 relative flex pb-16 items-end justify-end pr-8
                    ${index === 1 ? 'md:mt-10' : ''}
                    ${index === 2 ? 'md:mt-20' : ''}
                    ${index === 4 ? 'md:mt-10' : ''}
                    ${index === 5 ? 'md:mt-20' : ''}
                    ${index === 7 ? 'md:mt-10' : ''}
                    ${index === 8 ? 'md:mt-20' : ''}
                    ${index === 10 ? 'md:mt-10' : ''}
                    ${index === 11 ? 'md:mt-20' : ''}

                `}
            >
                <div className='absolute w-full h-full left-0 top-0 bg-black opacity-5 group-hover:opacity-0 duration-500 z-10'/>
                <Image
                src={empleado.foto}
                alt={`${empleado.nombre} foto de perfil`}
                fill
                sizes='430px'
                className='object-cover group-hover:scale-110 duration-500'
                />
                <div className='flex flex-col items-end relative z-10 bg-black/10 backdrop-blur-sm rounded-lg p-2'>
                    <h4 className='font-bold text-2xl text-white max-w-60 text-end leading-6'>
                        {empleado.nombre}
                    </h4>
                    <span className='uppercase tracking-[4px] font-light text-sm text-white'>
                        {empleado.puesto}
                    </span>
                    {conTarjeta && (
                        <span className='mt-1 text-xs text-white underline underline-offset-4 group-hover:no-underline'>
                            Ver tarjeta digital →
                        </span>
                    )}
                </div>
                {conTarjeta && (
                    <AnimatedLink
                        href={`/miembros/${empleado.slug}`}
                        aria-label={`Ver tarjeta digital de ${empleado.nombre}`}
                        className='absolute inset-0 z-20'
                    >{null}</AnimatedLink>
                )}
            </div>
        )
      })}
    </div>
  )
}

export default EquipoGrid
