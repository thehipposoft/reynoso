import React from 'react'
import Image from 'next/image'
import { Form }from '../Form'
import { Proyecto } from '@/types'

type ProyectoLayoutProps = {
  proyecto: Proyecto
}

const ContactDesarrollos = ({proyecto}:ProyectoLayoutProps) => {
  return (
    <div className='md:h-screen md:py-0 py-12 relative flex justify-center'>
        <div className='absolute w-full h-full left-0 top-0 bg-black/30' />
      <Image
        src={proyecto.imagen_banner}
        alt='Contact section background:'
        fill
        sizes='100vw'
        className='object-cover -z-10'
       />
       <div className='lg:w-1/3 w-[90vw] md:h-[85vh] bg-primary-green/40 backdrop-blur-md flex flex-col gap-6'>
          <h4 id='contacto' className='text-white text-4xl pt-20 px-16 font-jakarta'>Contactanos</h4>
          <Form
              fields={[
                  {
                      name: 'yourName',
                      type: 'text',
                      label: '',
                      placeholder: 'Nombre*',
                      required: true,
                  },
                  {
                      name: 'email',
                      type: 'email',
                      label: '',
                      placeholder: 'Email*',
                      required: true,
                  },
                  {
                      name: 'number',
                      type: 'number',
                      label: '',
                      placeholder: 'Teléfono*',
                      required: true,
                  },
                  {
                      name: 'message',
                      type: 'textArea',
                      label: '',
                      placeholder: 'Mensaje*',
                      required: true,
                  },
              ]}
              onSuccessMessage={'Tu mensaje fue enviado. Te contactaremos pronto.'}
              onErrorMessage={'Por favor intenta de nuevo en unos minutos'}
              submitButtonLabel={'Enviar'}
              emailServiceURL={'https://propiedades.reynosobienesraices.com.ar/wp-json/reynoso/v1/contact'}
              //emailServiceURL={'https://propiedades.reynosobienesraices.com.ar/wp-json/contact-form-7/v1/contact-forms/0eb85e7/feedback'}
          />
       </div>
    </div>
  )
}

export default ContactDesarrollos