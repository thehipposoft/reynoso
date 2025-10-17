import React from 'react'
import Image from 'next/image'
import { Form }from '../Form'

const Contact = () => {
  return (
    <div className='md:h-screen md:py-0 py-12 relative flex justify-center'>
      <Image 
        src={'/assets/images/contact.jpg'} 
        alt='Contact section background:' 
        fill
        sizes='100vw'
        className='object-cover'
       />
       <div className='lg:w-1/3 w-[90vw] md:h-[95vh] bg-primary-green/40 backdrop-blur-md flex flex-col gap-6'>
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
              emailServiceURL={'https://propiedades.reynosobienesraices.com.ar/wp-json/contact-form-7/v1/contact-forms/0eb85e7/feedback'}
          />
        <div className='bg-white w-full h-full flex flex-col text-center justify-center items-center py-8 md:py-0'>
              <h4 className='font-jakarta text-3xl leading-6'>Un paso más <br /> cerca de tu</h4>
              <h3 className='md:pl-8'>proyecto</h3>
        </div>
       </div>

    </div>
  )
}

export default Contact