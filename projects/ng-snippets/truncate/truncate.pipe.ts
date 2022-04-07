import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
	transform(value: string, truncationLength: number, suffix: string = '...'): string {
		if (truncationLength <= 0) {
			throw new Error('Truncation length must be larger than 0');
		}

		return value.length > truncationLength ? value.substring(0, truncationLength) + suffix : value;
	}
}
