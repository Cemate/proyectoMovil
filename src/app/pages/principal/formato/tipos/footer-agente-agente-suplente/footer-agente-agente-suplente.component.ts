import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer-agente-agente-suplente',
  templateUrl: './footer-agente-agente-suplente.component.html',
  styleUrls: ['./footer-agente-agente-suplente.component.css']
})
export class FooterAgenteAgenteSuplenteComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
