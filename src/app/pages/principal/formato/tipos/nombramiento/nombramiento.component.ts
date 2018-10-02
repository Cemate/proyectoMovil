import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../../../services/datos.service';
import { FormatoService } from '../../../../../services/formato.service';

@Component({
  selector: 'app-nombramiento',
  templateUrl: './nombramiento.component.html',
  styleUrls: ['./nombramiento.component.css']
})
export class NombramientoComponent implements OnInit {

  constructor(public _datos: DatosService,
              public _formato: FormatoService) { }

  ngOnInit() {
  }

}
