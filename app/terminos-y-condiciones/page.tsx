import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Reynoso Bienes Raices",
  description:
    "Condiciones de uso de nuestros canales digitales y chatbot de WhatsApp.",
  alternates: {
    canonical: "https://reynosobienesraices.com.ar/terminos-y-condiciones",
  },
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#2B2A28] md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#767067]">
            Legal
          </p>
          <h1 className="font-jakarta text-3xl font-bold md:text-5xl">
            Terminos y Condiciones
          </h1>
          <p className="text-sm text-[#5F5A52]">
            Ultima actualizacion: 12 de mayo de 2026
          </p>
        </header>

        <section className="space-y-3 leading-7">
          <p>
            Al utilizar nuestros sitios, formularios y canal de WhatsApp,
            aceptas los presentes terminos y condiciones. Si no estas de
            acuerdo, por favor no utilices estos servicios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            1. Objeto del servicio
          </h2>
          <p className="leading-7">
            Brindamos informacion sobre propiedades, desarrollos y
            oportunidades comerciales. El chatbot de WhatsApp asiste en la
            atencion inicial, toma de consultas y registro de potenciales
            clientes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            2. Uso permitido
          </h2>
          <p className="leading-7">Te comprometes a:</p>
          <ul className="list-disc space-y-1 pl-6 leading-7">
            <li>Proporcionar datos reales y actualizados.</li>
            <li>No usar el servicio para fines ilicitos o fraudulentos.</li>
            <li>No interferir con la operacion del sitio o del chatbot.</li>
            <li>No enviar contenido ofensivo, difamatorio o ilegal.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            3. Naturaleza de la informacion
          </h2>
          <p className="leading-7">
            La informacion publicada tiene caracter orientativo y puede
            actualizarse sin previo aviso. Las condiciones comerciales,
            disponibilidad y precios de propiedades pueden variar.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            4. Propiedad intelectual
          </h2>
          <p className="leading-7">
            Los contenidos del sitio y sus canales asociados (textos, imagenes,
            marcas y disenos) son propiedad de Reynoso Bienes Raices o de sus
            respectivos titulares y no pueden reproducirse sin autorizacion
            previa.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            5. Limitacion de responsabilidad
          </h2>
          <p className="leading-7">
            No garantizamos disponibilidad ininterrumpida del sitio ni del canal
            de WhatsApp. En la maxima medida permitida por la ley, no seremos
            responsables por danos indirectos derivados del uso de la
            informacion o de interrupciones del servicio.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            6. Proteccion de datos
          </h2>
          <p className="leading-7">
            El tratamiento de datos personales se rige por nuestra politica de
            privacidad, disponible en{" "}
            <Link
              href="/politica-de-privacidad"
              className="underline decoration-[#9F9688] underline-offset-4"
            >
              Politica de Privacidad
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            7. Ley aplicable y jurisdiccion
          </h2>
          <p className="leading-7">
            Estos terminos se rigen por la legislacion de la Republica
            Argentina. Cualquier controversia sera sometida a los tribunales
            competentes de la Ciudad de Salta, salvo disposicion legal en
            contrario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">8. Contacto</h2>
          <p className="leading-7">
            Si tenes dudas sobre estos terminos, escribinos a{" "}
            <Link
              href="mailto:info@reynosobienesraices.com.ar"
              className="underline decoration-[#9F9688] underline-offset-4"
            >
              info@reynosobienesraices.com.ar
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
