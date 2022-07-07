import { Curso } from "./curso";
import { Estudiante } from "./estudiante";

export interface Asignatura {
  nombre: string,
  curso: Curso,
  estudiantes: Estudiante[]
}
