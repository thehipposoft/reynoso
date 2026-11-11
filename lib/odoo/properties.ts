import 'server-only';
import { unstable_cache } from 'next/cache';
import { odooExecute } from './client';
import {
  ODOO_MODELS,
  ODOO_FIELDS,
  estadosDisponiblesParaOperacion,
  ESTADO_PUBLICADO,
  FILTRAR_SOLO_PUBLICADAS,
  type TipoOperacion,
} from './models';
import slugify from '@/lib/slugify';
import { getAgentePorOdooId } from '@/lib/propiedades/agentes';
import { WATERMARK_QUERY } from '@/lib/watermark-version';
import type { OdooPropiedad, OdooPropiedadFoto } from '@/lib/odoo/types';

const PROPERTY_FIELDS = [
  'id',
  'x_name',
  ODOO_FIELDS.ESTADO,
  ODOO_FIELDS.PRECIO,
  ODOO_FIELDS.MONEDA,
  ODOO_FIELDS.TIPO_PROPIEDAD,
  ODOO_FIELDS.BARRIO,
  ODOO_FIELDS.LOCALIDAD,
  ODOO_FIELDS.DOMICILIO,
  ODOO_FIELDS.AMBIENTES,
  ODOO_FIELDS.DORMITORIOS,
  ODOO_FIELDS.BANOS,
  ODOO_FIELDS.BANOS_ALT,
  ODOO_FIELDS.SUPERFICIE_CUBIERTA,
  ODOO_FIELDS.SUPERFICIE_TOTAL,
  ODOO_FIELDS.DESCRIPCION,
  ODOO_FIELDS.FOTO_PORTADA,
  ODOO_FIELDS.GALERIA,
  ODOO_FIELDS.RESPONSABLE,
  ODOO_FIELDS.ZONA,
];

// "Estado de Publicación" en blanco (campo sin cargar todavía en el catálogo existente)
// cuenta como publicable, igual que "Publicado" explícito. Solo se ocultan los estados
// de trabajo intermedio (Borrador, En Proceso, Listo para revisión).
function domainPublicadaOEnBlanco(): unknown[] {
  return [
    '|',
    [ODOO_FIELDS.ESTADO_PUBLICACION, '=', ESTADO_PUBLICADO],
    [ODOO_FIELDS.ESTADO_PUBLICACION, '=', false],
  ];
}

export interface PropertyFilters {
  operacion?: TipoOperacion;
  categoriaSlug?: string;
  busqueda?: string;
  zonaGeografica?: string;
  moneda?: string;
  precioMin?: number;
  precioMax?: number;
}

function esCero(v: unknown): boolean {
  return v === 0 || v === '0';
}

// Cuando los dos campos de Odoo tienen datos (p. ej. duplicados por Studio) y uno
// vale 0, preferimos el que tiene un valor real: un 0 suele ser "nunca se cargó"
// más que "la cantidad real es cero" cuando el otro campo sí tiene un número.
function firstNonEmpty(...values: unknown[]): string | null {
  const noVacios = values.filter((v) => v !== false && v !== null && v !== undefined && v !== '');
  if (noVacios.length === 0) return null;
  const noCero = noVacios.find((v) => !esCero(v));
  return String(noCero ?? noVacios[0]);
}

function mapMany2One(value: unknown): string | null {
  return Array.isArray(value) ? (value[1] as string) : null;
}

function buildSlug(nombre: string, id: number): string {
  return `${slugify(nombre)}-${id}`;
}

export function idFromSlug(slug: string): number | null {
  const match = slug.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

type FotoConOrden = OdooPropiedadFoto & { orden: number };

// Un solo request para todas las líneas: evita cientos de llamadas en paralelo
// que Odoo corta por rate limit (responde HTML y rompe el parser XML-RPC).
async function fetchLineasGaleria(lineIds: number[]): Promise<Map<number, FotoConOrden>> {
  if (lineIds.length === 0) return new Map();

  const lineas = await odooExecute<any[]>(
    ODOO_MODELS.GALERIA_LINE,
    'read',
    [lineIds],
    { fields: ['id', 'x_name', ODOO_FIELDS.GALERIA_SEQUENCE], context: { bin_size: true } }
  );

  return new Map(
    lineas.map((linea) => [
      linea.id as number,
      {
        id: linea.id,
        url: `/api/property-image/${linea.id}${WATERMARK_QUERY}`,
        descripcion: linea.x_name || null,
        orden: linea[ODOO_FIELDS.GALERIA_SEQUENCE],
      },
    ])
  );
}

function fotosDePropiedad(
  lineIds: number[],
  lineas: Map<number, FotoConOrden>
): OdooPropiedadFoto[] {
  return lineIds
    .map((id) => lineas.get(id))
    .filter((foto): foto is FotoConOrden => foto !== undefined)
    .sort((a, b) => a.orden - b.orden)
    .map(({ id, url, descripcion }) => ({ id, url, descripcion }));
}

async function fetchFotos(lineIds: number[]): Promise<OdooPropiedadFoto[]> {
  return fotosDePropiedad(lineIds, await fetchLineasGaleria(lineIds));
}

function mapMany2OneId(value: unknown): number | null {
  return Array.isArray(value) ? (value[0] as number) : null;
}

function mapPropiedad(raw: any, fotos: OdooPropiedadFoto[]): OdooPropiedad {
  const responsableId = mapMany2OneId(raw[ODOO_FIELDS.RESPONSABLE]);

  return {
    id: raw.id,
    slug: buildSlug(raw.x_name, raw.id),
    nombre: raw.x_name,
    estado: raw[ODOO_FIELDS.ESTADO] || null,
    precio: raw[ODOO_FIELDS.PRECIO] ?? null,
    moneda: raw[ODOO_FIELDS.MONEDA] || null,
    tipoPropiedad: mapMany2One(raw[ODOO_FIELDS.TIPO_PROPIEDAD]),
    zona: firstNonEmpty(raw[ODOO_FIELDS.BARRIO], raw[ODOO_FIELDS.LOCALIDAD]),
    zonaGeografica: raw[ODOO_FIELDS.ZONA] || null,
    direccion: raw[ODOO_FIELDS.DOMICILIO] || null,
    ambientes: raw[ODOO_FIELDS.AMBIENTES] || null,
    dormitorios: raw[ODOO_FIELDS.DORMITORIOS] || null,
    banos: firstNonEmpty(raw[ODOO_FIELDS.BANOS], raw[ODOO_FIELDS.BANOS_ALT]),
    superficieCubierta: raw[ODOO_FIELDS.SUPERFICIE_CUBIERTA] || null,
    superficieTotal: raw[ODOO_FIELDS.SUPERFICIE_TOTAL] || null,
    descripcion: raw[ODOO_FIELDS.DESCRIPCION] || null,
    fotoPortada: raw[ODOO_FIELDS.FOTO_PORTADA] ? `/api/property-cover/${raw.id}${WATERMARK_QUERY}` : null,
    fotos,
    responsableNombre: mapMany2One(raw[ODOO_FIELDS.RESPONSABLE]),
    agente: responsableId !== null ? getAgentePorOdooId(responsableId) : null,
  };
}

async function fetchProperties(filters: PropertyFilters = {}): Promise<OdooPropiedad[]> {
  const { operacion, categoriaSlug, busqueda, zonaGeografica, moneda, precioMin, precioMax } = filters;
  const estados = estadosDisponiblesParaOperacion(operacion);

  // Estado, nombre, zona, moneda y precio se filtran directo en Odoo (más eficiente).
  // Categoría se filtra después en JS — ver nota al pie de la función.
  const domain: unknown[] = [[ODOO_FIELDS.ESTADO, 'in', estados]];

  if (FILTRAR_SOLO_PUBLICADAS) {
    domain.push(...domainPublicadaOEnBlanco());
  }

  if (busqueda?.trim()) {
    domain.push(['x_name', 'ilike', busqueda.trim()]);
  }
  if (zonaGeografica) {
    domain.push([ODOO_FIELDS.ZONA, '=', zonaGeografica]);
  }
  if (moneda) {
    domain.push([ODOO_FIELDS.MONEDA, '=', moneda]);
  }
  if (precioMin !== undefined) {
    domain.push([ODOO_FIELDS.PRECIO, '>=', precioMin]);
  }
  if (precioMax !== undefined) {
    domain.push([ODOO_FIELDS.PRECIO, '<=', precioMax]);
  }

  const rawList = await odooExecute<any[]>(
    ODOO_MODELS.PROPIEDAD,
    'search_read',
    [domain, PROPERTY_FIELDS],
    { context: { bin_size: true } }
  );

  const lineIdsDe = (raw: Record<string, unknown>): number[] =>
    (raw[ODOO_FIELDS.GALERIA] as number[] | false) || [];
  const lineas = await fetchLineasGaleria(rawList.flatMap(lineIdsDe));

  const propiedades = rawList.map((raw) =>
    mapPropiedad(raw, fotosDePropiedad(lineIdsDe(raw), lineas))
  );

  // Categoría es un many2one — filtramos por su label en JS en vez de
  // resolver el id en Odoo, para no sumar otro roundtrip. Con el volumen
  // actual (~200 propiedades) el costo es despreciable.
  if (!categoriaSlug) return propiedades;

  return propiedades.filter(
    (p) => p.tipoPropiedad && slugify(p.tipoPropiedad) === categoriaSlug
  );
}

async function fetchPropertyBySlug(slug: string): Promise<OdooPropiedad | null> {
  const id = idFromSlug(slug);
  if (id === null) return null;

  const domain: unknown[] = [['id', '=', id]];
  if (FILTRAR_SOLO_PUBLICADAS) {
    domain.push(...domainPublicadaOEnBlanco());
  }

  const [raw] = await odooExecute<any[]>(
    ODOO_MODELS.PROPIEDAD,
    'search_read',
    [domain, PROPERTY_FIELDS],
    { limit: 1, context: { bin_size: true } }
  );

  if (!raw) return null;

  const lineIds: number[] = raw[ODOO_FIELDS.GALERIA] ?? [];
  const fotos = await fetchFotos(lineIds);
  return mapPropiedad(raw, fotos);
}

// 10 min: compromiso entre no pegarle a Odoo en cada visita y que un cambio de
// Estado de Publicación (publicar/despublicar) tarde poco en verse en la web.
const REVALIDATE_SECONDS = 600;

export const getProperties = unstable_cache(fetchProperties, ['odoo-properties'], {
  revalidate: REVALIDATE_SECONDS,
  tags: ['properties'],
});

export const getPropertyBySlug = unstable_cache(fetchPropertyBySlug, ['odoo-property-by-slug'], {
  revalidate: REVALIDATE_SECONDS,
  tags: ['properties'],
});