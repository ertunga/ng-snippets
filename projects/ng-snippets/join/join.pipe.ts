import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(array: unknown[], separator: string = ', '): string {
        return array.join(separator);
    }
}
