import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";
import {snippets} from "./snippets";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	snippets = snippets;
	isOpened = false;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private router: Router
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
