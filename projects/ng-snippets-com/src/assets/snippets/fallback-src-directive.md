# Fallback Src Directive

Use this directive with any `img` element to show a placeholder image in case the link in `src` is broken or cease to exist.
You can provide a fallback image from the assets folder, or you can provide any other URL.

## Usage

<ngs-code-block-with-header>

```html
<img src="http://broken-link-that-doesnt-work" fallbackSrc="./assets/placeholder-avatar.png" alt="" />
<img src="http://broken-link-that-doesnt-work" fallbackSrc="https://via.placeholder.com/200x200" alt="" />
```

</ngs-code-block-with-header>

## Source

<ngs-code-block-with-header file-name="fallback-src.directive.ts">

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[fallbackSrc]'
})
export class FallbackSrcDirective {
    @Input() fallbackSrc: string | undefined;

    constructor(private elementRef: ElementRef) {}

    @HostListener('error')
    setFallbackSrc(): void {
        if (!this.fallbackSrc) {
            throw new Error(
                'fallbackSrc directive requires a value. Example: <img src="https://broken-link-that-doesnt-work" fallbackSrc="./assets/placeholder.svg" alt="...">'
            );
        }

        const imageElement = this.elementRef.nativeElement as HTMLImageElement;
        imageElement.src = this.fallbackSrc;
    }
}
```

</ngs-code-block-with-header>
