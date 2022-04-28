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
