import { Component } from '@angular/core';
import { CounterService } from '../../../ng-snippets/counter';
import { ThemeService } from '../../../ng-snippets/theme-service';

@Component({
    selector: 'ngs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public counterService: CounterService, public themeService: ThemeService) {}

    handleClickOutside(event: Event): void {
        console.log('clicked outside', event);
    }
}
