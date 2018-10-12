import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-header-formatos',
  templateUrl: './header-formatos.component.html',
  styleUrls: ['./header-formatos.component.css']
})
export class HeaderFormatosComponent implements OnInit {

  constructor( public _datos: DatosService) { }

  ngOnInit() {
  }

}
