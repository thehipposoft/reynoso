export interface Agente {
  odooUserId: number;
  nombre: string;
  fotoUrl: string;
  email?: string | null;
  telefono?: string | null;
}

export const AGENTES: Agente[] = [
   {
     odooUserId: 7,
     nombre: "Juan Pablo Rocha",
     fotoUrl: "/assets/images/agentes/juan-pablo.jpeg",
     telefono: "+5493874471793",
   },
    {
     odooUserId: 20,
     nombre: "Ivana Veliz",
     fotoUrl: "/assets/images/agentes/ivana.jpeg",
     telefono: "+5493874064839",
   },
    {
     odooUserId: 13,
     nombre: "Rosario Moreno",
     fotoUrl: "/assets/images/agentes/rosario.jpeg",
     telefono: "+5493875115061",
   },
    {
     odooUserId: 8,
     nombre: "Virginia Luque",
     fotoUrl: "/assets/images/agentes/virginia.jpeg",
     telefono: "+5493875162082",
   },
];

export function getAgentePorOdooId(odooUserId: number): Agente | null {
  return AGENTES.find((agente) => agente.odooUserId === odooUserId) ?? null;
}

// Número general de la inmobiliaria. Todo contacto de propiedades usa este
// número (no el de cada agente individual) — mismo número que el Footer/WhatsApp del sitio.
export const TELEFONO_CONTACTO_GENERAL = "+54 9 3873 07-8333";
