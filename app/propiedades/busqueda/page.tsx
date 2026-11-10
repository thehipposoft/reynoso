import type { Metadata } from "next";
import { getProperties, type PropertyFilters } from "@/lib/odoo/properties";
import { getCategoriasPropiedad } from "@/lib/odoo/categories";
import type { TipoOperacion } from "@/lib/odoo/models";
import { CATEGORIA_EN_POZO } from "@/lib/propiedades/filtros";
import { PropertyCard } from "@/components/Propiedades/PropertyCard";
import { FiltrosPropiedades } from "@/components/Propiedades/FiltrosPropiedades";

export const metadata: Metadata = {
  title: "Buscar propiedades | Reynoso Bienes Raíces",
  description:
    "Encontrá tu propiedad ideal en el norte argentino. Terrenos, casas y departamentos en venta y alquiler.",
  alternates: { canonical: "/propiedades/busqueda" },
};

function parseOperacion(value?: string): TipoOperacion | undefined {
  return value === "venta" || value === "alquiler" ? value : undefined;
}

function parsePrecio(value?: string): number | undefined {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : undefined;
}

function tituloPropiedades(
  cantidad: number,
  operacion: TipoOperacion | undefined,
  esPozo: boolean
): string {
  if (esPozo) {
    return `Tenemos ${cantidad} ${cantidad === 1 ? "oportunidad" : "oportunidades"} de inversión en pozo`;
  }
  if (operacion === "venta") {
    return `Tenemos ${cantidad} ${cantidad === 1 ? "propiedad" : "propiedades"} en venta`;
  }
  if (operacion === "alquiler") {
    return `Tenemos ${cantidad} ${cantidad === 1 ? "propiedad" : "propiedades"} en alquiler`;
  }
  return `Tenemos ${cantidad} ${cantidad === 1 ? "propiedad disponible" : "propiedades disponibles"}`;
}

interface SearchParams {
  operacion?: string;
  categoria?: string;
  q?: string;
  zona?: string;
  moneda?: string;
  precioMin?: string;
  precioMax?: string;
}

export default async function BusquedaPropiedadesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const operacion = parseOperacion(params.operacion);
  const esPozo = params.categoria === CATEGORIA_EN_POZO;

  const filters: PropertyFilters = {
    operacion,
    categoriaSlug: params.categoria || undefined,
    busqueda: params.q || undefined,
    zonaGeografica: params.zona || undefined,
    moneda: params.moneda || undefined,
    precioMin: parsePrecio(params.precioMin),
    precioMax: parsePrecio(params.precioMax),
  };

  const [properties, categorias] = await Promise.all([
    getProperties(filters),
    getCategoriasPropiedad(),
  ]);

  const titulo = tituloPropiedades(properties.length, operacion, esPozo);

  return (
    <main>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-28">
        <FiltrosPropiedades categorias={categorias} />

        <h1 className="mb-8 text-xl font-semibold ">{titulo}</h1>

        {properties.length === 0 ? (
          <p className="text-gray-500">No hay propiedades disponibles con estos filtros.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} propiedad={property} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}