import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antecedentes-no-penales',
  templateUrl: './antecedentes-no-penales.component.html',
  styleUrls: ['./antecedentes-no-penales.component.css']
})
export class AntecedentesNoPenalesComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
