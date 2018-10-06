import { ActivatedRoute } from '@angular/router';
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

  // datos poseción
  ocupacion: string;
  vendedor: string;
  sexoVendedor: string;
  ubicacion: string;
  norte: string;
  sur: string;
  oriente: string;
  poniente: string;

  // datos
  tutor =  'SU PADRE EL C.';
  ocupacionTutor: string;
  ingresoTutor: string;
  descripcionIngreso: string;
  sexoTutor;

  // datos C. de Domicilio
  vecinoDe: 'ESTA POBLACION DE BUENAVISTA LOXICHA';
  padre: string;
  madre: string;

  // C. de Defunción
  horaDeceso: any;
  diaDeceso = 1;
  mesDeceso = 'OCTUBRE';
  anioDeceso = '2018';
  consecuencia = 1;

  // Citatorio
  asuntoCitatorio = 'RELACIONADO CON LA CULTURA DE NUESTRA COMUNIDAD';

  dia = 1;
  mes = 'OCTUBRE';
  anio = '2018';

  tamFuente = 12;

  idFormato: any;

  constructor(public _datosFormato: DatosService,
    private actRoute: ActivatedRoute) {

      this.actRoute.params.subscribe( params => {
        this.idFormato = params['id'];
        console.log('hola ' + this.idFormato);
       });

      this.norte = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
      this.sur = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
      this.oriente = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
      this.poniente = '1 METRO Y COLINDA CON EL PREDIO DEL SEÑOR JUAN JOSE ENRIQUEZ';
  }

  ngOnInit() {
  }

  actNombre() {
    this._datosFormato.nombre = this.nombre;
  }
  actSexo(sexo: string) {
    this._datosFormato.sexo = sexo;
  }

  actSexoVendedor(sexo: string) {
    this._datosFormato.sexoVendedor = sexo;
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

  // Funciones de ocupacion
  actOcupacion() {
    this._datosFormato.ocupacion = this.ocupacion;
  }

  actVendedor() {
    this._datosFormato.vendedor = this.vendedor;
  }

  actUblicacion() {
    this._datosFormato.ubicacion = this.ubicacion;
  }

  actNorte() {
    this._datosFormato.norte = this.norte;
  }

  actSur() {
    this._datosFormato.sur = this.sur;
  }

  actOriente() {
    this._datosFormato.oriente = this.oriente;
  }

  actPoniente() {
    this._datosFormato.poniente = this.poniente;
  }

  // funciones ingresos
  actTutor() {
    this._datosFormato.tutor = this.tutor;
  }

  actOcupacionTutor() {
    this._datosFormato.ocupacionTutor = this.ocupacionTutor;
  }

  actIngreso() {
    this._datosFormato.ingresoTutor = this.ingresoTutor;
  }

  actDescripcionIngreso() {
    this._datosFormato.descripcionIngreso = this.descripcionIngreso;
  }
  actSexoTutor(sexo: string) {
    this._datosFormato.sexoTutor = this.sexoTutor;
  }

  actVecinoDe() {
    this._datosFormato.vecinoDe = this.vecinoDe;
  }
  actPadre() {
    this._datosFormato.padre = this.padre;
  }
  actMadre() {
    this._datosFormato.madre = this.madre;
  }
  actConsecuencia() {
    this._datosFormato.consecuencia = this.consecuencia;
  }

// Funciones C. de Defunción
actHoraDeceso() {
  this._datosFormato.horaDeceso = this.horaDeceso;
}
actDiaDeceso() {
    this._datosFormato.diaDeceso = this.diaDeceso;
  }
  actMesDeceso() {
    this._datosFormato.mesDeceso = this.mesDeceso;
  }
  actAnioDeceso() {
    this._datosFormato.anioDeceso = this.anioDeceso;
  }

  // Citatorio
  actAsuntoCitatorio() {
    this._datosFormato.asuntoCitatorio = this.asuntoCitatorio;
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
