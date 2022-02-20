# Join Pipe

A pipe to join items in an array with a separator. 
It has one optional argument, `separator`, to be used as a separator between array items.
If omitted, the default value is ', '

<ngs-code-block-with-header file-name="join.pipe.ts">

```typescript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'join'
})
export class JoinPipe implements PipeTransform {

	transform(array: unknown[], separator: string = ', '): string {
		return array.join(separator);
	}
}
```

</ngs-code-block-with-header> 

## Usage

Use it in the component template

<ngs-code-block-with-header>

```html
{{ ["item1", "item2", "item3"] | join }}
{{ ["item1", "item2", "item3"] | join: '-' }}
```

</ngs-code-block-with-header>

Result: 

```html
item1, item2, item3
item1-item2-item3
```
