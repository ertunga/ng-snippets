import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {
    transform(value: string, truncationLength: number, suffix: string = '...'): string {
        return value.split(' ').length > truncationLength ? value.split(' ').slice(0, truncationLength).join(' ') + suffix : value;
    }
}
