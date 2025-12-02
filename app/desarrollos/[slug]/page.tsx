import { ResolvingMetadata, Metadata } from "next";
import getAllProjects from "@/api/getAllProjects";
import ProyectoLayout from "@/components/Proyecto/ProyectoLayout";
import { Proyecto } from "@/types";
import Footer from "@/components/commons/Footer";
import Menu from "@/components/Menu";
import { redirect } from "next/navigation";
import Explora from "@/components/Explora";
import ContactDesarrollos from "@/components/Contact/ContactDesarrollos";

type Params = {
    params: Promise<{
      slug: string;
  }>;
}

export async function generateMetadata({
  params
}: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params;
  const proyectos:Proyecto[] = await getAllProjects() || [];
  const project = proyectos.find((proyecto) => proyecto.slug === resolvedParams.slug)

  if (project) {
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `Reynoso | ${project.nombre} `,
      openGraph: {
        images: [
          project.imagen_banner,
          ...previousImages,
        ],
      },
      description: project.titulo,
    };
  }

  return {
    title: "Reynoso | Specific Project",
  };
}


export default async function ProjectPage({ params }: Params) {
  const resolvedParams = await params;
  const proyectos:Proyecto[] = await getAllProjects() || [];
  const project = proyectos.find((proyecto) => proyecto.slug === resolvedParams.slug)
  if(!project) {
    return(
      redirect('/not-found')
    )
  }

  return(
    <div>
      <Menu desarrollos={proyectos}  />
      {
        project && <ProyectoLayout proyecto={project} />
      }
      {
        project.estado === "Unidades Agotadas" ? 
        <Explora desarrollos={proyectos} agotado />
        :
        <ContactDesarrollos proyecto={project} />
      }
      <Footer proyectos={proyectos} backgroundColor={project?.color_primario} />
    </div>
  )
}



