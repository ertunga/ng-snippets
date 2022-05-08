import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THEME_CONFIG } from './token';
import { ThemeConfig } from './theme.model';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);
    activeTheme$ = this.activeThemeSubject.asObservable();
    themeNames: string[] = [];
    themeValues: string[] = [];

    constructor(@Inject(THEME_CONFIG) private themeConfig: ThemeConfig) {
        this.themeConfig.themes.forEach((theme) => {
            this.themeNames.push(theme.name);
            this.themeValues.push(theme.value);
        });
    }

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    set(theme: string): void {
        if (theme === this.activeTheme) {
            return;
        }

        const element = document.querySelector(this.themeConfig.selector);
        if (!element) {
            return;
        }

        const selectedTheme = this.themeConfig.themes.find((registeredTheme) => registeredTheme.name === theme);
        if (!selectedTheme) {
            return;
        }

        this.activeThemeSubject.next(selectedTheme.name);

        if (this.themeConfig.attribute === 'class') {
            element.classList.remove(...this.themeValues);
            element.classList.add(selectedTheme.value);
        } else {
            element.setAttribute(this.themeConfig.attribute, selectedTheme.value);
        }
    }
}
