import QRCode from 'qrcode';

// Siempre negro sobre blanco: colorear los módulos baja la tasa de lectura.
export const createQrSvg = (contenido: string) =>
  QRCode.toString(contenido, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    color: { dark: '#000000', light: '#ffffff' },
  });
