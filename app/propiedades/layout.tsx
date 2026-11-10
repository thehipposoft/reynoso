import getAllProjects from "@/api/getAllProjects";
import Menu from "@/components/Menu";
import Footer from "@/components/commons/Footer";

// Módulo de propiedades: datos desde Odoo (lib/odoo). Requiere en el entorno
// ODOO_URL, ODOO_DB, ODOO_USERNAME y ODOO_API_KEY — ver README.md.
export default async function PropiedadesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const proyectos = await getAllProjects();

  return (
    <div className="bg-surface font-body text-on-surface">
      <Menu />
      {children}
      <Footer proyectos={proyectos} />
    </div>
  );
}
