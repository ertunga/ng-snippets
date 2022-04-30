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

<ngs-code-block-with-header file-name="click-outside.directive.ts">

```typescript
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() clickOutside = new EventEmitter<Event>();

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    handleClick(event: Event): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.clickOutside.emit(event);
        }
    }
}
```

</ngs-code-block-with-header>
