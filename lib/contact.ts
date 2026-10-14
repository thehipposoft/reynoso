import { Empleado } from '@/types';

export const SITE_URL = 'https://reynosobienesraices.com.ar';
export const EMPRESA = 'Reynoso Bienes Raíces';

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
