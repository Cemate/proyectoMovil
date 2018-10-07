import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  agente = 'LIC. GASPAR MELCHOR MONJARAZ JOSÉ';
  sindico = 'nombre del sindico';
  sindicoAux = 'nombre del sindico aux';
  director = 'DIRECTOR DE LA ESCUELA';
  comite = 'COMITE DE PADRES DE FAMILIA';
  escuela = 'ESC. PRIMARIA';
  fechaCita = 'MARTES 16 DE OCTUBRE DEL PRESENTE AÑO A LAS 4:00 DE LA TARDE';
  activarComite: any;
  ocupacion = 'CAMPESINO';
  vendedor: string;
  ubicacion = 'LA RANCHERIA EL CUAPINOL';
  norte = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
  sur = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
  oriente = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
  poniente = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
  sexoVendedor = 'hombre';
  tutor = 'SU PADRE EL C.';
  ocupacionTutor: string;
  ingresoTutor: string;
  descripcionIngreso: string;

  sexoTutor = 'hombre';
  vecinoDe = 'ESTA POBLACION DE BUENAVISTA LOXICHA';
  padre: string;
  madre: string;
  diaDeceso: number;
  mesDeceso: string;
  anioDeceso: string;
  horaDeceso: any;
  consecuencia: any;
  asuntoCitatorio = 'LA CULTURA DE NUESTRA COMUNIDAD';

  asuntoCitatorioLocatario = 'tratar asuntos que benefician a la buena organización de los mismos locatarios';
  nombre2;

  constructor() {
  }

  fuente = 'verdana, geneva';
  tamFuente = 12;
  tamFuenteLocatarios = 12;

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
