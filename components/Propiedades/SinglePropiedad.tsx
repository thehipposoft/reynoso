import Image from "next/image";
import Link from "next/link";
import type { OdooPropiedad } from "@/lib/odoo/types";
import { formatPrecio, formatLabel, operacionDesdeEstado, parsePositiveNumber } from "@/lib/propiedades/format";
import { esInversionEnPozo } from "@/lib/propiedades/filtros";
import { TELEFONO_CONTACTO_GENERAL } from "@/lib/propiedades/agentes";
import { GaleriaPropiedad } from "./GaleriaPropiedad";

interface Props {
  propiedad: OdooPropiedad;
}

interface StatProps { label: string; value: string }
const Stat = ({ label, value }: StatProps) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-surface-container-low px-5 py-4">
    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{label}</span>
    <span className="text-lg font-bold text-on-surface">{value}</span>
  </div>
);

export const SinglePropiedad = ({ propiedad }: Props) => {
  const todasLasImagenes = [
    propiedad.fotoPortada,
    ...propiedad.fotos.map((f) => f.url),
  ].filter((url): url is string => Boolean(url));

  const operacion = operacionDesdeEstado(propiedad.estado);
  const esPozo = esInversionEnPozo(propiedad.tipoPropiedad);
  const precioFormateado = esPozo ? null : formatPrecio(propiedad.precio, propiedad.moneda);

  const urlPropiedad = `https://reynosobienesraices.com.ar/propiedades/${propiedad.slug}`;
  const mensajeWhatsapp =
    `Hola estoy interesado en la siguiente propiedad:\n\n` +
    `Nombre: ${propiedad.nombre}\n` +
    `Link propiedad: ${urlPropiedad}\n` +
    `Agente: ${propiedad.agente?.nombre ?? ""}`;

  const stats: StatProps[] = [
    propiedad.ambientes && { label: "Ambientes", value: propiedad.ambientes },
    propiedad.dormitorios && { label: "Dormitorios", value: propiedad.dormitorios },
    parsePositiveNumber(propiedad.banos) && { label: "Baños", value: propiedad.banos },
    propiedad.superficieTotal && { label: "Superficie", value: `${propiedad.superficieTotal} m²` },
    propiedad.superficieCubierta && { label: "Sup. cubierta", value: `${propiedad.superficieCubierta} m²` },
  ].filter(Boolean) as StatProps[];

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">

      {/* Volver */}
      <Link
        href="/propiedades/busqueda"
        className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary-green"
      >
        ← Volver a propiedades
      </Link>

      {/* 1. Tipo de propiedad + Operación */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {propiedad.tipoPropiedad && (
          <span className="rounded-full bg-primary-green/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-verde-oscuro">
            {formatLabel(propiedad.tipoPropiedad)}
          </span>
        )}
        {operacion && (
          <span className="rounded-full bg-surface-container px-4 py-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            {operacion}
          </span>
        )}
      </div>

      {/* 2. Título + Precio */}
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
          {propiedad.nombre}
        </h1>
        {precioFormateado && (
          <p className="shrink-0 font-headline text-3xl font-extrabold text-verde-oscuro">
            {precioFormateado}
          </p>
        )}
      </div>

      {/* 3. Galería */}
      <GaleriaPropiedad imagenes={todasLasImagenes} titulo={propiedad.nombre} />

      {/* 4. Stats */}
      {stats.length > 0 && (
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      )}

      {/* 5. Descripción — texto plano en Odoo, no HTML como en WordPress */}
      {propiedad.descripcion && (
        <p className="whitespace-pre-line text-lg leading-relaxed text-on-surface-variant">
          {propiedad.descripcion}
        </p>
      )}

      {/* 6. Dirección */}
      {propiedad.direccion && (
        <div className="mt-10 flex items-start gap-3 rounded-2xl bg-surface-container-low p-5">
          <span className="mt-0.5 text-verde-oscuro">📍</span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Dirección</p>
            <p className="font-medium text-on-surface">
              {propiedad.direccion}
              {propiedad.zona ? `, ${propiedad.zona}` : ""}
            </p>
          </div>
        </div>
      )}

      {/* 7. Agente */}
      <div className="mt-6 w-fit">
        {propiedad.agente?.fotoUrl && (
          <div className="flex items-center gap-4">
            <div className="relative h-28 w-28 shrink-0">
              <Image
                src={propiedad.agente.fotoUrl}
                alt={propiedad.agente.nombre}
                fill
                sizes="80px"
                className="rounded-full object-cover object-top shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] font-bold uppercase leading-0 tracking-widest text-on-surface-variant">Agente</p>
              <p className="text-lg font-bold text-on-surface">{propiedad.agente.nombre}</p>
              <Link
                href={`https://wa.me/${TELEFONO_CONTACTO_GENERAL.replace(/\D/g, "")}?text=${encodeURIComponent(mensajeWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 flex w-fit items-center gap-2 rounded-full border border-verde-oscuro bg-surface-container-lowest px-5 py-2 text-sm font-bold text-on-surface shadow-md transition-all duration-300 hover:bg-verde-oscuro hover:text-white ${propiedad.agente?.fotoUrl ? "-left-6 mt-2" : ""}`}
              >
                <Image src="/assets/images/whatsapp.svg" alt="" width={32} height={32} className="h-8 w-8" />
                Contactar
              </Link>
            </div>
          </div>
        )}
      </div>

    </article>
  );
};