import getAllProjects from "@/api/getAllProjects";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact";
import Desarrollo from "@/components/Desarrollo";
import Equipo from "@/components/Equipo";
import Explora from "@/components/Explora";
import Oportunidades from "@/components/Oportunidades";
import VentaAlquilerComp from "@/components/Oportunidades/VentaAlquilerComp";
import Redes from "@/components/Redes";

export default async function Home() {

  const proyectos = await getAllProjects()
  
  return (
    <div className="">
      <main className="">
        <Banner proyectos={proyectos} />
        <Explora />
        <VentaAlquilerComp />
        <Oportunidades />
        <Desarrollo />
        <Equipo />
        <Redes />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
