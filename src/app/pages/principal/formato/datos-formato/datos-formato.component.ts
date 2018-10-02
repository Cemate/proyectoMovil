import { FormatoService } from './../../../../services/formato.service';
import { Component, OnInit } from '@angular/core';
import { DatosService } from './../../../../services/datos.service';

@Component({
  selector: 'app-datos-formato',
  templateUrl: './datos-formato.component.html',
  styleUrls: ['./datos-formato.component.css']
})
export class DatosFormatoComponent implements OnInit {
  nombre: string;
  sexo = 'hombre';
  edad: string;
  localidad = 'Buenavista Loxicha';
  periodo = 'año 2018';
  nombrado = 'en una reunion';
  nombramiento: string;

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

  tamFuente = 12;

  constructor( public _datosFormato: DatosService,
               public _formato: FormatoService) {
  }

  ngOnInit() {
  }

  actNombre() {
    this._datosFormato.nombre = this.nombre;
  }
  actSexo(sexo: string) {
    this._datosFormato.sexo = sexo;
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
  actNombramiento() {
    this._datosFormato.nombramiento = this.nombramiento;
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

  onPrint() {
    window.print();
  }

  actFuente() {
    this._datosFormato.tamFuente = this.tamFuente;
    console.log(this.tamFuente);
  }
}
