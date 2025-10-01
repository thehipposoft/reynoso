export type ServiciosType = {
    nombre_servicio: string,
    icono_servicio: {
        url:string
    },
}

export type Proyecto = {
    id: number,
    imagen_banner: string,
    nombre: string,
    titulo: string,
    logo: string,
    color_primario: string,
    color_secundario: string,
    servicios: ServiciosType[],
    galeria: [],
    imagen_deco: string,
    subtitulo: string,
    subtitulo_bicolor_primera: string,
    subtitulo_bicolor_segunda: string,
    mapa_imagen: string,
    mapa_url: string,
    imagen_decorativa_dos: string,
    ubicacion: string,
}

export type Proyectos = {
    proyectos: Proyecto[]
}