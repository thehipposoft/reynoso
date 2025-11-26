'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface CircleCounterProps {
  target: number,
  duration: number,
  text?: string,
  label: string,
  color: string,
}

const CircleCounter: React.FC<CircleCounterProps> = ({
  target,
  duration,
  label,
  text,
  color,
}) => {
  const [count, setCount] = useState<number>(0)
  const circleRef = useRef<SVGCircleElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const radius = 50
    const circumference = 2 * Math.PI * radius

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${circumference}`
      circleRef.current.style.strokeDashoffset = `${circumference}`
    }

    const counterObj = { val: 0 }
    tlRef.current?.kill()

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => setCount(target),
    })

    tl.to(circleRef.current, { strokeDashoffset: 0, duration }, 0)

    tl.to(
      counterObj,
      {
        val: target,
        duration,
        ease: 'power1.out',
        onUpdate: () => {
          setCount(Math.round(counterObj.val))
        },
      },
      0
    )

    tlRef.current = tl

    return () => {
      tl.kill()
    }
  }, [target, duration])

  return (
    <div className="flex items-center">
      <svg className='max-w-28' width={120} height={100} viewBox="0 0 120 120">
        {/* círculo de fondo */}
        <circle
          cx={60}
          cy={60}
          r={50}
          stroke="#d1d5db"
          strokeWidth="8"
          fill="transparent"
        />
        {/* círculo animado */}
        <circle
          ref={circleRef}
          cx={60}
          cy={60}
          r={50}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          transform="rotate(-90 60 60)" // para que empiece arriba
        />
        {/* número dinámico dentro del círculo */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-current text-title-color"
          fontSize="18"
          fontWeight="bold"
        >
          +{count}{text}
        </text>
      </svg>
      <p className="text-lg font-light leading-5 font-title-color font-poppins md:w-min">{label}</p>
    </div>
  )
}

export default CircleCounter
