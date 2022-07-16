import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../../../ng-snippets/counter';
import { ThemeService } from '../../../ng-snippets/theme';
import { Theme } from './theme';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ngs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    private readonly themeStorageKey = 'ngs-theme';
    private darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    private themeSub = Subscription.EMPTY;
    systemPreference = false;
    Theme = Theme;

    constructor(public counterService: CounterService, public themeService: ThemeService) {}

    ngOnInit(): void {
        if (!this.systemPreference) {
            const theme = localStorage.getItem(this.themeStorageKey);
            this.themeService.set(theme ? theme : Theme.LIGHT);

            this.themeSub = this.themeService.activeTheme$
                .pipe(filter(Boolean))
                .subscribe((theme) => localStorage.setItem(this.themeStorageKey, theme));
        }

        this.darkModeMediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
            if (this.systemPreference) {
                this.themeService.set(event.matches ? Theme.DARK : Theme.LIGHT);
            }
        });
    }

    handleClickOutside(event: Event): void {
        console.log('clicked outside', event);
    }

    ngOnDestroy(): void {
        this.themeSub.unsubscribe();
    }
}
