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

    constructor(@Inject(THEME_CONFIG) private themeConfig: ThemeConfig) {}

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    set(themeName: string): void {
        if (themeName === this.activeTheme) {
            return;
        }

        const element = document.querySelector(this.themeConfig.selector);
        if (!element) {
            return;
        }

        const selectedTheme = this.themeConfig.themes.find((registeredTheme) => registeredTheme.name === themeName);
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

    get themeNames(): string[] {
        return this.themeConfig.themes.map((theme) => theme.name);
    }

    get themeValues(): string[] {
        return this.themeConfig.themes.map((theme) => theme.value);
    }
}
