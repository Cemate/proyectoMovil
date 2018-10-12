import { FormatoService } from './../../../services/formato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-inzquierdo',
  templateUrl: './buscador-inzquierdo.component.html',
  styleUrls: ['./buscador-inzquierdo.component.css']
})
export class BuscadorInzquierdoComponent implements OnInit {

  termino: string;

  constructor(public _formato: FormatoService) {
    this.termino = _formato.busqueda;
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    this._formato.cambiarBusqueda(termino);
  }

}
