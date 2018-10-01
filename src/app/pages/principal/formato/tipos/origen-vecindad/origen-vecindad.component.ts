import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';
// declare var $: any;

@Component({
  selector: 'app-origen-vecindad',
  templateUrl: './origen-vecindad.component.html',
  styleUrls: ['./origen-vecindad.component.css']
})
export class OrigenVecindadComponent implements OnInit {
  nombre = this._datos.nombre;
  sexo = this._datos.sexo;
  edad = this._datos.edad;
  dia = this._datos.dia;
  mes = this._datos.mes;
  anio = this._datos.anio;

  constructor( public _datos: DatosService) { }

  ngOnInit() {
    // $(document).ready(function() {
      // $("button").click(function(){
      //     var div = $("div");
      //     div.animate({left: '100px'}, "slow");
      //     div.animate({fontSize: '5em'}, "slow");
      // });
      // $(function() { $('textarea').froalaEditor(); });
    // });
  }

}
