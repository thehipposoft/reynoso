import getTeam from "@/api/getTeam";
import EquipoLayout from "./EquipoLayout";

export default async function Equipo () {

  const empleados = await getTeam()

  return (
    <div>
      <EquipoLayout empleados={empleados} />
    </div>
  )
}
