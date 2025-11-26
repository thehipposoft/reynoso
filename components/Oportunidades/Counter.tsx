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
          <CircleCounter duration={5} color='#3A3938' target={220} text='mil' label="M2 Desarrollados y entregados" />
          <CircleCounter duration={4} color='#3A3938CC' target={1600} label="Lotes" />
          <CircleCounter duration={3} color='#3a393899' target={8} label="Desarrollos Actuales" />
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
