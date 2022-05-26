# Join Pipe

A pipe to join items in an array with a separator.
It has one optional parameter, `separator`, to be used as a separator between array items.
If omitted, the default value is a comma followed by an empty space `, `

## Usage

Use it in the component template

<ngs-code-block-with-header>

```
{{ ["item1", "item2", "item3"] | join }}
{{ ["item1", "item2", "item3"] | join: '-' }}
{{ ["item1", "item2", "item3"] | join: ' > ' }}
```

</ngs-code-block-with-header>

Result:

```
item1, item2, item3
item1-item2-item3
item1 > item2 > item3
```

## Source

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/join/join.pipe.ts" target="_blank">Source</a>
