import type { Metadata } from "next";
import Link from "next/link";
import { getProperties } from "@/lib/odoo/properties";
import { getCategoriasPropiedad } from "@/lib/odoo/categories";
import { Hero } from "@/components/Propiedades/Hero";
import { PropertyGrid } from "@/components/Propiedades/PropertyGrid";

export const metadata: Metadata = {
  title: "Propiedades en venta y alquiler | Reynoso Bienes Raíces",
  description:
    "Encontrá tu propiedad ideal en el norte argentino. Terrenos, casas y departamentos en venta y alquiler.",
  alternates: { canonical: "/propiedades" },
};

// Destacadas: 3 departamentos y 3 casas, intercalados (depto, casa, depto, ...).
const DESTACADAS_POR_TIPO = 3;

const BOTON_CLASSNAME =
  "flex items-center justify-center gap-2 cursor-pointer rounded-full border border-verde-oscuro bg-verde-oscuro px-8 py-4 font-poppins text-sm font-semibold uppercase text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:text-verde-oscuro hover:shadow-2xl active:scale-95";

export default async function PropiedadesPage() {
  const [departamentos, casas, categorias] = await Promise.all([
    getProperties({ categoriaSlug: "departamento" }),
    getProperties({ categoriaSlug: "casa" }),
    getCategoriasPropiedad(),
  ]);

  const destacadas = Array.from({ length: DESTACADAS_POR_TIPO }, (_, i) => [departamentos[i], casas[i]])
    .flat()
    .filter((propiedad) => propiedad !== undefined);

  return (
    <main>
      <Hero categorias={categorias} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-5xl">
          <h2 className="mb-4 font-headline text-6xl font-extrabold tracking-tight text-title-color">
            Propiedades destacadas
          </h2>
          <p className="text-lg text-on-surface-variant">
            Una selección de propiedades que creemos que pueden interesarte
          </p>
        </div>

        <PropertyGrid propiedades={destacadas} />

        <div className="mt-12 flex">
          <Link href="/propiedades/busqueda" className={BOTON_CLASSNAME}>
            Ver todas
          </Link>
        </div>
      </section>
    </main>
  );
}
