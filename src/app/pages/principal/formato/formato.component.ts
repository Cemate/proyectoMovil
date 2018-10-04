import { FormatoService } from './../../../services/formato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.css']
})
export class FormatoComponent implements OnInit {

  formato: any = {};

  constructor( private actRoute: ActivatedRoute,
               private _formato: FormatoService) {
               }

  ngOnInit() {
    this.actRoute.params.subscribe( params => {
      this.formato = this._formato.getFormato();
      console.log(this.formato.nombre);
      console.log(params['id']);
     });
    }
}
