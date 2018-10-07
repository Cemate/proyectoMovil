import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-citatorio-locatarios',
  templateUrl: './citatorio-locatarios.component.html',
  styleUrls: ['./citatorio-locatarios.component.css']
})
export class CitatorioLocatariosComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
