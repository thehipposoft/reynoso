'use client'
import Image from "next/image";
import { useState, useRef } from "react";
// Asumiendo que EQUIPO y su estructura ya están definidos y exportados en './constants'
const DATA = [
    {
        imagen: '/assets/images/oportunidades/oportunidades-1.webp',
        alt: 'Familia caminando',
        titulo: 'Familia',
        texto: 'Acompañamos tu decisión más importante',
        descripcion: 'Estamos comprometidos en que la experiencia de acceder a tu hogar sea simple, transparente y llena de confianza, para que disfrutes el proceso de crear el espacio donde crecerá tu familia.',
    },
    {
        imagen: '/assets/images/oportunidades/oportunidades-3.webp',
        alt: 'Reunion Ejecutiva',
        titulo: 'Inversores',
        texto: 'Invertí con tranquilidad',
        descripcion: 'Cada desarrollo que ofrecemos está pensado para generar valor en el presente y confianza a futuro, combinando ubicación estratégica, diseño y seguridad en la inversión',
    },
    {
        imagen: '/assets/images/oportunidades/oportunidades-2.webp',
        alt: 'Pareja recibiendo departamento',
        titulo: 'Starters',
        texto: 'Te ayudamos a dar el primer paso',
        descripcion: 'Invertir por primera vez no tiene que ser complicado: te ofrecemos el acompañamiento y la experiencia necesarios para transformar esa decisión en una oportunidad real de crecimiento',
    },
]
type DataSlide = {
    imagen: string,
    alt: string,
    titulo: string,
    texto: string,
    descripcion: string
}


export default function OportunidadesGridMobile() {

    const totalSlides = DATA.length;
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    // Usamos totalSlides aquí
    if (current < totalSlides - 1) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    // umbral para considerar swipe
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // swipe left → siguiente
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // swipe right → anterior
      prevSlide();
    }

    // reset refs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="md:hidden w-[90vw] overflow-hidden my-8 mx-auto relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 90}vw)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {DATA.map((item: DataSlide, index: number) => (
            <div className="flex flex-col" key={index}>
                <div
                    className="min-w-[90vw] h-[430px] bg-black/30 relative flex items-end justify-end pb-16 pr-8"
                >
                    <Image src={item.imagen} alt={item.alt} fill className="object-cover" />
                    <div className='absolute h-full w-full left-0 top-0 bg-overlay-bg opacity-45 z-10' />
                    <div className="flex flex-col items-end relative z-20">
                    <h4 className="font-bold text-5xl text-white text-right">
                        {item.titulo}
                    </h4>
                    <span className="uppercase tracking-[2px] font-light text-right text-sm text-white">
                        {item.texto}
                    </span>
                    </div>
                </div>
                <div className="flex justify-center items-center py-4 px-4 text-lg leading-5">
                    <p className="font-jakarta">{item.descripcion}</p>
                </div>
            </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className={`previous-arrow bg-primary-green text-white w-14 h-14 rounded-full  flex items-center justify-center shadow ${
            current === 0 ? "invisible" : ""
          }`}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className={`next-arrow w-14 h-14 rounded-full bg-primary-green text-white flex items-center justify-center shadow ${
            current === totalSlides - 1 ? "invisible" : ""
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}