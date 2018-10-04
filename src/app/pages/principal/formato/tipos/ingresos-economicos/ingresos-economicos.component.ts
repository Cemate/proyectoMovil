import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos-economicos',
  templateUrl: './ingresos-economicos.component.html',
  styleUrls: ['./ingresos-economicos.component.css']
})
export class IngresosEconomicosComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
