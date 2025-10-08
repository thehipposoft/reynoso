'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LightboxModal from "../LightBox";


type ImageItem = {
  url: string;
};

type SliderGalleryProps = {
  images: ImageItem[];
  autoplayInterval?: number; // ms, default 4500
  initialIndex?: number;
};

export default function SliderGallery({
  images,
  autoplayInterval = 4500,
  initialIndex = 0,
}: SliderGalleryProps) {
  const n = images.length;
  const [current, setCurrent] = useState<number>(initialIndex % Math.max(1, n));
  const slideRefs = useRef<any>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Helper to normalize offset to range (-n/2, n/2)
  const normalizedOffset = (i: number) => {
    let raw = i - current;
    if (raw > n / 2) raw -= n;
    if (raw < -n / 2) raw += n;
    return raw;
  };

  const goNext = () => setCurrent((c) => (c + 1) % n);
  const goPrev = () => setCurrent((c) => (c - 1 + n) % n);

  // Autoplay effect
  useEffect(() => {
    // clear existing
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (n <= 1) return;
    if (!isHovered && !lightboxOpen) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % n);
      }, autoplayInterval);
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, lightboxOpen, autoplayInterval, n]);

  // Animations when current changes (or on mount)
  useEffect(() => {
    // For each slide, compute target transform properties
    slideRefs.current.forEach((el:any, i:any) => {
      if (!el) return;
      const offset = normalizedOffset(i);
      let xPercent = 0;
      let scale = 1;
      let z = 20;
      let opacity = 1;
      let rotateY = 0;

      if (offset === 0) {
        xPercent = 0;
        scale = 1;
        z = 40;
        opacity = 1;
        rotateY = 0;
      } else if (offset === -1) {
        xPercent = -48;
        scale = 0.86;
        z = 30;
        opacity = 0.95;
        rotateY = 6;
      } else if (offset === 1) {
        xPercent = 48;
        scale = 0.86;
        z = 30;
        opacity = 0.95;
        rotateY = -6;
      } else {
        // offscreen (others)
        xPercent = offset < 0 ? -120 : 120;
        scale = 0.72;
        z = 10;
        opacity = 0;
        rotateY = 0;
      }

      gsap.to(el, {
        duration: 0.8,
        xPercent,
        scale,
        zIndex: z,
        autoAlpha: opacity,
        rotateY,
        ease: "power2.inOut",
      });
    });
  }, [current, n]);

  // Ensure refs array length
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, images.length);
  }, [images.length]);

  // Pause autoplay if user interacts with arrows
  const manualNav = (dir: "next" | "prev") => {
    if (dir === "next") goNext();
    else goPrev();

    // briefly pause autoplay
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsHovered(true);
    // resume after 2 seconds
    window.setTimeout(() => setIsHovered(false), 2000);
  };

  if (!images || images.length === 0) {
    return <div className="h-64 flex items-center justify-center">No images</div>;
  }

  return (
    <div className="w-[1350px] relative flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-[800px] h-96 md:h-[520px] mx-auto overflow-visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides (render all but visually position with GSAP) */}
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute left-1/2 top-1/2 w-[60%] md:w-[46%] lg:w-[38%] transform  -translate-y-1/2 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            style={{
              willChange: "transform, opacity",
              // set initial small styles for SSR->hydration
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 40 : 10,
            }}
            onClick={() => {
              setLightboxIndex(i);
              setLightboxOpen(true);
            }}
          >
            <img
              src={src.url}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* optional caption or overlay */}
            {/* <div className="absolute bottom-4 left-4 text-white">Slide {i+1}</div> */}
          </div>
        ))}

        {/* Prev / Next buttons */}
        <button
          aria-label="Anterior"
          onClick={() => manualNav("prev")}
          className="absolute left-2 top-1/2 z-50 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => manualNav("next")}
          className="absolute right-2 top-1/2 z-50 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
        >
          ›
        </button>

        {/* Dots / indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <LightboxModal
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          setIndex={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
}
