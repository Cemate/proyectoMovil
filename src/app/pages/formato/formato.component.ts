import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormatoService } from './../../services/formato.service';
import { Formato } from '../../interfaces/formato.interface';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.css']
})
export class FormatoComponent{

  formato: any = {};

  constructor( private actRoute: ActivatedRoute,
               private _formato: FormatoService) {
                 this.actRoute.params.subscribe( params => {
                  this.formato = this._formato.getFormato( params['id']);
                  console.log(this.formato);
                 });
               }
}
