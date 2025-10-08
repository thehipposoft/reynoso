// components/LightboxModal.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

type ImageType = {
    url: string,
    alt: string
}

type LightboxProps = {
  images: ImageType[];
  currentIndex: number;
  onClose: () => void;
  setIndex: (i: number) => void;
};

export default function LightboxModal({ images, currentIndex, onClose, setIndex }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [displayedIndex, setDisplayedIndex] = useState(currentIndex);
  const [loaded, setLoaded] = useState(false);

  // fade-in modal on mount
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.35, ease: "power2.out" }
    ).fromTo(
      imgRef.current,
      { scale: 0.98 },
      { scale: 1, duration: 0.45, ease: "power2.out" },
      "<"
    );

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      tl.kill();
    };
  }, []);

  // cross-fade cuando cambia currentIndex
  useEffect(() => {
    if (currentIndex === displayedIndex) return;
    const imgEl = imgRef.current;
    if (!imgEl) return;

    // fade out
    gsap.to(imgEl, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setLoaded(false);
        setDisplayedIndex(currentIndex);
      },
    });
  }, [currentIndex]);

  // fade-in cuando la nueva imagen termina de cargar
  useEffect(() => {
    if (!loaded || !imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [loaded]);

  const handlePrev = () => setIndex((currentIndex - 1 + images.length) % images.length);
  const handleNext = () => setIndex((currentIndex + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="relative max-w-[95vw] max-h-[95vh] w-full flex items-center justify-center">
        {/* Close */}
        <button
          className="absolute -top-16 right-4 z-60 text-white hover:bg-white/10 duration-300 bg-white/25 cursor-pointer rounded-full w-12 h-12 "
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Prev / Next */}
        <button
          className="absolute bottom-12 md:bottom-1/2 pb-1 left-2 md:left-6 z-60 text-white text-2xl w-10 h-10 hover:bg-white/15 duration-300 cursor-pointer bg-white/35 rounded-full"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="absolute bottom-12 md:bottom-1/2 pb-1 right-2 md:right-6 z-60 text-white text-2xl w-10 h-10 hover:bg-white/15 duration-300 cursor-pointer bg-white/35 rounded-full"
          onClick={handleNext}
          aria-label="Siguiente"
        >
          ›
        </button>
        <div className="relative w-[85vw] h-[70vh]">
          <Image
            fill
            ref={imgRef}
            key={displayedIndex} // fuerza re-render controlado
            src={images[displayedIndex].url}
            alt={images[displayedIndex].alt}
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            draggable={false}
            onLoad={() => setLoaded(true)}
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
