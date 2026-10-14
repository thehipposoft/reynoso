'use client';

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const UMBRAL_INICIO = 8; // px antes de decidir si el gesto es horizontal o vertical
const UMBRAL_GIRO = 60; // px de arrastre para que la tarjeta termine de girar
const GRADOS_POR_PX = 0.6;

type FlipCardContextValue = { toggleFlip: () => void; flipped: boolean };

const FlipCardContext = createContext<FlipCardContextValue | null>(null);

export const useFlipCard = () => {
  const ctx = useContext(FlipCardContext);
  if (!ctx) throw new Error('useFlipCard debe usarse dentro de <FlipCard>');
  return ctx;
};

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  className?: string;
};

type Arrastre = {
  pointerId: number;
  startX: number;
  startY: number;
  base: number;
  dx: number;
  activo: boolean;
};

const FlipCard = ({ front, back, className = '' }: FlipCardProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rotacion = useRef(0);
  const arrastre = useRef<Arrastre | null>(null);
  const suprimirClick = useRef(false);
  const [flipped, setFlipped] = useState(false);

  const duracion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.7;

  const girarA = useCallback((destino: number) => {
    rotacion.current = destino;
    setFlipped(Math.abs(Math.round(destino / 180)) % 2 === 1);
    gsap.to(innerRef.current, { rotationY: destino, duration: duracion(), ease: 'power3.out', overwrite: true });
  }, []);

  const toggleFlip = useCallback(() => girarA(rotacion.current + 180), [girarA]);

  useEffect(() => {
    gsap.set(innerRef.current, { rotationY: 0, transformPerspective: 1200 });
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    arrastre.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      base: rotacion.current,
      dx: 0,
      activo: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const a = arrastre.current;
    if (!a || a.pointerId !== e.pointerId) return;

    const dx = e.clientX - a.startX;
    const dy = e.clientY - a.startY;

    if (!a.activo) {
      if (Math.abs(dx) > UMBRAL_INICIO && Math.abs(dx) > Math.abs(dy)) {
        a.activo = true;
        e.currentTarget.setPointerCapture(e.pointerId);
      } else if (Math.abs(dy) > UMBRAL_INICIO) {
        // Gesto vertical: lo dejamos para el scroll de la página.
        arrastre.current = null;
        return;
      } else {
        return;
      }
    }

    a.dx = dx;
    gsap.set(innerRef.current, { rotationY: a.base + dx * GRADOS_POR_PX });
  };

  const terminarArrastre = (e: React.PointerEvent<HTMLDivElement>, cancelado: boolean) => {
    const a = arrastre.current;
    if (!a || a.pointerId !== e.pointerId) return;
    arrastre.current = null;
    if (!a.activo) return;

    suprimirClick.current = true;
    // El click (si lo hay) llega justo después del pointerup; si no llega, limpiamos igual.
    setTimeout(() => (suprimirClick.current = false), 0);

    if (!cancelado && Math.abs(a.dx) > UMBRAL_GIRO) {
      girarA(a.base + (a.dx > 0 ? 180 : -180));
    } else {
      girarA(a.base);
    }
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (suprimirClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suprimirClick.current = false;
    }
  };

  return (
    <FlipCardContext.Provider value={{ toggleFlip, flipped }}>
      <div
        ref={rootRef}
        className={`touch-pan-y select-none [&_*]:touch-pan-y ${className}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => terminarArrastre(e, false)}
        onPointerCancel={(e) => terminarArrastre(e, true)}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        <div ref={innerRef} className="grid transform-3d">
          <div className="[grid-area:1/1] backface-hidden" inert={flipped} aria-hidden={flipped}>
            {front}
          </div>
          <div className="[grid-area:1/1] backface-hidden rotate-y-180" inert={!flipped} aria-hidden={!flipped}>
            {back}
          </div>
        </div>
      </div>
    </FlipCardContext.Provider>
  );
};

export default FlipCard;
