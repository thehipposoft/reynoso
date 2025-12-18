'use client'
import { useState, useRef } from "react";
import { Empleados, Empleado } from "@/types";

export default function EquipoCarrousel({empleados}:Empleados) {
  const totalSlides = empleados.length;
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
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
    <div className="lg:hidden w-[90vw] overflow-hidden my-8 mx-auto relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 90}vw)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {empleados.map((miembro: Empleado, index: number) => (
          <div
            key={index}
            className="min-w-[90vw] h-[430px] md:h-[525px] bg-black/30 relative flex items-end justify-end pb-16 pr-8"
            style={{ backgroundImage: `url(${miembro.foto})`, backgroundSize: 'cover' }}
          >
            <div className="flex flex-col items-end bg-black/20 backdrop-blur-sm rounded-lg p-2">
              <h4 className="font-bold text-2xl text-white max-w-60 text-end leading-7">
                {miembro.nombre}
              </h4>
              <span className="uppercase tracking-[4px] font-light text-sm text-white">
                {miembro.puesto}
              </span>
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

function SocialIcons() {
  return (
    <div className="flex gap-2 pt-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
        <svg
          className="scale-[175%]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#090B19"
            d="M5.12.96A4.163 4.163 0 0 0 .96 5.12v5.76a4.163 4.163 0 0 0 4.16 4.16h5.76a4.163 4.163 0 0 0 4.16-4.16V5.12A4.163 4.163 0 0 0 10.88.96H5.12Zm6.72 2.56a.641.641 0 0 1 0 1.28.641.641 0 0 1 0-1.28ZM8 4.48A3.522 3.522 0 0 1 11.52 8 3.522 3.522 0 0 1 8 11.52 3.522 3.522 0 0 1 4.48 8 3.522 3.522 0 0 1 8 4.48Zm0 .64A2.884 2.884 0 0 0 5.12 8 2.884 2.884 0 0 0 8 10.88 2.884 2.884 0 0 0 10.88 8 2.884 2.884 0 0 0 8 5.12Z"
          />
        </svg>
      </div>
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
        <svg
          className="scale-[175%]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#090B19"
            d="M10.24 3.52h1.6a.32.32 0 0 0 .32-.32V1.044a.32.32 0 0 0-.296-.319A37.075 37.075 0 0 0 9.645.64C7.68.64 6.4 1.818 6.4 3.958V6.08H4.16a.32.32 0 0 0-.32.32v2.24c0 .176.144.32.32.32H6.4v6.08c0 .176.144.32.32.32h2.24a.32.32 0 0 0 .32-.32V8.96h2.311a.32.32 0 0 0 .318-.285l.249-2.24a.32.32 0 0 0-.318-.355H9.28v-1.6c0-.53.43-.96.96-.96Z"
          />
        </svg>
      </div>
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
        <svg
          className="scale-[175%]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#090B19"
            d="M2.56.962C1.45.962.642 1.63.642 2.544c0 .918.827 1.612 1.918 1.612 1.11 0 1.916-.677 1.916-1.631C4.426 1.606 3.635.962 2.56.962ZM.96 4.8a.32.32 0 0 0-.32.32v9.28c0 .176.144.32.32.32h3.2a.32.32 0 0 0 .32-.32V5.12a.32.32 0 0 0-.32-.32H.96Zm4.8 0a.32.32 0 0 0-.32.32v9.28c0 .176.144.32.32.32h2.88a.32.32 0 0 0 .32-.32V9.44c0-.759.582-1.376 1.325-1.434C10.324 8 10.36 8 10.4 8a1.435 1.435 0 0 1 1.44 1.44v4.96c0 .176.144.32.32.32h2.88a.32.32 0 0 0 .32-.32V8.96c0-2.07-1.111-4.16-3.588-4.16a4.329 4.329 0 0 0-2.492.796V5.12a.32.32 0 0 0-.32-.32h-3.2Z"
          />
        </svg>
      </div>
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
        <svg
          className="scale-[175%]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#090B19"
            d="M14.367 4.64c-.127-.704-.735-1.216-1.44-1.376-1.054-.224-3.007-.384-5.12-.384-2.11 0-4.095.16-5.15.384-.705.16-1.313.64-1.44 1.376C1.086 5.44.96 6.56.96 8s.127 2.56.287 3.36c.13.704.737 1.216 1.44 1.376 1.12.224 3.04.384 5.153.384 2.112 0 4.033-.16 5.152-.384.704-.16 1.312-.64 1.44-1.376.128-.8.288-1.953.32-3.36a22.392 22.392 0 0 0-.385-3.36Zm-8.287 5.6V5.76L9.984 8 6.08 10.24Z"
          />
        </svg>
      </div>
    </div>
  );
}
