import { ResolvingMetadata, Metadata } from "next";
import getProject from "@/api/getProject";
import ProyectoLayout from "@/components/Proyecto/ProyectoLayout";

type Params = {
    params: Promise<{
      slug: string;
  }>;
}

export async function generateMetadata({
  params
}: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug).then((res:any) => res);

  if (project) {
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `Reynoso | ${project.nombre} `,
      openGraph: {
        images: [
          project.imagen_principal_banner,
          ...previousImages,
        ],
      },
      description: project.leyenda,
    };
  }

  return {
    title: "Reynoso | Specific Project",
  };
}


export default async function ProjectPage({ params }: Params) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  return(
    <div>
      {
        project && <ProyectoLayout proyecto={project} />
      }
    </div>
  )
}



