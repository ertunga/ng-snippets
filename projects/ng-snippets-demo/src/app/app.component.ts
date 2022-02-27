import { Component } from '@angular/core';
import { CounterService } from '../../../ng-snippets/src/lib/counter';

@Component({
	selector: 'ngs-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public counterService: CounterService) {}
}
