import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[fallbackImage]'
})
export class FallbackImageDirective {
    @Input() fallbackImage: string | undefined;

    constructor(private elementRef: ElementRef) {}

    @HostListener('error')
    onError(): void {
        const imageElement = this.elementRef.nativeElement as HTMLImageElement;
        if (this.fallbackImage) {
            imageElement.src = this.fallbackImage;
        }
    }
}
