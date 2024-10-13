import { Especialidad } from "../types/Especialidad";
import { Medico } from "../types/Medico";

export const deleteField = (
  data: Array<Especialidad | Medico>,
  id: number
): Array<Especialidad | Medico> => {
  let dataUpdated = data.filter((data) => data.id !== id);

  return dataUpdated;
};

export const addEspecialidad = (
  array: Array<Especialidad>,
  data: Especialidad
): Array<Especialidad> => {
  array.push(data);

  return array;
};
