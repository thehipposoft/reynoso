'use client'
import React, { useEffect, useRef, useState } from 'react'
import CircleCounter from './CircleCounter'

const Counters: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect() // solo disparar una vez
          }
        })
      },
      { threshold: 0.3 } // ajustar según cuándo querés que se active
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="flex md:flex-row flex-col justify-around md:items-center ">
      {isVisible ? (
        <>
          <CircleCounter duration={4} color='#046658' target={215} label="Familias Felices" />
          <CircleCounter duration={3} color='#038C7F' target={33} label="Lotes Vendidos" />
          <CircleCounter duration={2} color='#60B9A6' target={45} label="Casas Entregadas" />
        </>
      ) : (
        // placeholders para preservar layout (opcional)
        <>
          <div style={{ width: 120, height: 120 }} />
          <div style={{ width: 120, height: 120 }} />
          <div style={{ width: 120, height: 120 }} />
        </>
      )}
    </div>
  )
}

export default Counters
