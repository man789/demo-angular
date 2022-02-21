import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    let min: number = value/60;
    let sec: number = value%60;
    return(`Minutes ${min.toFixed(0)} , Secondes ${sec}`);
  }

}
