import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  director = 'DIRECTOR DE LA ESCUELA';
  comite = 'COMITE DE PADRES DE FAMILIA';
  escuela = 'ESC. PRIMARIA';
  fechaCita = 'MARTES 16 DE OCTUBRE DEL PRESENTE AÑO A LAS 4:00 DE LA TARDE';
  activarComite: any;

  constructor() {
  }

  fuente = 'verdana, geneva';
  tamFuente = 12;

  nombre: string;
  sexo = 'hombre';
  edad: string;
  localidad = 'BUENAVISTA LOXICHA';
  periodo = 'año 2018';
  nombramiento = 'Presidente';
  nombrado = 'en una reunion';

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

  // actNombre(nombre: string) {
  //   this.nombre = nombre;
  // }
  // actSexo(sexo: string) {
  //   this.sexo = sexo;
  // }
  // actEdad(edad: string) {
  //   this.edad = edad;
  // }
  // actLocalidad(localidad: string) {
  //   this.localidad = localidad;
  // }
  // actPeriodo(periodo: string) {
  //   this.periodo = periodo;
  // }
  // actNombrado(nombrado: string) {
  //   this.nombrado = nombrado;
  // }
  // actDia(dia: any) {
  //   this.dia = dia;
  // }
  // actMes(mes: string) {
  //   this.mes = mes;
  // }
  // actAnio(anio: string) {
  //   this.anio = anio;
  // }

}
