'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function Transitions() {
  const pathname = usePathname()
  const layerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return

    // Transición de salida (al cambiar de ruta)
    gsap.to(layer, {
      y: '-100%',
      opacity: 0,
      duration: 0.8,
      ease: 'power4.inOut',
    })
  }, [pathname])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        ref={layerRef}
        className="absolute inset-0 bg-title-color transition-layer"
      />
    </div>
  )
}

// Transición de entrada (antes del cambio de página)
export const playTransitionIn = (): Promise<void> => {
  return new Promise((resolve) => {
    const layer = document.querySelector('.transition-layer') as HTMLElement
    if (!layer) {
      resolve()
      return
    }

    const tl = gsap.timeline({ onComplete: resolve })

    tl.set(layer, { y: '100%', opacity: 1 }) // empieza desde abajo, visible
    tl.to(layer, {
      y: '0%',
      duration: 0.8,
      ease: 'power4.inOut',
    })
  })
}
