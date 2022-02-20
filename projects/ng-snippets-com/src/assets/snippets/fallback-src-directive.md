# Fallback Src Directive

Use this directive with any `img` element to prevent broken images caused by external URLs that doesn't work or exist.
You can provide a fallback image from the assets folder, or you can provide any URL.

<ngs-code-block-with-header file-name="fallback-src.directive.ts">

```typescript
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
	selector: 'img[fallbackSrc]'
})
export class FallbackSrcDirective {

	@Input() fallbackSrc: string | undefined;

	constructor(private elementRef: ElementRef) { }

	@HostListener('error')
	setFallbackSrc(): void {
		if (!this.fallbackSrc) {
			throw new Error('fallbackSrc directive requires a value. Example: <img src="https://broken-link-that-doesnt-work" fallbackSrc="./assets/placeholder.svg" alt="...">');
		}

		const imageElement = this.elementRef.nativeElement as HTMLImageElement;
		imageElement.src = this.fallbackSrc;
	}
}

```

</ngs-code-block-with-header>

## Usage 

`fallbackSrc` directive can only be used on `img` elements. You can pass an image from the assets folder or provide any URL.

<ngs-code-block-with-header>

```html
<img src="https://broken-link-that-doesnt-work" fallbackSrc="./assets/placeholder.jpeg" alt="Alt text here">
<img src="https://broken-link-that-doesnt-work" fallbackSrc="https://via.placeholder.com/150" alt="Alt text here">
```

</ngs-code-block-with-header>
