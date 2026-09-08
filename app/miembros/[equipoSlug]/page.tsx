import { ResolvingMetadata, Metadata } from "next";
import { notFound } from "next/navigation";
import getTeam from "@/api/getTeam";
import TarjetaDigital from "@/components/TarjetaDigital";
import { Empleado } from "@/types";

type Params = {
  params: Promise<{
    equipoSlug: string;
  }>;
};

export async function generateStaticParams() {
  const empleados: Empleado[] = (await getTeam()) || [];
  return empleados.map((empleado) => ({ equipoSlug: empleado.slug }));
}

export async function generateMetadata({ params }: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params;
  const empleados: Empleado[] = (await getTeam()) || [];
  const empleado = empleados.find((item) => item.slug === resolvedParams.equipoSlug);

  if (empleado) {
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `Reynoso | ${empleado.nombre}`,
      description: `${empleado.nombre} - ${empleado.puesto} en Reynoso Bienes Raíces`,
      openGraph: {
        images: [empleado.foto, ...previousImages],
      },
    };
  }

  return {
    title: "Reynoso | Tarjeta Digital",
  };
}

export default async function EquipoSlugPage({ params }: Params) {
  const resolvedParams = await params;
  const empleados: Empleado[] = (await getTeam()) || [];
  const empleado = empleados.find((item) => item.slug === resolvedParams.equipoSlug);

  if (!empleado) {
    notFound();
  }

  return <TarjetaDigital empleado={empleado} />;
}
