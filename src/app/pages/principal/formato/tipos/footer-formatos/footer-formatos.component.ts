import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-footer-formatos',
  templateUrl: './footer-formatos.component.html',
  styleUrls: ['./footer-formatos.component.css']
})
export class FooterFormatosComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
