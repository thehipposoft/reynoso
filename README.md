This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Módulo de propiedades (`/propiedades`)

Listado y ficha de propiedades leídos desde Odoo vía XML-RPC (`lib/odoo/`).
Las imágenes se sirven desde `/api/property-cover/[id]` y
`/api/property-image/[lineId]` con marca de agua (`sharp`).

Variables de entorno requeridas (en `.env.local` y en Netlify; nunca commitear valores):

| Variable | Descripción |
|---|---|
| `ODOO_URL` | URL base de la instancia de Odoo (https) |
| `ODOO_DB` | Nombre de la base de datos de Odoo |
| `ODOO_USERNAME` | Usuario de la integración |
| `ODOO_API_KEY` | API key de ese usuario |
