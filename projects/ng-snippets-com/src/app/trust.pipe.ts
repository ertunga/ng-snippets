import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
	name: 'trust'
})
export class TrustPipe implements PipeTransform {
	constructor(private domSanitizer: DomSanitizer) {}

	transform(value: string): SafeHtml {
		return this.domSanitizer.bypassSecurityTrustHtml(value);
	}
}
