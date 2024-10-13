export const Especialidades = [
  {
    id: 1,
    nombre: "Cardiología",
  },
  {
    id: 2,
    nombre: "Pediatría",
  },
  {
    id: 3,
    nombre: "Dermatología",
  },
];

export const Medicos = [
  {
    id: 101,
    nombre: "Juan",
    apellido: "Pérez",
    matricula: "1234",
    especialidad: {
      id: 1,
      nombre: "Cardiología",
    },
    diasAtencion: ["Lunes", "Miércoles"],
    horaInicio: "08:00",
    horaFin: "14:00",
    dni: "20123456",
  },
  {
    id: 102,
    nombre: "Ana",
    apellido: "González",
    matricula: "3456",
    especialidad: {
      id: 2,
      nombre: "Pediatría",
    },
    diasAtencion: ["Martes", "Jueves"],
    horaInicio: "09:00",
    horaFin: "15:00",
    dni: "30123456",
  },
  {
    id: 103,
    nombre: "Carlos",
    apellido: "López",
    matricula: "4567",
    especialidad: {
      id: 3,
      nombre: "Dermatología",
    },
    diasAtencion: ["Lunes", "Martes"],
    horaInicio: "10:00",
    horaFin: "16:00",
    dni: "40123456",
  },
  {
    id: 104,
    nombre: "María",
    apellido: "Martínez",
    matricula: "7897",
    especialidad: {
      id: 1,
      nombre: "Cardiología",
    },
    diasAtencion: ["Miércoles", "Jueves"],
    horaInicio: "12:00",
    horaFin: "18:00",
    dni: "50123456",
  },
];
