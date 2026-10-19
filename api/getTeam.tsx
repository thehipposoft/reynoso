import slugify from '@/lib/slugify';

const TITULO_PREFIJO = /^(lic|dr|dra|ing|arq|mg|prof|cdor|cdora|lcda|lcdo)\.?\s+/i;

export default async function getTeam() {
  try {
    const res = await fetch(
      'https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/empleado/?acf_format=standard&_fields=id,acf',
    );

    if (!res.ok) {
      console.error(`getTeam failed with status ${res.status}`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((empleado: any) => ({
      id: empleado.id,
      nombre: empleado.acf?.nombre,
      puesto: empleado.acf?.puesto,
      foto: empleado.acf?.foto?.url,
      telefono: empleado.acf?.telefono || null,
      slug: slugify((empleado.acf?.nombre || '').replace(TITULO_PREFIJO, '')),
    })).reverse();
  } catch (error) {
    console.error('getTeam unexpected error', error);
    return [];
  }
}
