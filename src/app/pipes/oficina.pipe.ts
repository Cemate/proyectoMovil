import { Pipe, PipeTransform } from '@angular/core';
import { Formato } from './../interfaces/formato.interface';

@Pipe({
  name: 'oficina'
})
export class OficinaPipe implements PipeTransform {

  transform(value: Formato[], filterText?: string): Formato[] {
    filterText = filterText ? filterText.toLowerCase() : null;
    return filterText ? value.filter((x: Formato) => x.oficina.toLowerCase().indexOf(filterText) >= 0) : value;
  }

}
