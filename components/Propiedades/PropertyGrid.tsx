"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { OdooPropiedad } from "@/lib/odoo/types";
import { PropertyCard } from "./PropertyCard";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  propiedades: OdooPropiedad[];
}

export const PropertyGrid = ({ propiedades }: Props) => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (propiedades.length === 0) return;
      gsap.fromTo(
        ".property-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: scope.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope, dependencies: [propiedades.length] }
  );

  if (propiedades.length === 0) {
    return (
      <p className="py-24 text-center text-on-surface-variant">
        No hay propiedades disponibles.
      </p>
    );
  }

  return (
    <div
      ref={scope}
      className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-12 pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3"
    >
      {propiedades.map((propiedad) => (
        <div key={propiedad.id} className="property-card w-[80vw] shrink-0 snap-start sm:w-[60vw] md:w-auto">
          <PropertyCard propiedad={propiedad} />
        </div>
      ))}
    </div>
  );
};
