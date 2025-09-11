import Banner from "@/components/Banner";
import Desarrollo from "@/components/Desarrollo";
import Equipo from "@/components/Equipo";
import Oportunidades from "@/components/Oportunidades";
import VentaAlquilerComp from "@/components/Oportunidades/VentaAlquilerComp";
import Redes from "@/components/Redes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <Oportunidades />
        <VentaAlquilerComp />
        <Desarrollo />
        <Equipo />
        <Redes />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
