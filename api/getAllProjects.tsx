// ACF devuelve cada imagen con todos sus tamaños y metadatos (~1 KB por imagen).
// Este resultado se serializa en el HTML/RSC de cada página, así que se reduce a lo que se renderiza.

// El CDN de WordPress sirve los uploads con cache-control de 7 días. Si alguien reemplaza
// un archivo conservando el mismo nombre (p. ej. terminan de cargar una imagen que habían
// subido a medias), el optimizador de imágenes de Next puede quedarse con la versión vieja
// cacheada esos 7 días. Sumar el filesize como query param cambia la URL (y el cache key) cada
// vez que el archivo realmente cambia, sin depender de que WP lo versione.
const withVersion = (url?: string, filesize?: number): string => (url && filesize ? `${url}?v=${filesize}` : url ?? '');
const toImage = (image: any) => ({ url: withVersion(image?.url, image?.filesize), alt: image?.alt ?? '' });
const toGallery = (galeria: any) => (Array.isArray(galeria) ? galeria.map(toImage) : []);
const toServicios = (servicios: any) =>
  Array.isArray(servicios)
    ? servicios.map((item: any) => ({
        nombre_servicio: item?.nombre_servicio,
        icono_servicio: { url: item?.icono_servicio?.url },
      }))
    : [];

export default async function getAllProjects() {
  try {
    const res = await fetch(
      'https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/desarrollos/?acf_format=standard&_fields=id,slug,acf',
      {
        next: { revalidate: 60 * 5 }, // cachea 5 minutos en el servidor
      }
    );

    if (!res.ok) {
      console.error(`getAllProjects failed with status ${res.status}`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((proyecto: any) => ({
      id: proyecto.id,
      slug: proyecto.slug,
      imagen_banner: withVersion(proyecto.acf?.primera_seccion?.imagen_banner?.url, proyecto.acf?.primera_seccion?.imagen_banner?.filesize),
      nombre: proyecto.acf?.primera_seccion?.nombre,
      titulo: proyecto.acf?.primera_seccion?.titulo,
      logo: proyecto.acf?.primera_seccion?.logo,
      color_primario: proyecto.acf?.primera_seccion?.color_primario,
      color_secundario: proyecto.acf?.primera_seccion?.color_secundario,
      texto_blanco: proyecto.acf?.primera_seccion?.texto_blanco,
      servicios: toServicios(proyecto.acf?.primera_seccion?.servicios),
      galeria: toGallery(proyecto.acf?.segunda_seccion?.galeria),
      imagen_deco: withVersion(proyecto.acf?.segunda_seccion?.imagen_deco?.url, proyecto.acf?.segunda_seccion?.imagen_deco?.filesize),
      brochure: proyecto.acf?.segunda_seccion?.brochure,
      subtitulo_bicolor_primera: proyecto.acf?.segunda_seccion?.subtitulo_bicolor_primera,
      subtitulo_bicolor_segunda: proyecto.acf?.segunda_seccion?.subtitulo_bicolor_segunda,
      mapa_imagen: withVersion(proyecto.acf?.tercera_seccion?.mapa_imagen?.url, proyecto.acf?.tercera_seccion?.mapa_imagen?.filesize),
      mapa_url: proyecto.acf?.tercera_seccion?.mapa_url,
      imagen_decorativa_dos: withVersion(proyecto.acf?.tercera_seccion?.imagen_decorativa_dos?.url, proyecto.acf?.tercera_seccion?.imagen_decorativa_dos?.filesize),
      ubicacion: proyecto.acf?.tercera_seccion?.ubicacion,
      estado: proyecto.acf?.estado,
      fecha_de_entrega: proyecto.acf?.fecha_de_entrega,
      clasificacion: proyecto.acf?.clasificacion,
      desarrollo_alianza: proyecto.acf?.desarrollo_alianza && {
        ...proyecto.acf.desarrollo_alianza,
        portada: toImage(proyecto.acf.desarrollo_alianza.portada),
        galeria: toGallery(proyecto.acf.desarrollo_alianza.galeria),
      },
    })).reverse();
  } catch (error) {
    console.error('getAllProjects unexpected error', error);
    return [];
  }
}
