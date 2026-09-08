'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Empleado } from '@/types';

const NEGOCIO = {
  nombre: 'Reynoso Bienes Raíces',
  direccion: 'Leguizamón 515 Ofi 201',
  direccionUrl: 'https://maps.app.goo.gl/uEYeRbV7cRkBSJfK9',
  sitioWebLabel: 'reynosobienesraices.com.ar',
  sitioWebUrl: 'https://reynosobienesraices.com.ar',
  instagramLabel: 'reynosobienesraicessalta',
  instagramUrl: 'https://www.instagram.com/reynosobienesraicessalta',
  banner: '/assets/images/cards-background.png',
  logo: '/assets/images/logo/reynoso-logo.webp',
};

const SERVICIOS = [
  {
    nombre: 'Venta de lotes',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838" strokeWidth="1.5">
        <path d="M4 21V8l3-4h10l3 4v13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8h16M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nombre: 'Asesoramiento Personalizado',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838" strokeWidth="1.5">
        <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3ZM4 13v4a2 2 0 0 0 2 2h1v-6H4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19a2 2 0 0 1-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nombre: 'Desarrollos Inmobiliarios',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838" strokeWidth="1.5">
        <path d="M3 21h18M5 21V8.5L12 3l7 5.5V21" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91a9.86 9.86 0 0 0-2.9-7 9.86 9.86 0 0 0-7.01-2.91Zm0 18.15a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.24 8.24 0 0 1-1.27-4.4c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.7 8.26-8.25 8.26Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.63.8-.77.97-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z"
      fill="#33847D"
    />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
      stroke="#33847D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconShare = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="12" r="2.2" stroke="#33847D" strokeWidth="1.5" />
    <circle cx="17" cy="6" r="2.2" stroke="#33847D" strokeWidth="1.5" />
    <circle cx="17" cy="18" r="2.2" stroke="#33847D" strokeWidth="1.5" />
    <path d="m8 10.8 7-3.6M8 13.2l7 3.6" stroke="#33847D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

type TarjetaDigitalProps = {
  empleado: Empleado;
};

const TarjetaDigital = ({ empleado }: TarjetaDigitalProps) => {
  const telefonoDigits = empleado.telefono ? empleado.telefono.replace(/[^0-9]/g, '') : '';
  const tieneTelefono = telefonoDigits.length > 0;

  const [primerNombre, ...resto] = empleado.nombre.split(' ');
  const apellido = resto.join(' ');

  const handleShare = async () => {
    const shareData = {
      title: `${empleado.nombre} | Reynoso Bienes Raíces`,
      text: `Contactá a ${empleado.nombre}, ${empleado.puesto} en Reynoso Bienes Raíces.`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert('Enlace copiado al portapapeles');
      }
    } catch {
      // Usuario canceló el share, no hacer nada
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <div className="relative">
        <div className="relative w-full h-[380px] md:h-[360px] overflow-hidden">
          <Image
            src={NEGOCIO.banner}
            alt="Reynoso Bienes Raíces"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 -mt-32 mx-auto w-[90vw] max-w-[520px] rounded-3xl bg-primary-green/60 backdrop-blur-sm pt-24 pb-8 px-8 text-center">
          <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-40 h-40 rounded-full overflow-hidden shadow-lg z-20">
            <Image
              src={empleado.foto}
              alt={`${empleado.nombre} foto de perfil`}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>

          <h1 style={{ fontFamily: 'Poppins' }} className="text-2xl md:text-4xl text-white">
            <span className="font-semibold">{primerNombre}</span>{apellido ? ` ${apellido}` : ''}
          </h1>
          <div className="w-16 h-[2px] bg-white mx-auto my-4" />
          <p style={{ fontFamily: 'Poppins' }} className="text-white text-lg">{empleado.puesto}</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              href={tieneTelefono ? `https://wa.me/${telefonoDigits}` : '#'}
              target={tieneTelefono ? '_blank' : undefined}
              rel={tieneTelefono ? 'noreferrer' : undefined}
              aria-disabled={!tieneTelefono}
              title={tieneTelefono ? 'Escribir por WhatsApp' : 'Teléfono próximamente'}
              className={`lg:w-12 w-16 lg:h-12 h-16 rounded-full bg-white flex items-center justify-center p-3 shadow-md hover:scale-110 duration-300 ${!tieneTelefono ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <IconWhatsApp />
            </Link>
            <button
              type="button"
              onClick={handleShare}
              title="Compartir tarjeta"
              className="lg:w-12 w-16 lg:h-12 h-16 rounded-full bg-white flex items-center justify-center p-3 shadow-md hover:scale-110 duration-300 cursor-pointer"
            >
              <IconShare />
            </button>
            <Link
              href={tieneTelefono ? `tel:${telefonoDigits}` : '#'}
              aria-disabled={!tieneTelefono}
              title={tieneTelefono ? 'Llamar' : 'Teléfono próximamente'}
              className={`lg:w-12 w-16 lg:h-12 h-16 rounded-full bg-white flex items-center justify-center p-3 shadow-md hover:scale-110 duration-300 ${!tieneTelefono ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <IconPhone />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] hidden lg:block mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl text-title-color font-poppins mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-3 divide-x divide-title-color/20">
          {SERVICIOS.map((servicio) => (
            <div key={servicio.nombre} className="flex flex-col items-center gap-3 px-2">
              <div className="w-10 h-10">{servicio.icono}</div>
              <p className="text-title-color font-poppins font-medium w-2/5 leading-5">{servicio.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 py-10 px-8">
        <Image src={NEGOCIO.logo} alt="Logo Reynoso" width={140} height={140} className="w-36 h-auto object-contain" />

        <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-y-3 gap-y-5 text-sm text-title-color font-jakarta">
          <Link href={NEGOCIO.direccionUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838"><path d="M2 20h2m0 0h5m-5 0V7.2002c0-1.12011 0-1.68058.21799-2.1084.19174-.37633.49748-.68207.87381-.87381C5.51962 4 6.08009 4 7.2002 4h1.6c1.1201 0 1.6794 0 2.1072.21799.3763.19174.6831.49748.8748.87381C12 5.5192 12 6.07899 12 7.19691v2.80329M9 20h11M9 20v-5.6318c0-.5254 0-.7882.063-1.0332.05583-.2172.14773-.4232.27196-.6098.14009-.2105.33617-.3868.72654-.7375l2.3016-2.06773c.7547-.67805 1.1324-1.01733 1.5594-1.14604.3764-.11348.7782-.11348 1.1546 0 .4274.12882.8056.46827 1.5616 1.14746l2.3 2.06631c.3908.3511.5858.5269.726.7375.1242.1866.216.3926.2718.6098.063.245.0635.5078.0635 1.0332V20m0 0h2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {NEGOCIO.direccion}
          </Link>
          <Link href={NEGOCIO.sitioWebUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838"><circle cx="12" cy="12" r="9" strokeWidth="1.5" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" strokeWidth="1.5" /></svg>
            {NEGOCIO.sitioWebLabel}
          </Link>
          <Link href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#383838"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="#383838" /></svg>
            {NEGOCIO.instagramLabel}
          </Link>
        </div>
      </div>

      <div className="max-w-[900px] mt-20 hidden mx-auto border-t border-primary-green" />

      <div className="flex justify-center items-center py-6 mt-20">
        <Link href="https://www.thehipposoft.com/" target="_blank" rel="noreferrer" className="text-center text-title-color font-jakarta hover:underline">
          Created by <strong>Hipposoft</strong> | All Right Reserved
        </Link>
      </div>
    </div>
  );
};

export default TarjetaDigital;
