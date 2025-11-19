export default async function getTeam() {
  const res = await fetch(
    'https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/empleado/?acf_format=standard&_fields=id,acf',
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();
  return data.map((empleado: any) => ({
    id: empleado.id,
    nombre: empleado.acf.nombre,
    puesto: empleado.acf.puesto,
    foto: empleado.acf.foto.url
  })).reverse();
}
