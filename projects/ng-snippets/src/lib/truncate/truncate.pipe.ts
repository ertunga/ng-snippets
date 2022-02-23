import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, suffix: string = '...'): string {
    if (length <= 0) {
      throw new Error('Truncation length must be larger than 0');
    }

    if (value.length > length) {
      return value.substring(0, length) + suffix;
    }

    return value;
  }
}
