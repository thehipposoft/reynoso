import getTeam from "@/api/getTeam";
import EquipoLayout from "./EquipoLayout";

// Miembros que solo deben verse en /miembros/[equipoSlug], no en la home
const SLUGS_OCULTOS_EN_HOME = ["franco-casas", "denise-de-oliveira"];

export default async function Equipo () {

  const empleados = await getTeam()
  const empleadosVisibles = empleados.filter(
    (empleado) => !SLUGS_OCULTOS_EN_HOME.includes(empleado.slug)
  )

  return (
    <div>
      <EquipoLayout empleados={empleadosVisibles} />
    </div>
  )
}
