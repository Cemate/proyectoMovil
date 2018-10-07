import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';

@Component({
  selector: 'app-footer-sindico-aux-ysinuxsuplente',
  templateUrl: './footer-sindico-aux-ysinuxsuplente.component.html',
  styleUrls: ['./footer-sindico-aux-ysinuxsuplente.component.css']
})
export class FooterSindicoAuxYSinuxsuplenteComponent implements OnInit {

  constructor(public _datos: DatosService) { }

  ngOnInit() {
  }

}
