import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citatorio-escuelas',
  templateUrl: './citatorio-escuelas.component.html',
  styleUrls: ['./citatorio-escuelas.component.css']
})
export class CitatorioEscuelasComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}