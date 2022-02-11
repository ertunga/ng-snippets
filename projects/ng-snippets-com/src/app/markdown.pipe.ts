import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import MarkedOptions = marked.MarkedOptions;

@Pipe({
	name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
	transform(value: string, options?: MarkedOptions): string {
		return value ? marked(value, options) : '';
	}
}
