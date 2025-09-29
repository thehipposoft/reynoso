export default async function getAllProjects() {
    const res = await fetch('https://propiedades.reynosobienesraices.com.ar/wp-json/wp/v2/desarrollos/?acf_format=standard&acf_format=standard&_fields=id,title,slug,acf');
    const data:any = await res.json();

    const result = data.map((proyecto: any) => {
            return (
                {
                    id: proyecto.id,
                    nombre: proyecto.acf.nombre,
                    titulo: proyecto.acf.titulo,
                    logo: proyecto.acf.logo,
                    color_primario: proyecto.acf.color_primario,
                    color_secundario: proyecto.acf.color_secundario,
                    servicios: proyecto.acf.servicios,
                    mapa_imagen: proyecto.acf.mapa_imagen,
                    mapa_url: proyecto.acf.mapa_url,
                    ubicacion: proyecto.acf.ubicacion,
                }
            )
        }   
    ).reverse();

    console.log('All projects api:', result);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return result;
}
