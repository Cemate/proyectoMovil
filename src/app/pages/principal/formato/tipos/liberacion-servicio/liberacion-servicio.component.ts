import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-liberacion-servicio',
  templateUrl: './liberacion-servicio.component.html',
  styleUrls: ['./liberacion-servicio.component.css']
})
export class LiberacionServicioComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
