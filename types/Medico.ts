import { Especialidad } from "./Especialidad";

export type Medico = {
  id: number;
  nombre: string;
  apellido: string;
  matricula: string;
  especialidad: Especialidad;
  diasAtencion: string[];
  horaInicio: string;
  horaFin: string;
  dni: string;
  tipoDni: string;
};
