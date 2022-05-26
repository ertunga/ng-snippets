# Truncate Words Pipe

Truncate a text based on number of words. Takes two parameters: `wordCount` and `suffix`.
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

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/truncate-words/truncate-words.pipe.ts" target="_blank">Source</a>
