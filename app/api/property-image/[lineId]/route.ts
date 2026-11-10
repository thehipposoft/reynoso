import { ODOO_MODELS, ODOO_FIELDS } from '@/lib/odoo/models';
import { odooImageResponse } from '@/lib/odoo/images';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(_request: Request, { params }: { params: Promise<{ lineId: string }> }) {
  const { lineId } = await params;
  return odooImageResponse(ODOO_MODELS.GALERIA_LINE, ODOO_FIELDS.GALERIA_IMAGEN, lineId);
}
