import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-sindico',
  templateUrl: './footer-sindico.component.html',
  styleUrls: ['./footer-sindico.component.css']
})
export class FooterSindicoComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
