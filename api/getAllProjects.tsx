export default async function getAllProjects() {
    const res = await fetch('https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/desarrollos/?acf_format=standard');
    const data:any = await res.json();

    const result = data.map((proyecto: any) => {
            return (
                {
                    id: proyecto.id,
                    slug: proyecto.slug,
                    imagen_banner: proyecto.acf.primera_seccion.imagen_banner.url,
                    nombre: proyecto.acf.primera_seccion.nombre,
                    titulo: proyecto.acf.primera_seccion.titulo,
                    logo: proyecto.acf.primera_seccion.logo,
                    color_primario: proyecto.acf.primera_seccion.color_primario,
                    color_secundario: proyecto.acf.primera_seccion.color_secundario,
                    texto_blanco: proyecto.acf.primera_seccion.texto_blanco,
                    servicios: proyecto.acf.primera_seccion.servicios,
                    galeria: proyecto.acf.segunda_seccion.galeria,
                    imagen_deco: proyecto.acf.segunda_seccion.imagen_deco.url,
                    brochure: proyecto.acf.segunda_seccion.brochure,
                    subtitulo_bicolor_primera: proyecto.acf.segunda_seccion.subtitulo_bicolor_primera,
                    subtitulo_bicolor_segunda: proyecto.acf.segunda_seccion.subtitulo_bicolor_segunda,
                    mapa_imagen: proyecto.acf.tercera_seccion.mapa_imagen.url,
                    mapa_url: proyecto.acf.tercera_seccion.mapa_url,
                    imagen_decorativa_dos: proyecto.acf.tercera_seccion.imagen_decorativa_dos.url,
                    ubicacion: proyecto.acf.tercera_seccion.ubicacion,
                    agotado: proyecto.acf.agotado
                }
            )
        }   
    ).reverse();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return result;
}
