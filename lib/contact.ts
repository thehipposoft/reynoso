import { Empleado } from '@/types';

export const SITE_URL = 'https://reynosobienesraices.com.ar';
export const EMPRESA = 'Reynoso Bienes Raíces';

export const WHATSAPP_URL = 'https://wa.me/5493873078333?text=Hola!%20Vengo%20desde%20su%20p%C3%A1gina%20web';

// Miembros que muestran link a su tarjeta digital (/miembros/[slug]) en "Nuestro Equipo" de la home.
// Por id de WordPress (no por slug/nombre) para que no se rompa si corrigen el nombre.
// 26792: Gonzalo A. Reynoso · 26795: Virginia Luque · 27449: Ivana Veliz
export const IDS_CON_TARJETA_EN_HOME = [26792, 26795, 27449];

const escapar = (valor: string) =>
  valor.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');

export const telefonoE164 = (telefono: string | null) => {
  const digitos = telefono ? telefono.replace(/[^0-9]/g, '') : '';
  return digitos ? `+${digitos}` : null;
};

export const urlTarjeta = (empleado: Empleado) => `${SITE_URL}/miembros/${empleado.slug}`;

// vCard 3.0: lo entienden la cámara de iOS y Android al escanear el QR
// (ofrecen "Agregar contacto") y se codifica entero dentro del QR del dorso.
export const vCardFor = (empleado: Empleado) => {
  const [nombre, ...resto] = empleado.nombre.trim().split(/\s+/);
  const apellido = resto.join(' ');
  const telefono = telefonoE164(empleado.telefono);

  const lineas = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapar(apellido)};${escapar(nombre)};;;`,
    `FN:${escapar(empleado.nombre)}`,
    `ORG:${escapar(EMPRESA)}`,
    empleado.puesto ? `TITLE:${escapar(empleado.puesto)}` : null,
    telefono ? `TEL;TYPE=CELL:${telefono}` : null,
    `URL:${urlTarjeta(empleado)}`,
    'END:VCARD',
  ];

  return lineas.filter(Boolean).join('\r\n');
};
