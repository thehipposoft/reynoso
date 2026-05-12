import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Privacidad | Reynoso Bienes Raices",
  description:
    "Informacion sobre el tratamiento de datos personales en nuestra app de WhatsApp y canales de contacto.",
  alternates: {
    canonical: "https://reynosobienesraices.com.ar/politica-de-privacidad",
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EE] px-6 py-16 text-[#2B2A28] md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#767067]">
            Legal
          </p>
          <h1 className="font-jakarta text-3xl font-bold md:text-5xl">
            Politica de Privacidad
          </h1>
          <p className="text-sm text-[#5F5A52]">
            Ultima actualizacion: 12 de mayo de 2026
          </p>
        </header>

        <section className="space-y-4 text-base leading-7">
          <p>
            En Reynoso Bienes Raices respetamos tu privacidad y protegemos tus
            datos personales. Esta politica explica como recopilamos, usamos y
            resguardamos la informacion cuando interactuas con nosotros,
            incluyendo el chatbot de WhatsApp.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            1. Datos que recopilamos
          </h2>
          <p className="leading-7">
            Podemos recopilar nombre y apellido, numero de telefono, correo
            electronico, preferencias de busqueda, historial de conversaciones,
            interes en proyectos y cualquier dato que compartas voluntariamente
            para recibir asesoramiento inmobiliario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            2. Finalidad del tratamiento
          </h2>
          <p className="leading-7">Usamos tus datos para:</p>
          <ul className="list-disc space-y-1 pl-6 leading-7">
            <li>Responder consultas comerciales y brindar seguimiento.</li>
            <li>Gestionar oportunidades de venta o alquiler (leads).</li>
            <li>Automatizar respuestas por medio del chatbot de WhatsApp.</li>
            <li>Mejorar nuestros procesos de atencion y servicio.</li>
            <li>Enviar informacion relacionada con nuestros desarrollos.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            3. Base legal
          </h2>
          <p className="leading-7">
            Tratamos los datos sobre la base del consentimiento del titular,
            ejecucion de medidas precontractuales y nuestro interes legitimo en
            brindar atencion comercial y soporte.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            4. Comparticion de informacion
          </h2>
          <p className="leading-7">
            Podemos compartir datos con proveedores tecnologicos vinculados al
            servicio de WhatsApp Business y herramientas de gestion comercial,
            solo en la medida necesaria para operar el servicio. No vendemos tus
            datos personales a terceros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            5. Conservacion de datos
          </h2>
          <p className="leading-7">
            Conservamos la informacion por el tiempo necesario para cumplir las
            finalidades indicadas o por obligaciones legales. Luego, los datos
            seran eliminados o anonimizados de forma segura.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            6. Derechos del titular
          </h2>
          <p className="leading-7">Podes solicitar en cualquier momento:</p>
          <ul className="list-disc space-y-1 pl-6 leading-7">
            <li>Acceso a tus datos personales.</li>
            <li>Rectificacion o actualizacion de informacion inexacta.</li>
            <li>Supresion de tus datos cuando corresponda.</li>
            <li>Limitacion u oposicion al tratamiento.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            7. Seguridad
          </h2>
          <p className="leading-7">
            Implementamos medidas tecnicas y organizativas razonables para
            proteger la informacion personal frente a accesos no autorizados,
            perdida o divulgacion indebida.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-2xl font-semibold">
            8. Contacto
          </h2>
          <p className="leading-7">
            Para consultas sobre esta politica o para ejercer tus derechos,
            escribinos a{" "}
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
