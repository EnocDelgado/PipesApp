import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {

  transform( value: boolean, ): 'Fly' | 'No fly' {
    return value ? 'Fly' : 'No fly';
  }

}
