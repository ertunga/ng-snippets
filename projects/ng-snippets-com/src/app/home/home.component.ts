import { Component, Inject } from '@angular/core';
import { snippets } from '../snippets';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'ngs-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	snippets = snippets;
}
