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
