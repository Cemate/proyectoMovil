import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-formatos2',
  templateUrl: './header-formatos2.component.html',
  styleUrls: ['./header-formatos2.component.css']
})
export class HeaderFormatos2Component implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
