import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-agente-sindico',
  templateUrl: './footer-agente-sindico.component.html',
  styleUrls: ['./footer-agente-sindico.component.css']
})
export class FooterAgenteSindicoComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
