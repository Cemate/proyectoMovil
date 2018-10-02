import { FormatoService } from './../../../../services/formato.service';
import { Component, OnInit } from '@angular/core';
import { DatosService } from './../../../../services/datos.service';

@Component({
  selector: 'app-datos-formato',
  templateUrl: './datos-formato.component.html',
  styleUrls: ['./datos-formato.component.css']
})
export class DatosFormatoComponent implements OnInit {
  director: 'DIRECTOR DE LA ESCUELA';
  nombre: string;
  sexo = 'hombre';
  edad: string;
  localidad = 'Buenavista Loxicha';
  periodo = 'año 2018';
  nombrado = 'en una reunion';
  nombramiento: string;

  // datos citatorio
  activarCom;
  comite: string;
  escuela: 'ESC. PRIMARIA';
  fechaCita: string;

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

  tamFuente = 12;

  constructor(public _datosFormato: DatosService,
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
  actComite() {
    this._datosFormato.comite = this.comite;
  }

  actdirector() {
    this._datosFormato.director = this.director;
  }

  toggleVisibility(e) {
    this.activarCom =  e.target.checked;
    this._datosFormato.activarComite = this.activarCom;
  }

  actEscuela() {
    this._datosFormato.escuela = this.escuela;
  }
  actFechaCita() {
    this._datosFormato.fechaCita = this.fechaCita;
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
