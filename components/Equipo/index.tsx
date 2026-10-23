import getTeam from "@/api/getTeam";
import EquipoLayout from "./EquipoLayout";

// Miembros que solo deben verse en /miembros/[equipoSlug], no en la home.
// Por id de WordPress (no por slug/nombre) para que no se rompa si corrigen el nombre.
const IDS_OCULTOS_EN_HOME = [29257, 29254];

export default async function Equipo () {

  const empleados = await getTeam()
  const empleadosVisibles = empleados.filter(
    (empleado) => !IDS_OCULTOS_EN_HOME.includes(empleado.id)
  )

  return (
    <div>
      <EquipoLayout empleados={empleadosVisibles} />
    </div>
  )
}
