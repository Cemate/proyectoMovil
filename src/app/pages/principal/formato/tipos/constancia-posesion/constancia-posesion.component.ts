import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constancia-posesion',
  templateUrl: './constancia-posesion.component.html',
  styleUrls: ['./constancia-posesion.component.css']
})
export class ConstanciaPosesionComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
