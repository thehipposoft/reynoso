import { ResolvingMetadata, Metadata } from "next";
import getProject from "@/api/getProject";
import getAllProjects from "@/api/getAllProjects";
import ProyectoLayout from "@/components/Proyecto/ProyectoLayout";
import { Proyecto } from "@/types";
import Footer from "@/components/commons/Footer";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";

type Params = {
    params: Promise<{
      slug: string;
  }>;
}

export async function generateMetadata({
  params
}: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params;
  const project:Proyecto | null = await getProject(resolvedParams.slug);

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
  const project:Proyecto | null = await getProject(resolvedParams.slug);
  const proyectos = await getAllProjects();
  

  return(
    <div>
      <Menu desarrollos={proyectos}  />
      {
        project && <ProyectoLayout proyecto={project} />
      }
      <Contact />
      <Footer proyectos={proyectos} backgroundColor={project?.color_primario} />
    </div>
  )
}



