# Truncate Words Pipe

Truncate strings based on number of words. Takes two parameters: `wordCount` and `suffix`.
First parameter `wordCount` is mandatory and it determines the number of words.
Second parameter `suffix` is optional, default value is `...`

## Usage

Use it in the component template

<ngs-code-block-with-header>

```
{{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' | truncateWords: 4 }}
{{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' | truncateWords: 7:'-' }}
{{ 'Lorem ipsum dolor sit amet' | truncateWords: 15 }}
```

</ngs-code-block-with-header>

Result:

```
Lorem ipsum dolor sit...
Lorem ipsum dolor sit amet, consectetur adipiscing-
Lorem ipsum dolor sit amet
```

## Source

<ngs-code-block-with-header file-name="truncate-words.pipe.ts">

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {
    transform(value: string, wordCount: number, suffix: string = '...'): string {
        return value.split(' ').length > wordCount ? value.split(' ').slice(0, wordCount).join(' ') + suffix : value;
    }
}
```

</ngs-code-block-with-header>
