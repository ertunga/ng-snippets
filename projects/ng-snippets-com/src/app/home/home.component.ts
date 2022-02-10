import { Component, Inject } from '@angular/core';
import { snippets } from '../snippets';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	snippets = snippets;
	isOpened = false;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private router: Router,
	) {}

	toggleMenu(): void {
		this.isOpened ? this.closeMenu() : this.openMenu();
	}

	private openMenu(): void {
		this.isOpened = true;
		this.document.body.classList.add('prevent-scroll');
	}

	private closeMenu(): void {
		this.isOpened = false;
		this.document.body.classList.remove('prevent-scroll');
	}

	closeMenuAndNavigate(route: string): void {
		if (this.isOpened) {
			this.closeMenu();
		}
		this.router.navigateByUrl(route);
	}
}
