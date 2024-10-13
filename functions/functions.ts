import { Especialidades, Medicos } from "../mock/data";
import { Especialidad } from "../types/Especialidad";
import { Medico } from "../types/Medico";

export const deleteEspecialidad = (
  data: Array<Especialidad>,
  id: number
): Array<Especialidad> => {
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    Especialidades.splice(index, 1);
  }

  return data.filter((item) => item.id !== id);
};

export const deleteMedico = (
  data: Array<Medico>,
  id: number
): Array<Medico> => {
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    Medicos.splice(index, 1);
  }

  return data.filter((item) => item.id !== id);
};

export const addEspecialidad = (
  array: Array<Especialidad>,
  nombre: string
): Array<Especialidad> => {
  const nuevaEspecialidad = {
    id: array.length + 1,
    nombre: nombre,
  };
  array.push(nuevaEspecialidad);

  return array;
};

export const updateEspecialidad = (
  array: Array<Especialidad>,
  nombre: string,
  id: number
): Array<Especialidad> => {
  console.log(nombre);
  let index = array.findIndex((esp) => esp.id === id);

  if (index === -1) return;

  array[index].nombre = nombre;

  return array;
};
