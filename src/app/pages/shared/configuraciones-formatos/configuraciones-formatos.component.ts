import { FormatoService } from './../../../services/formato.service';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../services/datos.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-configuraciones-formatos',
  templateUrl: './configuraciones-formatos.component.html',
  styleUrls: ['./configuraciones-formatos.component.css']
})
export class ConfiguracionesFormatosComponent implements OnInit {

  agente: string;
  agenteSup: string;
  sindico: string;
  sindicoAux: string;
  agencia: string;
  agenciaLogo: string;

  origen = true;
  liberacion = true;
  nombramiento = true;
  escuela = true;
  posecion = true;
  economico = true;
  penales = true;
  domicilio = true;
  defuncion = true;
  citatorio = true;
  locatarios = true;
  policia = true;

  formatos: any;

  constructor(public _datos: DatosService,
              public _formato: FormatoService,
              public auth: AuthService) {
    this.formatos = this._formato.getFormatos();
  this.agente = this._datos.agente;
  this.agenteSup = this._datos.agenteSup;
  this.sindico = this._datos.sindico;
  this.sindicoAux = this._datos.sindicoAux;
  this.agencia = this._datos.agencia;
  this.agenciaLogo = this._datos.agenciaLogo;

  }

  ngOnInit() {
  }

  actAgente() {
    this._datos.agente = this.agente;
  }
  actAgenteSup() {
    this._datos.agenteSup = this.agenteSup;
  }
  actSindico() {
    this._datos.sindico = this.sindico;
  }
  actSindicoAux() {
    this._datos.sindicoAux = this.sindicoAux;
  }
  actAgencia() {
    this._datos.agencia = this.agencia;
  }
  actAgenciaLogo() {
    this._datos.agenciaLogo = this.agenciaLogo;
  }

  activarFormato(i) {
    this._formato.activarFormato(i);
  }
  // activarLiberacion(e) {
  //   this._datosFormato.activarComite = e.target.checked;
  // }
  // activarNombramiento(e) {
  //   this._datosFormato.activarComite = e.target.checked;
  // }
  // activarCitatorioEscuela(e) {
  //   this._datosFormato.activarComite = e.target.checked;
  // }
  // activarPosecion(e) {
  //   this._datosFormato.activarComite = e.target.checked;
  // }
  // activarEconomicos(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarPenales(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarDomicilio(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarDefuncion(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarCitatorio(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarLocatarios(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }
  // activarPolicia(e) {
  //   this._datosFormato.activar = e.target.checked;
  // }

}
