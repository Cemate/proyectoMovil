import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-policia-mun',
  templateUrl: './solicitud-policia-mun.component.html',
  styleUrls: ['./solicitud-policia-mun.component.css']
})
export class SolicitudPoliciaMunComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
