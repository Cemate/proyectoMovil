import { Injectable } from '@angular/core';
import { Formato } from './../interfaces/formato.interface';

@Injectable({
  providedIn: 'root'
})
export class FormatoService {

  id= 1;
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
      nombre: 'C. de Liberación de servicio',
      imagen: 'liberacion'
    },
    {
      id: 3,
      nombre: 'C. de nombramiento',
      imagen: 'nombramiento'
    }
  ];

  constructor() {
   }

  getFormatos(): Formato[] {
    return this.formatos;
  }

  getFormato() {
    return this.formatos[this.id];
  }

  cambiarBusqueda(termino: string) {
    this.busqueda = termino;
  }

}
