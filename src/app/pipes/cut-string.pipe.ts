import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string, limit= 25 , ellipsis= '...'): string {
    return `${value.substr(0, limit)}${value.length > limit ? ellipsis : ''}`;
  }

}
