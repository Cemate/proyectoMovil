import { Injectable } from '@angular/core';
import { Formato } from './../interfaces/formato.interface';

@Injectable({
  providedIn: 'root'
})
export class FormatoService {

  id: number;
  busqueda = '';
  formatosFiltrados: any = [];

  private formatos: Formato[] = [
    {
      id: 1,
      nombre: 'C. de Origen y vecidad',
      imagen: 'origen-vecindad'
    },
    {
      id: 2,
      nombre: 'Liberación de servicio',
      imagen: 'liberacion'
    },
    {
      id: 3,
      nombre: 'C. de nombramiento',
      imagen: 'nombramiento'
    },
    {
      id: 4,
      nombre: 'Citatorio Escuela',
      imagen: 'nombramiento'
    },
    {
      id: 5,
      nombre: 'Constancia poseción',
      imagen: 'nombramiento'
    }
  ];

  constructor() {
   }

  getFormatos(): Formato[] {
    return this.formatos;
  }

  getFormato() {
    return this.formatos[this.id - 1];
  }

  cambiarBusqueda(termino: string) {
    this.busqueda = termino;
  }

}
