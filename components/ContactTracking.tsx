'use client'
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Las tarjetas de /miembros ya trackean sus clics en TarjetaDigital.tsx: se excluyen para no duplicar.
const RUTAS_EXCLUIDAS = ['/miembros'];

const PREFIJO_DESARROLLO = 'Estoy interesado en el desarrollo:';

const clasificar = (href: string): string | null => {
    if (href.startsWith('https://wa.me/') || href.includes('api.whatsapp.com') || href.startsWith('whatsapp:')) return 'contacto_whatsapp';
    if (href.startsWith('tel:')) return 'contacto_llamada';
    if (href.startsWith('mailto:')) return 'contacto_email';
    return null;
};

const desarrolloDesdeWhatsApp = (href: string): string | null => {
    try {
        const texto = new URL(href).searchParams.get('text') ?? '';
        const i = texto.indexOf(PREFIJO_DESARROLLO);
        return i >= 0 ? texto.slice(i + PREFIJO_DESARROLLO.length).trim() || null : null;
    } catch {
        return null;
    }
};

// Un solo listener global para los links de contacto (WhatsApp, teléfono, email) de todo el sitio,
// así Footer, ProyectoLayout y WhatsApp pueden seguir siendo server components.
const ContactTracking = () => {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const path = window.location.pathname;
            if (RUTAS_EXCLUIDAS.some((ruta) => path.startsWith(ruta))) return;

            const link = (e.target as Element | null)?.closest?.('a[href]');
            if (!link) return;

            const href = link.getAttribute('href') ?? '';
            const evento = clasificar(href);
            if (!evento) return;

            const params: Record<string, string> = { page_path: path, link_url: href.split('?')[0] };
            const desarrollo = evento === 'contacto_whatsapp' ? desarrolloDesdeWhatsApp(href) : null;
            if (desarrollo) params.desarrollo = desarrollo;

            trackEvent(evento, params);
        };

        // capture: true para registrar el clic aunque algún componente frene la propagación.
        document.addEventListener('click', onClick, { capture: true });
        return () => document.removeEventListener('click', onClick, { capture: true });
    }, []);

    return null;
};

export default ContactTracking;
