# Click Outside Directive

A directive that can listen for clicks outside of the HTML element it is attached to.
You can pass `Event` as a parameter for your method or completely omit it.

## Usage

One common scenario would be detecting clicks outside of a dropdown, modal or a drawer in order to close them.

<ngs-code-block-with-header>

```html
<div (clickOutside)="close($event)">Dropdown Content</div>
```

</ngs-code-block-with-header>

## Source

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/click-outside/click-outside.directive.ts" target="_blank">Source</a>
