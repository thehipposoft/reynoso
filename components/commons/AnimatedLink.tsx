'use client'

import { useRouter, usePathname } from 'next/navigation'
import { CSSProperties, ReactNode } from 'react'
import { playTransitionIn } from './Transitions'
import gsap from 'gsap'

type Props = {
  href: string
  children: ReactNode
  className?: string
  rel?: string,
  target?: string,
  style?: CSSProperties
}

export default function AnimatedLink({ href, children, className, rel, target, style }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Si el href tiene hash (ej: /#contacto)
    const [targetPath, hash] = href.split('#')

    // Caso 1: misma ruta (solo cambia el hash)
    if (targetPath === pathname) {
      await playTransitionIn()

      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Ejecutar la animación de salida (simular cambio)
      const layer = document.querySelector('.transition-layer') as HTMLElement
      if (layer) {
        gsap.to(layer, {
          y: '-100%',
          opacity: 0,
          duration: 0.8,
          ease: 'power4.inOut',
        })
      }

      return
    }

    // Caso 2: cambia de ruta completamente
    await playTransitionIn()
    router.push(href)
  }

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      rel={rel}
      target={target}
      style={style}
    >
      {children}
    </a>
  )
}
