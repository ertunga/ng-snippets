import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code-block-with-header',
  templateUrl: './code-block-with-header.component.html',
  styleUrls: ['./code-block-with-header.component.scss']
})
export class CodeBlockWithHeaderComponent {

  @Input() fileName = '';
  @ViewChild('code') codeElementRef: ElementRef | undefined;

  constructor() { }

  copy(): void {
    console.log('copy yo');
    console.log(this.codeElementRef?.nativeElement.querySelector('pre code').innerText);
  }
}

