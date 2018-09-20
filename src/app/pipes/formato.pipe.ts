import { Formato } from './../interfaces/formato.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {

  transform(value: Formato[], filterText?: string):  Formato[] {
    filterText = filterText ? filterText.toLowerCase() : null;
    return filterText ? value.filter((x: Formato) => x.nombre.toLowerCase().indexOf(filterText) >= 0) : value;
  }

}
