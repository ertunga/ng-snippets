# Truncate Pipe

A pipe to truncate strings. Takes two parameters: `length` and `suffix`. 
First parameter `length` is mandatory and it determines the length of the truncated text.
Second parameter `suffix` is optional and when omitted the default value is '...'

<ngs-code-block-with-header file-name="truncate.pipe.ts">

```typescript
import {Pipe, PipeTransform} from '@angular/core';

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
```

</ngs-code-block-with-header>

## Usage

Use it in the component template

<ngs-code-block-with-header>

```html
{{ "Text to be truncated" | truncate: 17 }}
{{ "Different suffix" | truncate: 14: '__' }} 
{{ "Short text" | truncate: 12 }}
```

</ngs-code-block-with-header>

Result: 

```html
Text to be trunca...
Different suff__
Short text
```
