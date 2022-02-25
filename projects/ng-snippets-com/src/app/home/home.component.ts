import { Component } from '@angular/core';
import { snippets } from '../snippets';

@Component({
	selector: 'ngs-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	snippets = snippets;
}
