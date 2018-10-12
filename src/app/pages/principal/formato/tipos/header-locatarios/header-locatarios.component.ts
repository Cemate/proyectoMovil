import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-locatarios',
  templateUrl: './header-locatarios.component.html',
  styleUrls: ['./header-locatarios.component.css']
})
export class HeaderLocatariosComponent implements OnInit {

  constructor( public _datos: DatosService) { }

  ngOnInit() {
  }

}
