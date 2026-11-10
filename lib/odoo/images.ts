import 'server-only';
import { odooExecute } from './client';
import { applyWatermark } from '@/lib/propiedades/watermark';

function detectMimeType(buffer: Buffer): string {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return 'image/jpeg';
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return 'image/png';
  if (
    buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
    buffer.subarray(8, 12).toString('ascii') === 'WEBP'
  ) {
    return 'image/webp';
  }
  return 'application/octet-stream';
}

/**
 * Lee un campo binario (base64) de un registro de Odoo y lo devuelve como
 * imagen con la marca de agua aplicada. Compartido por /api/property-cover
 * y /api/property-image.
 */
export async function odooImageResponse(model: string, field: string, idParam: string): Promise<Response> {
  const id = Number(idParam);

  if (!Number.isInteger(id)) {
    return new Response('ID inválido', { status: 400 });
  }

  const [registro] = await odooExecute<any[]>(model, 'read', [[id]], { fields: [field] });

  const base64 = registro?.[field];
  if (!base64) {
    return new Response('Imagen no encontrada', { status: 404 });
  }

  const original = Buffer.from(base64, 'base64');

  let output: Buffer;
  try {
    output = await applyWatermark(original);
  } catch (err) {
    console.error('Error aplicando watermark:', err);
    output = original;
  }

  return new Response(new Uint8Array(output), {
    headers: {
      'Content-Type': detectMimeType(output),
      'Cache-Control': 'public, max-age=604800, stale-while-revalidate=2592000',
    },
  });
}
