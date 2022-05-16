import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {
    transform(value: string, wordCount: number, suffix: string = '...'): string {
        const words = value.split(' ');
        return words.length > wordCount ? words.slice(0, wordCount).join(' ') + suffix : value;
    }
}
