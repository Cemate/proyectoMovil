import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  nombre: string;
  sexo: string;
  edad: string;
  localidad = 'Buenavista Loxicha';
  periodo = 'periodo 2018';
  nombrado = 'de manera voluntaria';

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

}
