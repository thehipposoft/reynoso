export default async function getProject(slug: string | 'undefined') {
  if (!slug || slug === 'undefined') {
    return null;
  }

  const res = await fetch(
    `https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/desarrollos?slug=${slug}&acf_format=standard&_fields=id,title,slug,acf`,
    {
      next: { revalidate: 180 }, // 3 minutos
    }
  );

  if (!res.ok) throw new Error('Failed to fetch project');

  const proyecto = await res.json();

  const result = {
    id: proyecto[0].id,
    slug: proyecto[0].slug,
    imagen_banner: proyecto[0].acf.primera_seccion.imagen_banner.url,
    nombre: proyecto[0].acf.primera_seccion.nombre,
    titulo: proyecto[0].acf.primera_seccion.titulo,
    logo: proyecto[0].acf.primera_seccion.logo,
    color_primario: proyecto[0].acf.primera_seccion.color_primario,
    color_secundario: proyecto[0].acf.primera_seccion.color_secundario,
    texto_blanco: proyecto[0].acf.primera_seccion.texto_blanco,
    servicios: proyecto[0].acf.primera_seccion.servicios,
    galeria: proyecto[0].acf.segunda_seccion.galeria,
    imagen_deco: proyecto[0].acf.segunda_seccion.imagen_deco.url,
    brochure: proyecto[0].acf.segunda_seccion.brochure,
    subtitulo_bicolor_primera: proyecto[0].acf.segunda_seccion.subtitulo_bicolor_primera,
    subtitulo_bicolor_segunda: proyecto[0].acf.segunda_seccion.subtitulo_bicolor_segunda,
    mapa_imagen: proyecto[0].acf.tercera_seccion.mapa_imagen.url,
    mapa_url: proyecto[0].acf.tercera_seccion.mapa_url,
    imagen_decorativa_dos: proyecto[0].acf.tercera_seccion.imagen_decorativa_dos.url,
    ubicacion: proyecto[0].acf.tercera_seccion.ubicacion,
    estado: proyecto[0].acf.estado,
    fecha_de_entrega: proyecto[0].acf.fecha_de_entrega,
  };

  return result;
}
