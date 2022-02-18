# Click Outside Directive

A directive that can detect clicks outside of the HTML element it is attached to. 
`clickOutside` event emitter will emit the `Event` for each click. 
You can pass it as a parameter for your method or completely omit it.

<ngs-code-block-with-header fileName="click-outside.directive.ts">

```typescript
import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
	selector: '[clickOutside]'
})
export class ClickOutsideDirective {

	@Output() clickOutside = new EventEmitter<Event>();

	constructor(private elementRef: ElementRef) { }

	@HostListener('document:click', ['$event'])
	handleClick(event: Event): void {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.clickOutside.emit(event);
		}
	}
}
```

</ngs-code-block-with-header>

## Usage

One common scenario would be detecting clicks outside of a drawer or a dropdown in order to close them.

<ngs-code-block-with-header>

```html
<div (clickOutside)="close($event)" class="dropdown">
    Dropdown Content
</div>
```

</ngs-code-block-with-header>
