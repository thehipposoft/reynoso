import React from 'react'

const Redes = () => {
  return (
    <div className='flex pt-12 flex-col w-screen 2xl:w-[1300px] mx-auto'>
        <div className='flex md:flex-row flex-col md:items-center relative gap-12 md:gap-0'>
            <div className='flex flex-col md:px-12 px-6 bg-[#F3F6FC] w-[75vw] md:w-1/2 h-44 justify-center'>
                <h1 className='font-inter text-4xl'>Encontranos en</h1>
                <h3 className='text-4xl'>Redes Sociales</h3>
            </div>
            <div className='flex flex-col md:flex-row md:absolute right-0 md:pl-16 pl-8 py-4 md:py-0 self-end md:self-auto items-center bg-[#038C7F] md:h-14 gap-2 md:gap-36 w-[75vw] md:w-[55vw] 2xl:w-[800px]'>
                <h5 className='tracking-[3px] text-xl text-white'>seguinos!</h5>
                <div className='flex gap-2'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white'>
                        <svg className='scale-[135%]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#038C7F" d="M5.12.96A4.163 4.163 0 0 0 .96 5.12v5.76a4.163 4.163 0 0 0 4.16 4.16h5.76a4.163 4.163 0 0 0 4.16-4.16V5.12A4.163 4.163 0 0 0 10.88.96H5.12Zm6.72 2.56a.641.641 0 0 1 0 1.28.641.641 0 0 1 0-1.28ZM8 4.48A3.522 3.522 0 0 1 11.52 8 3.522 3.522 0 0 1 8 11.52 3.522 3.522 0 0 1 4.48 8 3.522 3.522 0 0 1 8 4.48Zm0 .64A2.884 2.884 0 0 0 5.12 8 2.884 2.884 0 0 0 8 10.88 2.884 2.884 0 0 0 10.88 8 2.884 2.884 0 0 0 8 5.12Z"/></svg>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white'>
                        <svg className='scale-[135%]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#038C7F" d="M10.24 3.52h1.6a.32.32 0 0 0 .32-.32V1.044a.32.32 0 0 0-.296-.319A37.075 37.075 0 0 0 9.645.64C7.68.64 6.4 1.818 6.4 3.958V6.08H4.16a.32.32 0 0 0-.32.32v2.24c0 .176.144.32.32.32H6.4v6.08c0 .176.144.32.32.32h2.24a.32.32 0 0 0 .32-.32V8.96h2.311a.32.32 0 0 0 .318-.285l.249-2.24a.32.32 0 0 0-.318-.355H9.28v-1.6c0-.53.43-.96.96-.96Z"/></svg>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white'>
                        <svg className='scale-[135%]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#038C7F" d="M2.56.962C1.45.962.642 1.63.642 2.544c0 .918.827 1.612 1.918 1.612 1.11 0 1.916-.677 1.916-1.631C4.426 1.606 3.635.962 2.56.962ZM.96 4.8a.32.32 0 0 0-.32.32v9.28c0 .176.144.32.32.32h3.2a.32.32 0 0 0 .32-.32V5.12a.32.32 0 0 0-.32-.32H.96Zm4.8 0a.32.32 0 0 0-.32.32v9.28c0 .176.144.32.32.32h2.88a.32.32 0 0 0 .32-.32V9.44c0-.759.582-1.376 1.325-1.434C10.324 8 10.36 8 10.4 8a1.435 1.435 0 0 1 1.44 1.44v4.96c0 .176.144.32.32.32h2.88a.32.32 0 0 0 .32-.32V8.96c0-2.07-1.111-4.16-3.588-4.16a4.329 4.329 0 0 0-2.492.796V5.12a.32.32 0 0 0-.32-.32h-3.2Z"/></svg>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-white'>
                        <svg className='scale-[135%]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#038C7F" d="M14.367 4.64c-.127-.704-.735-1.216-1.44-1.376-1.054-.224-3.007-.384-5.12-.384-2.11 0-4.095.16-5.15.384-.705.16-1.313.64-1.44 1.376C1.086 5.44.96 6.56.96 8s.127 2.56.287 3.36c.13.704.737 1.216 1.44 1.376 1.12.224 3.04.384 5.153.384 2.112 0 4.033-.16 5.152-.384.704-.16 1.312-.64 1.44-1.376.128-.8.288-1.953.32-3.36a22.392 22.392 0 0 0-.385-3.36Zm-8.287 5.6V5.76L9.984 8 6.08 10.24Z"/></svg>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Redes