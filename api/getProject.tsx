export default async function getProject(slug: string | 'undefined') {

    if (!slug || slug === 'undefined') {
        return null;
    }

    const res = await fetch(`https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/desarrollos?slug=${slug}&acf_format=standard&_fields=id,title,slug,acf`);
    const proyecto = await res.json();

    const result = {
                    id: proyecto[0].id,
                    imagen_banner: proyecto[0].acf.primera_seccion.imagen_banner.url,
                    nombre: proyecto[0].acf.primera_seccion.nombre,
                    titulo: proyecto[0].acf.primera_seccion.titulo,
                    logo: proyecto[0].acf.primera_seccion.logo,
                    color_primario: proyecto[0].acf.primera_seccion.color_primario,
                    color_secundario: proyecto[0].acf.primera_seccion.color_secundario,
                    servicios: proyecto[0].acf.primera_seccion.servicios,
                    galeria: proyecto[0].acf.segunda_seccion.galeria,
                    imagen_deco: proyecto[0].acf.segunda_seccion.imagen_deco.url,
                    subtitulo: proyecto[0].acf.segunda_seccion.subtitulo.url,
                    subtitulo_bicolor_primera: proyecto[0].acf.segunda_seccion.subtitulo_bicolor_primera,
                    subtitulo_bicolor_segunda: proyecto[0].acf.segunda_seccion.subtitulo_bicolor_segunda,
                    mapa_imagen: proyecto[0].acf.tercera_seccion.mapa_imagen.url,
                    mapa_url: proyecto[0].acf.tercera_seccion.mapa_url,
                    imagen_decorativa_dos: proyecto[0].acf.tercera_seccion.imagen_decorativa_dos.url,
                    ubicacion: proyecto[0].acf.tercera_seccion.ubicacion,
                };

    if(!res.ok) throw new Error('Failed to fetch project');

    return result;
}