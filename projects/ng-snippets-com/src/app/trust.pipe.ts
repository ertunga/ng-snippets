import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'trust',
})
export class TrustPipe implements PipeTransform {
	constructor(private domSanitizer: DomSanitizer) {}

	transform(value: string): string {
		return <string>this.domSanitizer.bypassSecurityTrustHtml(value);
	}
}
