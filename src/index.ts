import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({name: 'round'})
class Round implements PipeTransform {
  transform(value: number, [accuracy: number, keep: boolean]) {
    var fixed = value.toFixed(accuracy);

    return keep ? fixed : +fixed;
  }
}

export default Round;
