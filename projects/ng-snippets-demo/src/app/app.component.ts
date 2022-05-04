import { Component } from '@angular/core';
import { CounterService } from '../../../ng-snippets/counter';
import { ThemeService } from '../../../ng-snippets/theme';
import { Theme } from './theme';

@Component({
    selector: 'ngs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    Theme = Theme;

    constructor(public counterService: CounterService, public themeService: ThemeService) {
        this.themeService.set(Theme.LIGHT);
    }

    handleClickOutside(event: Event): void {
        console.log('clicked outside', event);
    }
}
