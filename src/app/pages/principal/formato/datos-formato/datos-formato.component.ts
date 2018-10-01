import { DatosService } from './../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-formato',
  templateUrl: './datos-formato.component.html',
  styleUrls: ['./datos-formato.component.css']
})
export class DatosFormatoComponent implements OnInit {
  nombre: string;
  sexo: string;
  edad: string;
  localidad = 'Buenavista Loxicha';
  periodo = 'periodo 2018';
  nombrado = 'de manera voluntaria';

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

  constructor( public _datosFormato: DatosService) { }

  ngOnInit() {
  }

  actNombre() {
    this._datosFormato.nombre = this.nombre;
  }
  actSexo() {
    this._datosFormato.sexo = this.sexo;
  }
  actEdad() {
    this._datosFormato.edad = this.edad;
  }
  actLocalidad() {
    this._datosFormato.localidad = this.localidad;
  }
  actPeriodo() {
    this._datosFormato.periodo = this.periodo;
  }
  actNombrado() {
    this._datosFormato.nombrado = this.nombrado;
  }
  actDia() {
    this._datosFormato.dia = this.dia;
  }
  actMes() {
    this._datosFormato.mes = this.mes;
  }
  actAnio() {
    this._datosFormato.anio = this.anio;
  }

}
