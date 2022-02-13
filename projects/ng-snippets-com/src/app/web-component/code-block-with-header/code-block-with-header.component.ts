import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  templateUrl: './code-block-with-header.component.html',
  styleUrls: ['./code-block-with-header.component.scss']
})
export class CodeBlockWithHeaderComponent {

  @Input() fileName = '';
  @ViewChild('code') codeElementRef: ElementRef | undefined;

  constructor() { }

  copyToClipboard(): void {
    const code = this.codeElementRef?.nativeElement.querySelector('pre code')?.innerText;

    if (code) {
      navigator.clipboard.writeText(code);
    }
  }
}

