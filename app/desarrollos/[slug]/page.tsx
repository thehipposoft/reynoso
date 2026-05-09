import { ResolvingMetadata, Metadata } from "next";
import getAllProjects from "@/api/getAllProjects";
import ProyectoLayout from "@/components/Proyecto/ProyectoLayout";
import { Proyecto } from "@/types";
import Footer from "@/components/commons/Footer";
import Menu from "@/components/Menu";
import { redirect } from "next/navigation";
import Explora from "@/components/Explora";
import ContactDesarrollos from "@/components/Contact/ContactDesarrollos";
import ProjectSchema from "@/components/SEO/ProjectSchema";

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
    const projectName = project.clasificacion !== "Desarrollo ALIANZA" ? project.nombre : project.desarrollo_alianza?.nombre;
    const projectUrl = `https://reynosobienesraices.com.ar/desarrollos/${project.slug}`;

    return {
      title: `${projectName} | Desarrollos Inmobiliarios - Reynoso Bienes Raíces`,
      description: project.titulo || `Descubre ${projectName}, un desarrollo inmobiliario de Reynoso Bienes Raíces en Salta.`,
      keywords: `${projectName}, desarrollos inmobiliarios, Salta, bienes raíces, ${project.ubicacion}`,
      openGraph: {
        title: `${projectName} | Reynoso Bienes Raíces`,
        description: project.titulo || `Descubre ${projectName}, un desarrollo inmobiliario`,
        url: projectUrl,
        type: "website",
        images: [
          {
            url: project.imagen_banner,
            width: 1200,
            height: 630,
            alt: projectName,
          },
          ...previousImages,
        ],
      },
      alternates: {
        canonical: projectUrl,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: "Proyecto | Reynoso Bienes Raíces",
    robots: {
      index: false,
    },
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
      <ProjectSchema project={project} />
      <Menu />
      {
        project && <ProyectoLayout proyecto={project} />
      }
      {
        project.estado === "Unidades Agotadas" ?
        <Explora desarrollos={proyectos} agotado />
        :
        project.clasificacion === "Desarrollo ALIANZA" ?
        <></>
        :
        <ContactDesarrollos proyecto={project} />
      }
      <Footer proyectos={proyectos} backgroundColor={project?.color_primario} />
    </div>
  )
}



