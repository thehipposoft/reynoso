import { ODOO_MODELS, ODOO_FIELDS } from '@/lib/odoo/models';
import { odooImageResponse } from '@/lib/odoo/images';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return odooImageResponse(ODOO_MODELS.PROPIEDAD, ODOO_FIELDS.FOTO_PORTADA, id);
}
