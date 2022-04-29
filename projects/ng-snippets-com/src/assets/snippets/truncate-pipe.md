# Truncate Pipe

A pipe to truncate a text based on length. Takes two parameters: `truncationLength` and `suffix`.
First parameter `truncationLength` is mandatory and it determines the length of the truncated text.
Second parameter `suffix` is optional and when omitted the default value is `...`

## Usage

Use it in the component template

<ngs-code-block-with-header>

```
{{ "Text to be truncated" | truncate: 17 }}
{{ "Different suffix" | truncate: 14: '__' }}
{{ "Short text" | truncate: 12 }}
```

</ngs-code-block-with-header>

Result:

```
Text to be trunca...
Different suff__
Short text
```

## Source

<ngs-code-block-with-header file-name="truncate.pipe.ts">

```typescript
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
```

</ngs-code-block-with-header>
