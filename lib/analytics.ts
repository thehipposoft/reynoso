declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// gtag lo define GoogleAnalytics.tsx (afterInteractive): si todavía no cargó o lo bloquea un adblocker, el evento se descarta.
export const trackEvent = (nombre: string, params: Record<string, string | number | boolean> = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', nombre, params);
};
