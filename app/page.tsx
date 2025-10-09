import getAllProjects from "@/api/getAllProjects";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact";
import Desarrollo from "@/components/Desarrollo";
import Equipo from "@/components/Equipo";
import Explora from "@/components/Explora";
import Oportunidades from "@/components/Oportunidades";
import VentaAlquilerComp from "@/components/Oportunidades/VentaAlquilerComp";
import Redes from "@/components/Redes";
import Footer from "@/components/commons/Footer";
import Menu from "@/components/Menu";

export default async function Home() {

  const proyectos = await getAllProjects()
  
  return (
    <div className="">
      <header>
          <Menu desarrollos={proyectos} />
      </header>
      <main className="">
        <Banner proyectos={proyectos} />
        <Explora desarrollos={proyectos} />
        <VentaAlquilerComp />
        <Oportunidades />
        <Desarrollo />
        <Equipo />
        <Redes />
        <Contact />
      </main>
      <footer>
        <Footer proyectos={proyectos} />
      </footer>
    </div>
  );
}
