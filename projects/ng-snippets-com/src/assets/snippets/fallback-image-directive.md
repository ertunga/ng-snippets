# Click Outside Directive

A directive that can detect clicks outside of the HTML element it is attached to. 
`clickOutside` event emitter will emit the `Event` for each click. 
You can pass it as a parameter for your method or completely omit it.

<code-block-with-header fileName="fallback-image.directive.ts">

```typescript
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: 'img[fallbackImage]'
})
export class FallbackImageDirective {

    @Input() fallbackImage!: string;

    constructor(private elementRef: ElementRef) { }

    @HostListener('error')
    setFallbackImage(): void {
        if (!this.fallbackImage) {
            throw new Error('fallbackImage directive requires a value. Example: <img src="https://broken-link-that-doesnt-work" fallbackImage="./assets/placeholder.svg" alt="...">');
        }

        const imageElement = this.elementRef.nativeElement as HTMLImageElement;
        imageElement.src = this.fallbackImage;
    }
}
```

</code-block-with-header>

## Usage

One common scenario would be detecting clicks outside of a drawer or a dropdown in order to close them.

```html
<div (clickOutside)="close($event)" class="dropdown">
    Dropdown Content
</div>
```

