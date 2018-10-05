import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defuncion',
  templateUrl: './defuncion.component.html',
  styleUrls: ['./defuncion.component.css']
})
export class DefuncionComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
