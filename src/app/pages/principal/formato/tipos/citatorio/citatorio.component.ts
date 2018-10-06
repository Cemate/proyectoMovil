import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-citatorio',
  templateUrl: './citatorio.component.html',
  styleUrls: ['./citatorio.component.css']
})
export class CitatorioComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
