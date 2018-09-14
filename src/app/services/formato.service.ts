import { Injectable } from '@angular/core';
import { Formato } from './../interfaces/formato.interface';

@Injectable({
  providedIn: 'root'
})
export class FormatoService {

  private formatos: Formato[] = [
    {
      id: 1,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato1'
    },
    {
      id: 2,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato4'
    },
    {
      id: 3,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato2'
    },
    {
      id: 4,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato3'
    },
    {
      id: 5,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato4'
    },
    {
      id: 6,
      nombre: 'Constancia de origen y vecindad',
      imagen: 'formato1'
    }
  ];

  constructor() {
   }

  getFormatos(): Formato[] {
    return this.formatos;
  }

  getFormato(id: number) {
    return this.formatos[id];
  }
}
