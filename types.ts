export type ServiciosType = {
    nombre_servicio: string,
    icono_servicio: {
        url:string
    },
}

type Alianza = {
    nombre: string,
    portada: any,
    tipo_de_proyecto: string,
    fecha_de_entrega: string,
    servicios: ServiciosType[],
    ubicacion: string,
    ubicacion_mapa: string,
    galeria: []
}

export type Proyecto = {
    id: number,
    clasificacion: string,
    slug: string,
    imagen_banner: string,
    nombre: string,
    titulo: string,
    logo: string,
    color_primario: string,
    color_secundario: string,
    texto_blanco: string[],
    servicios: ServiciosType[],
    galeria: [],
    imagen_deco: string,
    brochure: string,
    subtitulo_bicolor_primera: string,
    subtitulo_bicolor_segunda: string,
    mapa_imagen: string,
    mapa_url: string,
    imagen_decorativa_dos: string,
    ubicacion: string,
    estado: string,
    fecha_de_entrega?: string,
    desarrollo_alianza: Alianza,
}

export type Proyectos = {
    proyectos: Proyecto[]
}

export type Empleado = {
    id: number,
    nombre: string,
    puesto: string,
    foto: string,
}

export type Empleados = {
    empleados: Empleado[]
}