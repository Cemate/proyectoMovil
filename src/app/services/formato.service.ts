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
      imagen: 'origen-vecindad'
    },
    {
      id: 1,
      nombre: 'Liberación de servicio',
      imagen: 'liberacion'
    },
    {
      id: 2,
      nombre: 'C. de nombramiento',
      imagen: 'nombramiento'
    },
    {
      id: 3,
      nombre: 'Citatorio Escuela',
      imagen: 'nombramiento'
    },
    {
      id: 4,
      nombre: 'Constancia poseción',
      imagen: 'nombramiento'
    },
    {
      id: 5,
      nombre: 'Ingresos económicos',
      imagen: 'nombramiento'
    },
    {
      id: 6,
      nombre: 'C. Ants. No Penales',
      imagen: 'nombramiento'
    },
    {
      id: 7,
      nombre: 'C. Domicilio',
      imagen: 'nombramiento'
    },
    {
      id: 8,
      nombre: 'C. de Defunción',
      imagen: 'nombramiento'
    },
    {
      id: 9,
      nombre: 'Citatorio',
      imagen: 'nombramiento'
    },
    {
      id: 10,
      nombre: 'Citatorio Locatarios',
      imagen: 'nombramiento'
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
    // if (this.id) {
    //   this.formato = this.formatos[this.id - 1];
    //   return this.formatos[this.id - 1];
    // } else {
    //   return {
    //     id: 0,
    //     nombre: '',
    //     imagen: ''
    //   }
    // }
    this.formato = this.formatos[id];
    return this.formatos[id];
  }

  cambiarBusqueda(termino: string) {
    this.busqueda = termino;
  }

}
