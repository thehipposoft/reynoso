import { Proyecto } from "@/types";

interface ProjectSchemaProps {
  project: Proyecto;
}

export default function ProjectSchema({ project }: ProjectSchemaProps) {
  const projectName = project.clasificacion !== "Desarrollo ALIANZA" ? project.nombre : project.desarrollo_alianza?.nombre;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateProperty",
    "name": projectName,
    "description": project.titulo,
    "image": project.imagen_banner,
    "url": `https://reynosobienesraices.com.ar/desarrollos/${project.slug}`,
    "areaServed": {
      "@type": "State",
      "name": project.ubicacion,
      "countryName": "Argentina"
    },
    "priceRange": project.estado,
    "availability": project.estado === "Unidades Agotadas" ? "OutOfStock" : "InStock",
    "agent": {
      "@type": "RealEstateAgent",
      "name": "Reynoso Bienes Raíces",
      "url": "https://reynosobienesraices.com.ar"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
