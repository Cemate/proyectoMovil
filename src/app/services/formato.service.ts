import { Injectable } from '@angular/core';
import { Formato } from './../interfaces/formato.interface';

@Injectable({
  providedIn: 'root'
})
export class FormatoService {

  id: number;
  busqueda = '';
  formatosFiltrados: any = [];
  formato: any;

  private formatos: Formato[] = [
    {
      id: 0,
      nombre: 'C. de Origen y vecidad',
      imagen: 'origen-vecindad',
      mostrado: true
    },
    {
      id: 1,
      nombre: 'Liberación de servicio',
      imagen: 'liberacion',
      mostrado: true
    },
    {
      id: 2,
      nombre: 'C. de nombramiento',
      imagen: 'nombramiento',
      mostrado: true
    },
    {
      id: 3,
      nombre: 'Citatorio Escuela',
      imagen: 'escuela',
      mostrado: true
    },
    {
      id: 4,
      nombre: 'Constancia poseción',
      imagen: 'posecion',
      mostrado: true
    },
    {
      id: 5,
      nombre: 'Ingresos económicos',
      imagen: 'economicos',
      mostrado: true
    },
    {
      id: 6,
      nombre: 'C. Ants. No Penales',
      imagen: 'penales',
      mostrado: true
    },
    {
      id: 7,
      nombre: 'C. Domicilio',
      imagen: 'domicilio',
      mostrado: true
    },
    {
      id: 8,
      nombre: 'C. de Defunción',
      imagen: 'defuncion',
      mostrado: true
    },
    {
      id: 9,
      nombre: 'Citatorio',
      imagen: 'reunion',
      mostrado: true
    },
    {
      id: 10,
      nombre: 'Citatorio Locatarios',
      imagen: 'reunion',
      mostrado: true
    },
    {
      id: 11,
      nombre: 'Solicitud policia',
      imagen: 'policia',
      mostrado: true
    }
  ];

  constructor() {
    this.formato = {
      id: '',
      nombre: '',
      imagen: ''
    };
   }

  getFormatos(): Formato[] {
    return this.formatos;
  }

  getFormato(id: any) {
    this.formato = this.formatos[id];
    return this.formatos[id];
  }

  cambiarBusqueda(termino: string) {
    this.busqueda = termino;
  }

  activarFormato(i) {
    this.formatos[i].mostrado = !(this.formatos[i].mostrado);
  }

}
