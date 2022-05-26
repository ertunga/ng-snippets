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

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/truncate/truncate.pipe.ts" target="_blank">Source</a>
