import AnimatedLink from '@/components/commons/AnimatedLink'
import Image from 'next/image'

export default function NotFoundPage() {
  return (
    // Same teal as the illustration's flat background, so `object-contain` letterboxing is seamless
    <main className='relative isolate flex min-h-dvh flex-col items-center justify-between gap-8 overflow-hidden bg-[#60b9a6] px-6 py-16 text-center md:py-20'>
        <Image
            src={'/assets/images/not-found.png'}
            alt=''
            aria-hidden
            fill
            priority
            sizes='100vw'
            className='-z-10 object-contain object-center'
        />

        <div className='flex max-w-2xl flex-col items-center gap-3 md:gap-4'>
            <h1 className='text-balance text-3xl leading-tight text-title-color sm:text-4xl md:text-5xl mb-4'>
                Esta página no se encuentra disponible
            </h1>
            <p className='font-jakarta text-base text-title-color/80 sm:text-lg md:text-xl'>
                Disculpá las molestias ocasionadas.
            </p>
        </div>

        <AnimatedLink
            href={'/'}
            className='relative w-fit overflow-hidden rounded-4xl bg-title-color px-10 py-5 text-xs font-light uppercase tracking-[2px] text-white
            outline-offset-4 focus-visible:outline-2 focus-visible:outline-title-color
            before:absolute before:left-0 before:top-0 before:h-full before:w-full before:translate-y-full before:rounded-4xl before:bg-[#f5f5f53a] before:duration-500 before:ease-out hover:before:translate-y-0'>
            <span className='relative z-10'>volver al inicio</span>
        </AnimatedLink>
    </main>
  )
}
