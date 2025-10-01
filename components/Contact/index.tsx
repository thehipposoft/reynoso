import React from 'react'
import Image from 'next/image'
import { Form }from '../Form'

const Contact = () => {
  return (
    <div className='h-screen relative flex justify-center'>
      <Image 
        src={'/assets/images/banner/banner-1.png'} 
        alt='Contact section background:' 
        fill
        sizes='100vw'
        className='object-cover'
       />
       <div className='w-1/3 h-[95vh] bg-primary-green/40 backdrop-blur-md flex flex-col gap-6'>
          <h4 className='text-white text-4xl pt-20 px-16'>Contactanos</h4>
          <Form
              fields={[
                  {
                      name: 'name',
                      type: 'text',
                      label: '',
                      placeholder: 'Nombre*',
                      required: true,
                  },
                  {
                      name: 'customerEmail',
                      type: 'email',
                      label: '',
                      placeholder: 'Email*',
                      required: true,
                  },
                  {
                      name: 'phoneNumber',
                      type: 'tel',
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
              onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
              onErrorMessage={'Please, try again in some minutes'}
              submitButtonLabel={'Enviar'}
              emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/tem-architecture-email'}
          />
        <div className='bg-white w-full h-full flex flex-col text-center justify-center items-center '>
              <h4 className='font-jakarta text-3xl leading-6'>Un paso más <br /> cerca de tu</h4>
              <h3 className='md:pl-8'>proyecto</h3>
        </div>
       </div>

    </div>
  )
}

export default Contact