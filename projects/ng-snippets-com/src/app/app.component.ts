import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { snippets } from './snippets';

@Component({
	selector: 'ngs-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	snippets = snippets;
	isOpened = false;

	constructor(@Inject(DOCUMENT) private document: Document) {}

	toggleMenu(): void {
		this.isOpened ? this.closeMenu() : this.openMenu();
	}

	private openMenu(): void {
		if (!this.isOpened) {
			this.isOpened = true;
			this.document.body.classList.add('overflow-hidden');
		}
	}

	closeMenu(): void {
		if (this.isOpened) {
			this.isOpened = false;
			this.document.body.classList.remove('overflow-hidden');
		}
	}
}
