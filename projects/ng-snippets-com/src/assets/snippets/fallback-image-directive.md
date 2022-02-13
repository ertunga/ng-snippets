# Fallback Image Directive

Use this directive with any img element to prevent broken images caused by external URLs that doesn't work or exist. 
You can provide a fallback image from the assets folder, or you can provide any URL.

<ngs-code-block-with-header file-name="fallback-image.directive.ts">

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

</ngs-code-block-with-header>

## Usage

fallbackImage directive can only be used on img elements. You can pass an image from the assets folder or provide any URL.

<ngs-code-block-with-header>

```html
<img src="https://broken-link-that-doesnt-work" fallbackImage="./assets/placeholder.jpeg" alt="Alt text here">
<img src="https://broken-link-that-doesnt-work" fallbackImage="https://via.placeholder.com/150" alt="Alt text here">
```

</ngs-code-block-with-header>
